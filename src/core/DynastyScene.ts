import * as THREE from 'three';
import { Scene3D } from './Scene3D.ts';
import { characters } from '../data/dynasties.ts';
import type { Character } from '../types/index.ts';
export class DynastyScene extends Scene3D {
  private raycaster: THREE.Raycaster;
  private mouse: THREE.Vector2;
  private characterMeshes: Map<string, THREE.Mesh>;
  private particles!: THREE.Points;
  private time = 0;
  private onCharacterClick?: (c: Character) => void;
  constructor(containerId: string, onCharClick?: (c: Character) => void) {
    super(containerId);
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.characterMeshes = new Map();
    this.onCharacterClick = onCharClick;
    this.setupScene();
    this.createEnvironment();
    this.createCharacters();
    this.createParticles();
    this.setupInteraction();
  }
  private setupScene() {
    this.scene.background = new THREE.Color(0x0a0a1a);
    this.scene.fog = new THREE.FogExp2(0x0a0a1a, 0.02);
    this.camera.position.set(0, 8, 15);
    this.camera.lookAt(0, 0, 0);
    const ambient = new THREE.AmbientLight(0xffd4a3, 0.4);
    this.scene.add(ambient);
    const dir = new THREE.DirectionalLight(0xffa500, 0.8);
    dir.position.set(10, 20, 10);
    dir.castShadow = true;
    this.scene.add(dir);
    const hemi = new THREE.HemisphereLight(0xffeeb1, 0x080820, 0.3);
    this.scene.add(hemi);
  }
  private createEnvironment() {
    const groundGeo = new THREE.PlaneGeometry(60, 60);
    const groundMat = new THREE.MeshStandardMaterial({ color: 0x2d4a3e, roughness: 0.9 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);
    for (let i = 0; i < 30; i++) {
      const tree = this.createTree();
      tree.position.set((Math.random() - 0.5) * 50, 0, (Math.random() - 0.5) * 50);
      this.scene.add(tree);
    }
    for (let i = 0; i < 8; i++) {
      const building = this.createBuilding();
      building.position.set((Math.random() - 0.5) * 40, 0, (Math.random() - 0.5) * 40);
      this.scene.add(building);
    }
  }
  private createTree() {
    const group = new THREE.Group();
    const trunkGeo = new THREE.CylinderGeometry(0.2, 0.3, 2, 6);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a3728 });
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = 1;
    group.add(trunk);
    const leavesGeo = new THREE.ConeGeometry(1.5, 3, 6);
    const leavesMat = new THREE.MeshStandardMaterial({ color: 0x1a5c3a });
    const leaves = new THREE.Mesh(leavesGeo, leavesMat);
    leaves.position.y = 3;
    group.add(leaves);
    return group;
  }
  private createBuilding() {
    const group = new THREE.Group();
    const baseGeo = new THREE.BoxGeometry(4, 3, 4);
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.y = 1.5;
    group.add(base);
    const roofGeo = new THREE.ConeGeometry(3.5, 2, 4);
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x8b0000 });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.y = 3.5;
    roof.rotation.y = Math.PI / 4;
    group.add(roof);
    return group;
  }
  private createCharacters() {
    characters.forEach(char => {
      const group = new THREE.Group();
      const bodyGeo = new THREE.CylinderGeometry(0.4, 0.5, 1.8, 8);
      const bodyMat = new THREE.MeshStandardMaterial({ color: char.color });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.position.y = 0.9;
      group.add(body);
      const headGeo = new THREE.SphereGeometry(0.35, 8, 8);
      const headMat = new THREE.MeshStandardMaterial({ color: 0xffdbac });
      const head = new THREE.Mesh(headGeo, headMat);
      head.position.y = 2.1;
      group.add(head);
      const hatGeo = new THREE.ConeGeometry(0.4, 0.5, 8);
      const hatMat = new THREE.MeshStandardMaterial({ color: 0x1a1a2e });
      const hat = new THREE.Mesh(hatGeo, hatMat);
      hat.position.y = 2.5;
      group.add(hat);
      group.position.set(char.x, char.y, char.z);
      group.userData = { character: char };
      this.scene.add(group);
      this.characterMeshes.set(char.id, body);
      const label = this.createLabel(char.name);
      label.position.set(char.x, char.y + 3, char.z);
      this.scene.add(label);
    });
  }
  private createLabel(text: string) {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 32;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
    ctx.fillRect(0, 0, 128, 32);
    ctx.fillStyle = '#D4A574';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(text, 64, 22);
    const tex = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({ map: tex });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(2, 0.5, 1);
    return sprite;
  }
  private createParticles() {
    const count = 300;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 60;
      pos[i + 1] = Math.random() * 20;
      pos[i + 2] = (Math.random() - 0.5) * 60;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ color: 0xffd700, size: 0.1, transparent: true, opacity: 0.6 });
    this.particles = new THREE.Points(geo, mat);
    this.scene.add(this.particles);
  }
  private setupInteraction() {
    this.renderer.domElement.addEventListener('click', (e) => {
      const rect = this.renderer.domElement.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObjects(this.scene.children, true);
      for (const hit of intersects) {
        let obj: THREE.Object3D = hit.object;
        while (obj.parent && obj.parent !== this.scene) {
          if (obj.parent.userData?.character) {
            const char = obj.parent.userData.character as Character;
            if (this.onCharacterClick) this.onCharacterClick(char);
            return;
          }
          obj = obj.parent;
        }
      }
    });
  }
  animate() {
    this.time += 0.01;
    const positions = this.particles.geometry.attributes.position.array as Float32Array;
    for (let i = 1; i < positions.length; i += 3) {
      positions[i] += Math.sin(this.time + i) * 0.01;
      if (positions[i] > 20) positions[i] = 0;
    }
    this.particles.geometry.attributes.position.needsUpdate = true;
    this.characterMeshes.forEach((mesh, id) => {
      mesh.position.y = 1 + Math.sin(this.time + parseInt(id)) * 0.1;
    });
    this.render();
    requestAnimationFrame(() => this.animate());
  }
}