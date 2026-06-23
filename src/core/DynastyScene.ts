import * as THREE from 'three';
import { Scene3D } from './Scene3D.ts';
import { characters } from '../data/dynasties.ts';
import type { Character } from '../types/index.ts';

export class DynastyScene extends Scene3D {
  private raycaster: THREE.Raycaster;
  private mouse: THREE.Vector2;
  private characterGroups: Map<string, THREE.Group>;
  private particles!: THREE.Points;
  private time = 0;
  private onCharacterClick?: (c: Character) => void;
  private animFrameId = 0;

  constructor(containerId: string, onCharClick?: (c: Character) => void) {
    super(containerId);
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.characterGroups = new Map();
    this.onCharacterClick = onCharClick;
    this.setupScene();
    this.createEnvironment();
    this.createCharacters();
    this.createParticles();
    this.createLanterns();
    this.setupInteraction();
  }

  private setupScene() {
    this.scene.background = new THREE.Color(0x0a0a1a);
    this.scene.fog = new THREE.FogExp2(0x0a0a1a, 0.015);
    this.camera.position.set(0, 10, 20);
    this.camera.lookAt(0, 0, 0);

    // Ambient light
    const ambient = new THREE.AmbientLight(0xffd4a3, 0.35);
    this.scene.add(ambient);

    // Main directional light (moonlight)
    const dir = new THREE.DirectionalLight(0xffa500, 0.6);
    dir.position.set(15, 25, 10);
    dir.castShadow = true;
    dir.shadow.mapSize.width = 1024;
    dir.shadow.mapSize.height = 1024;
    this.scene.add(dir);

    // Hemisphere light
    const hemi = new THREE.HemisphereLight(0xffeeb1, 0x080820, 0.25);
    this.scene.add(hemi);

    // Rim light for drama
    const rim = new THREE.DirectionalLight(0x4169E1, 0.3);
    rim.position.set(-10, 5, -10);
    this.scene.add(rim);
  }

  private createEnvironment() {
    // Ground with texture-like appearance
    const groundGeo = new THREE.PlaneGeometry(80, 80, 32, 32);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x1a3a2a,
      roughness: 0.95,
      metalness: 0.05
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);

    // Stone paths
    for (let i = 0; i < 5; i++) {
      const pathGeo = new THREE.PlaneGeometry(2, 15);
      const pathMat = new THREE.MeshStandardMaterial({ color: 0x5a5a5a, roughness: 0.9 });
      const path = new THREE.Mesh(pathGeo, pathMat);
      path.rotation.x = -Math.PI / 2;
      path.position.set((i - 2) * 8, 0.01, 0);
      this.scene.add(path);
    }

    // Trees
    for (let i = 0; i < 40; i++) {
      const tree = this.createTree();
      const angle = Math.random() * Math.PI * 2;
      const radius = 12 + Math.random() * 25;
      tree.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
      tree.rotation.y = Math.random() * Math.PI;
      this.scene.add(tree);
    }

    // Buildings
    const buildingPositions = [
      [0, 0, -12], [12, 0, -8], [-12, 0, -8],
      [8, 0, 8], [-8, 0, 8], [0, 0, 12]
    ];
    buildingPositions.forEach(pos => {
      const building = this.createBuilding();
      building.position.set(pos[0], 0, pos[1]);
      this.scene.add(building);
    });

    // Lotus pond
    this.createLotusPond([0, 0, 0]);
  }

  private createTree() {
    const group = new THREE.Group();
    // Trunk
    const trunkGeo = new THREE.CylinderGeometry(0.15, 0.25, 2.5, 6);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x3d2817, roughness: 0.9 });
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = 1.25;
    group.add(trunk);
    // Leaves - multiple layers
    const leafColors = [0x1a5c3a, 0x2d7a4a, 0x0d4a2a];
    for (let i = 0; i < 3; i++) {
      const leavesGeo = new THREE.ConeGeometry(1.8 - i * 0.3, 2.5, 6);
      const leavesMat = new THREE.MeshStandardMaterial({ color: leafColors[i], roughness: 0.8 });
      const leaves = new THREE.Mesh(leavesGeo, leavesMat);
      leaves.position.y = 3 + i * 1.2;
      group.add(leaves);
    }
    return group;
  }

  private createBuilding() {
    const group = new THREE.Group();
    // Base platform
    const platformGeo = new THREE.BoxGeometry(6, 0.5, 6);
    const platformMat = new THREE.MeshStandardMaterial({ color: 0x6a5a4a, roughness: 0.9 });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.y = 0.25;
    group.add(platform);

    // Main building body
    const bodyGeo = new THREE.BoxGeometry(4.5, 3.5, 4.5);
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x8b4513, roughness: 0.85 });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 2.25;
    group.add(body);

    // Roof - traditional Chinese style
    const roofGeo = new THREE.ConeGeometry(3.8, 1.8, 4);
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x8b0000, roughness: 0.7 });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.y = 4.8;
    roof.rotation.y = Math.PI / 4;
    group.add(roof);

    // Second tier roof
    const roof2Geo = new THREE.ConeGeometry(2.5, 1.2, 4);
    const roof2 = new THREE.Mesh(roof2Geo, roofMat);
    roof2.position.y = 6.0;
    roof2.rotation.y = Math.PI / 4;
    group.add(roof2);

    // Columns
    const colGeo = new THREE.CylinderGeometry(0.15, 0.15, 3.5, 8);
    const colMat = new THREE.MeshStandardMaterial({ color: 0x8b0000, roughness: 0.7 });
    const colPositions = [[-2, 2.25, -2], [2, 2.25, -2], [-2, 2.25, 2], [2, 2.25, 2]];
    colPositions.forEach(pos => {
      const col = new THREE.Mesh(colGeo, colMat);
      col.position.set(pos[0], pos[1], pos[2]);
      group.add(col);
    });

    return group;
  }

  private createLotusPond(position: [number, number, number]) {
    const group = new THREE.Group();
    // Pond
    const pondGeo = new THREE.CircleGeometry(3, 16);
    const pondMat = new THREE.MeshStandardMaterial({ color: 0x1a3a5a, roughness: 0.3, metalness: 0.2 });
    const pond = new THREE.Mesh(pondGeo, pondMat);
    pond.rotation.x = -Math.PI / 2;
    pond.position.y = 0.02;
    group.add(pond);

    // Lotus leaves
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 1 + Math.random() * 1.5;
      const leafGeo = new THREE.CircleGeometry(0.4, 8);
      const leafMat = new THREE.MeshStandardMaterial({ color: 0x2d5a3a, roughness: 0.8 });
      const leaf = new THREE.Mesh(leafGeo, leafMat);
      leaf.rotation.x = -Math.PI / 2;
      leaf.position.set(Math.cos(angle) * radius, 0.03, Math.sin(angle) * radius);
      group.add(leaf);
    }

    group.position.set(position[0], position[1], position[2]);
    this.scene.add(group);
  }

  private createCharacters() {
    characters.forEach(char => {
      const group = new THREE.Group();

      // Body
      const bodyGeo = new THREE.CylinderGeometry(0.35, 0.45, 1.6, 8);
      const bodyMat = new THREE.MeshStandardMaterial({ color: char.color, roughness: 0.7 });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.position.y = 0.8;
      body.castShadow = true;
      group.add(body);

      // Head
      const headGeo = new THREE.SphereGeometry(0.3, 12, 12);
      const headMat = new THREE.MeshStandardMaterial({ color: 0xffdbac, roughness: 0.6 });
      const head = new THREE.Mesh(headGeo, headMat);
      head.position.y = 1.85;
      group.add(head);

      // Hat
      const hatGeo = new THREE.ConeGeometry(0.35, 0.45, 8);
      const hatMat = new THREE.MeshStandardMaterial({ color: 0x1a1a2e, roughness: 0.6 });
      const hat = new THREE.Mesh(hatGeo, hatMat);
      hat.position.y = 2.2;
      group.add(hat);

      // Glow ring around character
      const glowGeo = new THREE.RingGeometry(0.6, 0.8, 16);
      const glowMat = new THREE.MeshBasicMaterial({
        color: char.color,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide
      });
      const glow = new THREE.Mesh(glowGeo, glowMat);
      glow.rotation.x = -Math.PI / 2;
      glow.position.y = 0.05;
      group.add(glow);

      group.position.set(char.x, char.y, char.z);
      group.userData = { character: char, glow: glow };
      this.scene.add(group);
      this.characterGroups.set(char.id, group);

      // Label
      const label = this.createLabel(char.name + ' · ' + char.title);
      label.position.set(char.x, char.y + 3.2, char.z);
      this.scene.add(label);
    });
  }

  private createLabel(text: string) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 48;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = 'rgba(10, 10, 26, 0.85)';
    ctx.beginPath();
    ctx.roundRect(4, 4, 248, 40, 8);
    ctx.fill();
    ctx.strokeStyle = 'rgba(212, 165, 116, 0.4)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = '#D4A574';
    ctx.font = 'bold 18px "Noto Sans SC", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(text, 128, 30);
    const tex = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({ map: tex, transparent: true });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(3, 0.6, 1);
    return sprite;
  }

  private createParticles() {
    const count = 400;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = Math.random() * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
      sizes[i] = Math.random() * 2 + 0.5;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    const mat = new THREE.PointsMaterial({
      color: 0xffd700,
      size: 0.15,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true
    });
    this.particles = new THREE.Points(geo, mat);
    this.scene.add(this.particles);
  }

  private createLanterns() {
    const lanternPositions = [
      [-6, 0, -6], [6, 0, -6], [-6, 0, 6], [6, 0, 6],
      [0, 0, -10], [0, 0, 10], [-10, 0, 0], [10, 0, 0]
    ];
    lanternPositions.forEach(pos => {
      const group = new THREE.Group();
      // Pole
      const poleGeo = new THREE.CylinderGeometry(0.05, 0.05, 3, 6);
      const poleMat = new THREE.MeshStandardMaterial({ color: 0x4a3728 });
      const pole = new THREE.Mesh(poleGeo, poleMat);
      pole.position.y = 1.5;
      group.add(pole);
      // Lantern body
      const lanternGeo = new THREE.SphereGeometry(0.3, 8, 8);
      const lanternMat = new THREE.MeshStandardMaterial({
        color: 0xff6600,
        emissive: 0xff4400,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.9
      });
      const lantern = new THREE.Mesh(lanternGeo, lanternMat);
      lantern.position.y = 3;
      group.add(lantern);
      // Light
      const light = new THREE.PointLight(0xff6600, 0.5, 8);
      light.position.y = 3;
      group.add(light);
      group.position.set(pos[0], pos[1], pos[2]);
      this.scene.add(group);
    });
  }

  private setupInteraction() {
    const canvas = this.renderer.domElement;
    canvas.style.cursor = 'pointer';

    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      this.raycaster.setFromCamera(this.mouse, this.camera);

      // Get all character meshes for raycasting
      const charMeshes: THREE.Object3D[] = [];
      this.characterGroups.forEach(group => {
        group.traverse(child => {
          if (child instanceof THREE.Mesh) charMeshes.push(child);
        });
      });

      const intersects = this.raycaster.intersectObjects(charMeshes, false);
      if (intersects.length > 0) {
        let obj: THREE.Object3D = intersects[0].object;
        while (obj.parent && obj.parent !== this.scene) {
          if (obj.parent.userData?.character) {
            const char = obj.parent.userData.character as Character;
            // Highlight effect
            const glow = obj.parent.userData.glow as THREE.Mesh;
            if (glow) {
              (glow.material as THREE.MeshBasicMaterial).opacity = 0.8;
              setTimeout(() => {
                (glow.material as THREE.MeshBasicMaterial).opacity = 0.3;
              }, 500);
            }
            if (this.onCharacterClick) this.onCharacterClick(char);
            return;
          }
          obj = obj.parent;
        }
      }
    });

    // Mouse move for hover effect
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      this.raycaster.setFromCamera(this.mouse, this.camera);

      const charMeshes: THREE.Object3D[] = [];
      this.characterGroups.forEach(group => {
        group.traverse(child => {
          if (child instanceof THREE.Mesh) charMeshes.push(child);
        });
      });

      const intersects = this.raycaster.intersectObjects(charMeshes, false);
      canvas.style.cursor = intersects.length > 0 ? 'pointer' : 'default';
    });
  }

  animate() {
    this.time += 0.008;

    // Animate particles
    const positions = this.particles.geometry.attributes.position.array as Float32Array;
    for (let i = 1; i < positions.length; i += 3) {
      positions[i] += Math.sin(this.time + i * 0.1) * 0.008;
      if (positions[i] > 25) positions[i] = 0;
    }
    this.particles.geometry.attributes.position.needsUpdate = true;

    // Animate characters (gentle bobbing)
    this.characterGroups.forEach((group, id) => {
      group.position.y = 1 + Math.sin(this.time + parseInt(id.replace('c', '')) * 0.5) * 0.08;
      // Rotate glow
      const glow = group.userData.glow as THREE.Mesh;
      if (glow) glow.rotation.z = this.time * 0.5;
    });

    // Slow camera orbit
    const camRadius = 20;
    this.camera.position.x = Math.sin(this.time * 0.05) * camRadius;
    this.camera.position.z = Math.cos(this.time * 0.05) * camRadius;
    this.camera.lookAt(0, 2, 0);

    this.render();
    this.animFrameId = requestAnimationFrame(() => this.animate());
  }

  dispose() {
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
    super.dispose();
  }
}
