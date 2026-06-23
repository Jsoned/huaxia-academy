import { poems, quizQuestions, events } from '../data/dynasties.ts';
import { storage } from '../utils/storage.ts';
import { audioManager } from '../utils/audio.ts';
import { DynastyScene } from '../core/DynastyScene.ts';
import type { Character, Poem, QuizQuestion } from '../types/index.ts';
export class GamePage {
  private container: HTMLElement;
  private scene: DynastyScene | null = null;
  private currentMode: string = '';
  private currentPoem: Poem | null = null;
  private currentQuiz: QuizQuestion | null = null;
  private score = 0;
  private onBack?: () => void;
  constructor(containerId: string, onBack?: () => void) {
    this.container = document.getElementById(containerId)!;
    this.onBack = onBack;
  }
  show(mode: string) {
    this.currentMode = mode;
    this.container.innerHTML = '';
    this.container.style.display = 'block';
    switch (mode) {
      case 'roam': this.showRoam(); break;
      case 'poem': this.showPoem(); break;
      case 'quiz': this.showQuiz(); break;
      case 'timeline': this.showTimeline(); break;
    }
  }
  hide() {
    if (this.scene) { this.scene.dispose(); this.scene = null; }
    this.container.style.display = 'none';
  }
  private showRoam() {
    this.container.innerHTML = `<div class="absolute inset-0 z-10">
      <div class="glass sticky top-0 px-4 py-3 flex items-center justify-between">
        <button id="backBtn" class="btn-gold rounded px-4 py-2">← 返回</button>
        <h2 class="font-serif text-xl gold">朝代漫游</h2><div class="w-16"></div>
      </div>
      <div id="scene-hint" class="absolute bottom-4 left-4 right-4 glass rounded-lg p-3 text-center">
        <p class="text-sm">点击场景中的人物与他们对话</p>
      </div></div>`;
    const canvasDiv = document.createElement('div');
    canvasDiv.id = 'roam-canvas';
    canvasDiv.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;';
    document.body.appendChild(canvasDiv);
    this.scene = new DynastyScene('roam-canvas', (char) => {
      const hint = document.getElementById('scene-hint');
      if (hint) {
        hint.innerHTML = `<p class="font-bold text-gold">${char.name} · ${char.title}</p>
          <p class="text-sm mt-1">${char.description}</p>
          <p class="text-sm italic mt-1">"${char.quote}"</p>`;
        audioManager.speak(char.name + '说：' + char.quote);
      }
    });
    this.scene.animate();
    document.getElementById('backBtn')!.addEventListener('click', () => {
      document.body.removeChild(canvasDiv);
      this.hide();
      if (this.onBack) this.onBack();
    });
  }
  private showPoem() {
    const poem = poems[Math.floor(Math.random() * poems.length)];
    this.currentPoem = poem;
    const shuffled = [...poem.lines].sort(() => Math.random() - 0.5);
    this.container.innerHTML = `<div class="min-h-screen p-4">
      <div class="glass rounded-2xl p-6 max-w-lg mx-auto">
        <div class="flex items-center justify-between mb-4">
          <button id="backBtn" class="btn-gold rounded px-3 py-1 text-sm">←</button>
          <h2 class="font-serif text-xl gold">诗词拼图</h2><div class="w-10"></div>
        </div>
        <div class="text-center mb-4">
          <p class="text-lg font-bold">${poem.title}</p>
          <p class="text-sm opacity-70">${poem.author} · ${poem.dynasty === 'tang' ? '唐' : '宋'}</p>
          <p class="text-xs opacity-50 mt-1">提示：${poem.hint}</p>
        </div>
        <div id="poem-slots" class="space-y-2 mb-4"></div>
        <div id="poem-pieces" class="flex flex-wrap gap-2 justify-center"></div>
        <p id="poem-result" class="text-center mt-4 h-6"></p>
      </div></div>`;
    const slotsDiv = document.getElementById('poem-slots')!;
    const piecesDiv = document.getElementById('poem-pieces')!;
    poem.lines.forEach((_, i) => {
      const slot = document.createElement('div');
      slot.className = 'h-10 border-2 border-dashed border-gold/30 rounded flex items-center justify-center text-sm';
      slot.dataset.index = String(i);
      slot.textContent = '第' + (i + 1) + '句';
      slotsDiv.appendChild(slot);
    });
    shuffled.forEach((line) => {
      const btn = document.createElement('button');
      btn.className = 'btn-gold rounded px-3 py-2 text-sm';
      btn.textContent = line;
      btn.addEventListener('click', () => this.handlePoemClick(line, btn));
      piecesDiv.appendChild(btn);
    });
    document.getElementById('backBtn')!.addEventListener('click', () => { if (this.onBack) this.onBack(); });
  }
  private handlePoemClick(line: string, btn: HTMLButtonElement) {
    if (!this.currentPoem) return;
    const poem = this.currentPoem;
    const slots = document.querySelectorAll('#poem-slots > div');
    for (let i = 0; i < poem.lines.length; i++) {
      if (slots[i].textContent?.startsWith('第') && poem.lines[i] === line) {
        slots[i].textContent = line;
        slots[i].className = 'h-10 bg-gold/20 border border-gold rounded flex items-center justify-center text-sm';
        btn.disabled = true;
        btn.style.opacity = '0.3';
        this.checkPoemComplete();
        return;
      }
    }
  }
  private checkPoemComplete() {
    const slots = document.querySelectorAll('#poem-slots > div');
    const poem = this.currentPoem!;
    let correct = 0;
    slots.forEach((slot, i) => { if (slot.textContent === poem.lines[i]) correct++; });
    if (correct === poem.lines.length) {
      document.getElementById('poem-result')!.innerHTML = '<span class="text-green-400">✓ 完成！' + poem.title + ' - ' + poem.author + '</span>';
      audioManager.playSuccess();
      audioManager.speak(poem.lines.join('。') + '。');
      const stats = storage.getStats(); stats.gamesPlayed++; storage.saveStats(stats);
    } else {
      document.getElementById('poem-result')!.textContent = '进度 ' + correct + '/' + poem.lines.length;
    }
  }
  private showQuiz() {
    const q = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
    this.currentQuiz = q;
    this.score = 0;
    this.container.innerHTML = `<div class="min-h-screen p-4">
      <div class="glass rounded-2xl p-6 max-w-lg mx-auto">
        <div class="flex items-center justify-between mb-4">
          <button id="backBtn" class="btn-gold rounded px-3 py-1 text-sm">←</button>
          <h2 class="font-serif text-xl gold">历史问答</h2><div class="w-10"></div>
        </div>
        <div class="mb-4"><span class="text-xs bg-gold/20 px-2 py-1 rounded">${q.dynasty === 'tang' ? '唐朝' : '宋朝'}</span></div>
        <p class="text-lg mb-6">${q.question}</p>
        <div id="quiz-options" class="space-y-2"></div>
        <div id="quiz-explain" class="mt-4 hidden"></div>
      </div></div>`;
    const optsDiv = document.getElementById('quiz-options')!;
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'w-full text-left glass rounded-lg p-3 hover:bg-gold/10 transition';
      btn.innerHTML = '<span class="inline-block w-6 h-6 rounded-full bg-gold/20 text-center text-sm mr-2">' + String.fromCharCode(65 + i) + '</span>' + opt;
      btn.addEventListener('click', () => this.handleQuizAnswer(i, btn));
      optsDiv.appendChild(btn);
    });
    document.getElementById('backBtn')!.addEventListener('click', () => { if (this.onBack) this.onBack(); });
  }
  private handleQuizAnswer(idx: number, btn: HTMLButtonElement) {
    const q = this.currentQuiz!;
    const explain = document.getElementById('quiz-explain')!;
    const allBtns = document.querySelectorAll('#quiz-options button');
    if (idx === q.correct) {
      btn.className = 'w-full text-left rounded-lg p-3 bg-green-500/20 border border-green-500';
      explain.innerHTML = '<p class="text-green-400">✓ 回答正确！</p><p class="text-sm mt-1 opacity-70">' + q.explanation + '</p>';
      audioManager.playSuccess();
      this.score++;
      const stats = storage.getStats(); stats.correctAnswers++; stats.totalQuestions++; stats.gamesPlayed++; storage.saveStats(stats);
    } else {
      btn.className = 'w-full text-left rounded-lg p-3 bg-red-500/20 border border-red-500';
      (allBtns[q.correct] as HTMLElement).className = 'w-full text-left rounded-lg p-3 bg-green-500/20 border border-green-500';
      explain.innerHTML = '<p class="text-red-400">✗ 回答错误</p><p class="text-sm mt-1 opacity-70">' + q.explanation + '</p>';
      audioManager.playError();
      storage.addMistake(q);
    }
    explain.classList.remove('hidden');
    allBtns.forEach(b => (b as HTMLButtonElement).disabled = true);
  }
  private showTimeline() {
    const sorted = [...events].sort((a, b) => parseInt(a.year) - parseInt(b.year));
    this.container.innerHTML = `<div class="min-h-screen p-4">
      <div class="glass rounded-2xl p-6 max-w-lg mx-auto">
        <div class="flex items-center justify-between mb-4">
          <button id="backBtn" class="btn-gold rounded px-3 py-1 text-sm">←</button>
          <h2 class="font-serif text-xl gold">历史年表</h2><div class="w-10"></div>
        </div>
        <div class="space-y-4">
          ${sorted.map(e => `<div class="flex gap-3">
            <div class="flex flex-col items-center"><div class="w-3 h-3 rounded-full bg-gold"></div><div class="w-0.5 flex-1 bg-gold/30"></div></div>
            <div class="pb-4">
              <p class="text-gold font-bold">${e.year} · ${e.title}</p>
              <p class="text-xs opacity-70 mb-1">${e.dynasty === 'tang' ? '唐朝' : '宋朝'}</p>
              <p class="text-sm">${e.description}</p>
            </div>
          </div>`).join('')}
        </div>
      </div></div>`;
    document.getElementById('backBtn')!.addEventListener('click', () => { if (this.onBack) this.onBack(); });
  }
}