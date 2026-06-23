import { poems, quizQuestions, events, idioms, leaderboard } from '../data/dynasties.ts';
import { storage } from '../utils/storage.ts';
import { audioManager } from '../utils/audio.ts';
import { DynastyScene } from '../core/DynastyScene.ts';
import type { Character, Poem, QuizQuestion, Idiom, LeaderboardEntry } from '../types/index.ts';

export class GamePage {
  private container: HTMLElement;
  private scene: DynastyScene | null = null;
  private currentMode: string = '';
  private currentPoem: Poem | null = null;
  private currentQuiz: QuizQuestion | null = null;
  private currentIdiom: Idiom | null = null;
  private score = 0;
  private streak = 0;
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
      case 'idiom': this.showIdiom(); break;
      case 'timeline': this.showTimeline(); break;
      case 'leaderboard': this.showLeaderboard(); break;
    }
  }

  hide() {
    if (this.scene) { this.scene.dispose(); this.scene = null; }
    this.container.style.display = 'none';
  }

  private showRoam() {
    this.container.innerHTML = `
      <div class="absolute inset-0 z-10 pointer-events-none">
        <div class="glass sticky top-0 px-4 py-3 flex items-center justify-between pointer-events-auto">
          <button id="backBtn" class="btn-gold rounded-lg px-4 py-2 text-sm hover:scale-105 transition">← 返回</button>
          <h2 class="font-serif text-xl gold">🏛️ 朝代漫游</h2>
          <div class="w-16"></div>
        </div>
        <div id="scene-hint" class="absolute bottom-6 left-4 right-4 glass rounded-xl p-4 text-center pointer-events-auto transition-all duration-300">
          <p class="text-sm opacity-70">点击场景中的人物与他们对话</p>
          <p class="text-xs opacity-40 mt-1">探索唐朝和宋朝的历史世界</p>
        </div>
      </div>
    `;
    const canvasDiv = document.createElement('div');
    canvasDiv.id = 'roam-canvas';
    canvasDiv.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;';
    document.body.appendChild(canvasDiv);

    this.scene = new DynastyScene('roam-canvas', (char) => {
      const hint = document.getElementById('scene-hint');
      if (hint) {
        hint.innerHTML = `
          <div class="flex items-center gap-3 mb-2">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-amber-600/20 flex items-center justify-center text-xl">${char.avatar}</div>
            <div class="text-left">
              <p class="font-bold text-gold">${char.name} · ${char.title}</p>
              <p class="text-xs opacity-60">${char.birthYear}-${char.deathYear} · ${char.dynasty === 'tang' ? '唐朝' : '宋朝'}</p>
            </div>
          </div>
          <p class="text-sm text-left mb-2">${char.description}</p>
          <p class="text-sm italic text-left text-gold/80 mb-2">"${char.quote}"</p>
          <div class="text-left">
            <p class="text-xs opacity-50 mb-1">📚 代表作：${char.famousWorks.join('、')}</p>
            <p class="text-xs opacity-50">💡 趣闻：${char.funFact}</p>
          </div>
        `;
        audioManager.speak(char.name + '说：' + char.quote);
        storage.updateTask('d3', 1);
      }
    });
    this.scene.animate();

    document.getElementById('backBtn')!.addEventListener('click', () => {
      if (canvasDiv.parentNode) document.body.removeChild(canvasDiv);
      this.hide();
      if (this.onBack) this.onBack();
    });
  }

  private showPoem() {
    const poem = poems[Math.floor(Math.random() * poems.length)];
    this.currentPoem = poem;
    const shuffled = [...poem.lines].sort(() => Math.random() - 0.5);
    this.container.innerHTML = `
      <div class="min-h-screen p-4">
        <div class="glass rounded-2xl p-6 max-w-lg mx-auto">
          <div class="flex items-center justify-between mb-4">
            <button id="backBtn" class="btn-gold rounded-lg px-3 py-1 text-sm hover:scale-105 transition">←</button>
            <h2 class="font-serif text-xl gold">📜 诗词拼图</h2>
            <div class="w-10"></div>
          </div>
          <div class="text-center mb-5">
            <p class="text-lg font-bold text-gold">${poem.title}</p>
            <p class="text-sm opacity-60">${poem.author} · ${poem.dynasty === 'tang' ? '唐' : '宋'}</p>
            <p class="text-xs opacity-40 mt-1">💡 提示：${poem.hint}</p>
            <div class="flex justify-center gap-1 mt-2">
              ${poem.tags.map(t => '<span class="text-[10px] bg-gold/10 px-2 py-0.5 rounded">' + t + '</span>').join('')}
            </div>
          </div>
          <div id="poem-slots" class="space-y-2 mb-5"></div>
          <div id="poem-pieces" class="flex flex-wrap gap-2 justify-center mb-4"></div>
          <p id="poem-result" class="text-center h-6 text-sm"></p>
          <div id="poem-appreciation" class="hidden mt-4 p-3 glass rounded-lg">
            <p class="text-xs opacity-70 leading-relaxed">${poem.appreciation}</p>
          </div>
        </div>
      </div>
    `;

    const slotsDiv = document.getElementById('poem-slots')!;
    const piecesDiv = document.getElementById('poem-pieces')!;

    poem.lines.forEach((_, i) => {
      const slot = document.createElement('div');
      slot.className = 'h-12 border-2 border-dashed border-gold/20 rounded-lg flex items-center justify-center text-sm transition-all';
      slot.dataset.index = String(i);
      slot.innerHTML = '<span class="opacity-30">第' + (i + 1) + '句</span>';
      slotsDiv.appendChild(slot);
    });

    shuffled.forEach((line) => {
      const btn = document.createElement('button');
      btn.className = 'btn-gold rounded-lg px-4 py-2 text-sm hover:scale-105 active:scale-95 transition-all';
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
      if (slots[i].textContent?.includes('第') && poem.lines[i] === line) {
        slots[i].innerHTML = '<span class="text-gold">' + line + '</span>';
        slots[i].className = 'h-12 bg-gold/10 border border-gold/40 rounded-lg flex items-center justify-center text-sm transition-all';
        btn.disabled = true;
        btn.style.opacity = '0.3';
        btn.style.pointerEvents = 'none';
        audioManager.playClick();
        this.checkPoemComplete();
        return;
      }
    }
    audioManager.playError();
    btn.classList.add('animate-shake');
    setTimeout(() => btn.classList.remove('animate-shake'), 500);
  }

  private checkPoemComplete() {
    const slots = document.querySelectorAll('#poem-slots > div');
    const poem = this.currentPoem!;
    let correct = 0;
    slots.forEach((slot, i) => { if (slot.textContent === poem.lines[i]) correct++; });
    if (correct === poem.lines.length) {
      document.getElementById('poem-result')!.innerHTML = '<span class="text-green-400">✨ 完成！' + poem.title + ' - ' + poem.author + '</span>';
      document.getElementById('poem-appreciation')!.classList.remove('hidden');
      audioManager.playSuccess();
      audioManager.speak(poem.lines.join('，') + '。');
      const stats = storage.getStats();
      stats.gamesPlayed++;
      stats.poemsSolved = (stats.poemsSolved || 0) + 1;
      storage.saveStats(stats);
      storage.updateTask('d1', 1);
      this.addExp(20);
      this.addCoins(10);
    } else {
      document.getElementById('poem-result')!.innerHTML = '进度 ' + correct + '/' + poem.lines.length;
    }
  }

  private showQuiz() {
    const q = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
    this.currentQuiz = q;
    this.container.innerHTML = `
      <div class="min-h-screen p-4">
        <div class="glass rounded-2xl p-6 max-w-lg mx-auto">
          <div class="flex items-center justify-between mb-4">
            <button id="backBtn" class="btn-gold rounded-lg px-3 py-1 text-sm hover:scale-105 transition">←</button>
            <h2 class="font-serif text-xl gold">🎯 历史问答</h2>
            <div class="w-10"></div>
          </div>
          <div class="flex items-center gap-2 mb-4">
            <span class="text-xs bg-gold/20 px-2 py-1 rounded">${q.dynasty === 'tang' ? '唐朝' : '宋朝'}</span>
            <span class="text-xs bg-deep-blue-light px-2 py-1 rounded">${q.category}</span>
            <span class="text-xs ${q.difficulty === 1 ? 'bg-green-500/20 text-green-400' : q.difficulty === 2 ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'} px-2 py-1 rounded">
              ${q.difficulty === 1 ? '简单' : q.difficulty === 2 ? '中等' : '困难'}
            </span>
          </div>
          <p class="text-lg mb-6 leading-relaxed">${q.question}</p>
          <div id="quiz-options" class="space-y-2"></div>
          <div id="quiz-explain" class="mt-4 hidden"></div>
          <div class="flex justify-between mt-4 text-xs opacity-50">
            <span>连胜：${this.streak} 🔥</span>
            <span>得分：${this.score}</span>
          </div>
        </div>
      </div>
    `;

    const optsDiv = document.getElementById('quiz-options')!;
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'w-full text-left glass rounded-lg p-4 hover:bg-gold/5 transition-all group';
      btn.innerHTML = '<span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-gold text-sm mr-3 group-hover:bg-gold/20 transition">' + String.fromCharCode(65 + i) + '</span><span>' + opt + '</span>';
      btn.addEventListener('click', () => this.handleQuizAnswer(i, btn));
      optsDiv.appendChild(btn);
    });

    document.getElementById('backBtn')!.addEventListener('click', () => { if (this.onBack) this.onBack(); });
  }

  private handleQuizAnswer(idx: number, btn: HTMLButtonElement) {
    const q = this.currentQuiz!;
    const explain = document.getElementById('quiz-explain')!;
    const allBtns = document.querySelectorAll('#quiz-options button');
    allBtns.forEach(b => (b as HTMLButtonElement).disabled = true);

    if (idx === q.correct) {
      btn.className = 'w-full text-left rounded-lg p-4 bg-green-500/10 border border-green-500/40 transition-all';
      explain.innerHTML = '<p class="text-green-400 font-bold mb-1">✓ 回答正确！</p><p class="text-sm opacity-70">' + q.explanation + '</p>';
      audioManager.playSuccess();
      this.score += 10 + (this.streak * 2);
      this.streak++;
      const stats = storage.getStats();
      stats.correctAnswers++;
      stats.totalQuestions++;
      stats.gamesPlayed++;
      stats.quizStreak = this.streak;
      if (this.streak > (stats.maxStreak || 0)) stats.maxStreak = this.streak;
      storage.saveStats(stats);
      storage.updateTask('d2', 1);
      this.addExp(15);
      this.addCoins(5 + this.streak);
      if (this.streak >= 10) storage.unlockAchievement('a5');
    } else {
      btn.className = 'w-full text-left rounded-lg p-4 bg-red-500/10 border border-red-500/40 transition-all';
      (allBtns[q.correct] as HTMLElement).className = 'w-full text-left rounded-lg p-4 bg-green-500/10 border border-green-500/40 transition-all';
      explain.innerHTML = '<p class="text-red-400 font-bold mb-1">✗ 回答错误</p><p class="text-sm opacity-70">' + q.explanation + '</p>';
      audioManager.playError();
      this.streak = 0;
      storage.addMistake(q);
    }
    explain.classList.remove('hidden');
  }

  private showIdiom() {
    const idiom = idioms[Math.floor(Math.random() * idioms.length)];
    this.currentIdiom = idiom;
    const masked = idiom.word.split('').map((c, i) => i % 2 === 0 ? c : '？').join('');
    this.container.innerHTML = `
      <div class="min-h-screen p-4">
        <div class="glass rounded-2xl p-6 max-w-lg mx-auto">
          <div class="flex items-center justify-between mb-4">
            <button id="backBtn" class="btn-gold rounded-lg px-3 py-1 text-sm hover:scale-105 transition">←</button>
            <h2 class="font-serif text-xl gold">🧩 成语挑战</h2>
            <div class="w-10"></div>
          </div>
          <div class="text-center mb-6">
            <p class="text-3xl font-bold text-gold mb-2 tracking-widest">${masked}</p>
            <p class="text-sm opacity-60">${idiom.pinyin}</p>
          </div>
          <div class="glass rounded-lg p-4 mb-4">
            <p class="text-sm mb-2"><span class="text-gold">释义：</span>${idiom.meaning}</p>
            <p class="text-xs opacity-60"><span class="text-gold">出处：</span>${idiom.origin}</p>
          </div>
          <div id="idiom-options" class="grid grid-cols-2 gap-2"></div>
          <div id="idiom-result" class="mt-4 text-center hidden"></div>
        </div>
      </div>
    `;

    const optsDiv = document.getElementById('idiom-options')!;
    const options = [idiom.word];
    while (options.length < 4) {
      const random = idioms[Math.floor(Math.random() * idioms.length)].word;
      if (!options.includes(random)) options.push(random);
    }
    options.sort(() => Math.random() - 0.5);

    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'btn-gold rounded-lg py-3 text-sm hover:scale-105 active:scale-95 transition-all';
      btn.textContent = opt;
      btn.addEventListener('click', () => {
        const result = document.getElementById('idiom-result')!;
        if (opt === idiom.word) {
          result.innerHTML = '<p class="text-green-400 font-bold">✓ 正确！</p><p class="text-sm mt-2 opacity-70">例句：' + idiom.example + '</p>';
          audioManager.playSuccess();
          this.addExp(15);
          this.addCoins(8);
          storage.updateTask('d4', 1);
        } else {
          result.innerHTML = '<p class="text-red-400 font-bold">✗ 错误</p><p class="text-sm mt-2">正确答案是：<span class="text-gold">' + idiom.word + '</span></p>';
          audioManager.playError();
        }
        result.classList.remove('hidden');
        optsDiv.querySelectorAll('button').forEach(b => (b as HTMLButtonElement).disabled = true);
      });
      optsDiv.appendChild(btn);
    });

    document.getElementById('backBtn')!.addEventListener('click', () => { if (this.onBack) this.onBack(); });
  }

  private showTimeline() {
    const sorted = [...events].sort((a, b) => parseInt(a.year) - parseInt(b.year));
    this.container.innerHTML = `
      <div class="min-h-screen p-4">
        <div class="glass rounded-2xl p-6 max-w-lg mx-auto">
          <div class="flex items-center justify-between mb-6">
            <button id="backBtn" class="btn-gold rounded-lg px-3 py-1 text-sm hover:scale-105 transition">←</button>
            <h2 class="font-serif text-xl gold">📅 历史年表</h2>
            <div class="w-10"></div>
          </div>
          <div class="space-y-0">
            ${sorted.map((e, i) => `
              <div class="flex gap-4">
                <div class="flex flex-col items-center">
                  <div class="w-3 h-3 rounded-full ${e.importance >= 9 ? 'bg-gold shadow-lg shadow-gold/30' : 'bg-gold/50'} z-10"></div>
                  ${i < sorted.length - 1 ? '<div class="w-0.5 flex-1 bg-gold/20"></div>' : '<div class="w-0.5 h-4"></div>'}
                </div>
                <div class="pb-5 flex-1">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="text-gold font-bold text-sm">${e.year}</span>
                    <span class="text-[10px] bg-gold/10 px-1.5 py-0.5 rounded">${e.dynasty === 'tang' ? '唐朝' : '宋朝'}</span>
                    ${e.importance >= 9 ? '<span class="text-[10px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded">重大</span>' : ''}
                  </div>
                  <p class="font-bold text-sm mb-1">${e.title}</p>
                  <p class="text-xs opacity-60 leading-relaxed">${e.description}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    document.getElementById('backBtn')!.addEventListener('click', () => { if (this.onBack) this.onBack(); });
  }

  private showLeaderboard() {
    const entries = leaderboard;
    const user = storage.getUser();
    const stats = storage.getStats();
    const userScore = (stats.correctAnswers || 0) * 10 + (stats.poemsSolved || 0) * 20;

    this.container.innerHTML = `
      <div class="min-h-screen p-4">
        <div class="glass rounded-2xl p-6 max-w-lg mx-auto">
          <div class="flex items-center justify-between mb-6">
            <button id="backBtn" class="btn-gold rounded-lg px-3 py-1 text-sm hover:scale-105 transition">←</button>
            <h2 class="font-serif text-xl gold">🏆 排行榜</h2>
            <div class="w-10"></div>
          </div>
          <div class="text-center mb-6 p-4 glass rounded-xl">
            <p class="text-sm opacity-60 mb-1">我的排名</p>
            <p class="text-3xl font-bold text-gold">--</p>
            <p class="text-sm opacity-60 mt-1">得分：${userScore}</p>
          </div>
          <div class="space-y-2">
            ${entries.map(e => `
              <div class="flex items-center gap-3 p-3 glass rounded-lg ${e.name === user?.name ? 'border border-gold/30' : ''}">
                <div class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                  ${e.rank === 1 ? 'bg-yellow-500/20 text-yellow-400' : e.rank === 2 ? 'bg-gray-400/20 text-gray-300' : e.rank === 3 ? 'bg-amber-700/20 text-amber-600' : 'bg-deep-blue-light text-gold/60'}">
                  ${e.rank <= 3 ? '👑' : e.rank}
                </div>
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-gold/20 to-amber-600/10 flex items-center justify-center text-lg">
                  ${e.avatar}
                </div>
                <div class="flex-1">
                  <p class="text-sm font-bold ${e.name === user?.name ? 'text-gold' : ''}">${e.name}</p>
                  <p class="text-[10px] opacity-50">Lv.${e.level}</p>
                </div>
                <div class="text-right">
                  <p class="text-sm font-bold text-gold">${e.score}</p>
                  <p class="text-[10px] opacity-50">分</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    document.getElementById('backBtn')!.addEventListener('click', () => { if (this.onBack) this.onBack(); });
  }

  private addExp(amount: number) {
    const user = storage.getUser();
    if (!user) return;
    user.exp = (user.exp || 0) + amount;
    const nextLevel = user.level * 100;
    if (user.exp >= nextLevel) {
      user.level++;
      user.exp -= nextLevel;
      audioManager.playLevelUp();
      this.showToast('🎉 升级了！Lv.' + user.level);
      if (user.level >= 10) storage.unlockAchievement('a8');
    }
    storage.saveUser(user);
  }

  private addCoins(amount: number) {
    const user = storage.getUser();
    if (!user) return;
    user.coins = (user.coins || 0) + amount;
    storage.saveUser(user);
    audioManager.playCoin();
  }

  private showToast(msg: string) {
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-full text-sm z-50 animate-fade-in';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
  }
}
