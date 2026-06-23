import { storage } from '../utils/storage.ts';
import { audioManager } from '../utils/audio.ts';
import type { User } from '../types/index.ts';

export class HomePage {
  private container: HTMLElement;
  private user: User | null;
  private onNavigate?: (page: string) => void;

  constructor(containerId: string, onNavigate?: (page: string) => void) {
    this.container = document.getElementById(containerId)!;
    this.user = storage.getUser();
    this.onNavigate = onNavigate;
    this.render();
  }

  private render() {
    const u = this.user;
    const name = u?.name || '游客';
    const level = u?.level || 1;
    const exp = u?.exp || 0;
    const coins = u?.coins || 0;
    const stats = storage.getStats();
    const nextLevelExp = level * 100;
    const expPercent = Math.min((exp / nextLevelExp) * 100, 100);

    this.container.innerHTML = `
      <div class="min-h-screen pb-20">
        <!-- Header -->
        <header class="glass sticky top-0 z-50 px-4 py-3 flex items-center justify-between backdrop-blur-xl">
          <div class="flex items-center gap-3 cursor-pointer hover:opacity-80 transition" id="profileBtn">
            <div class="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-amber-600 flex items-center justify-center text-deep-blue text-xl shadow-lg shadow-gold/20">
              ${u?.avatar || '👤'}
            </div>
            <div>
              <p class="font-bold text-gold text-sm">${name}</p>
              <div class="flex items-center gap-1 mt-0.5">
                <span class="text-[10px] bg-gold/20 px-1.5 py-0.5 rounded">Lv.${level}</span>
                <div class="w-16 h-1.5 bg-deep-blue-light rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-gold to-amber-400 rounded-full transition-all duration-500" style="width:${expPercent}%"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-1 glass rounded-full px-3 py-1">
              <span class="text-sm">💰</span>
              <span class="text-gold font-bold text-sm">${coins}</span>
            </div>
            <button id="muteBtn" class="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-gold/10 transition">
              <span id="muteIcon">🔊</span>
            </button>
          </div>
        </header>

        <main class="p-4 space-y-5">
          <!-- Hero Banner -->
          <section class="relative rounded-2xl overflow-hidden animate-fade-in">
            <div class="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-deep-blue-light/60 to-deep-blue/80"></div>
            <div class="absolute inset-0 opacity-20" style="background: radial-gradient(circle at 30% 50%, #D4A574 0%, transparent 50%);"></div>
            <div class="relative p-6 text-center">
              <div class="text-5xl mb-2 animate-bounce-slow">🏛️</div>
              <h1 class="font-serif text-3xl gold mb-1 text-glow">华夏学堂</h1>
              <p class="text-sm opacity-60 mb-3">穿越千年，与古人对话</p>
              <div class="flex justify-center gap-4 text-xs opacity-50">
                <span>👤 ${stats.gamesPlayed || 0} 次游戏</span>
                <span>📅 ${stats.streakDays || 0} 天连胜</span>
                <span>⭐ ${(stats.correctAnswers || 0)} 题答对</span>
              </div>
            </div>
          </section>

          <!-- Daily Tasks -->
          <section class="glass rounded-xl p-4 animate-slide-up" style="animation-delay:0.1s">
            <div class="flex items-center justify-between mb-3">
              <h3 class="font-bold text-gold flex items-center gap-2">
                <span>📋</span> 每日任务
              </h3>
              <span class="text-xs opacity-50">完成获取金币奖励</span>
            </div>
            <div class="space-y-2" id="taskList"></div>
          </section>

          <!-- Game Modes -->
          <section>
            <h3 class="font-bold text-gold mb-3 flex items-center gap-2">
              <span>🎮</span> 游戏模式
            </h3>
            <div class="grid grid-cols-2 gap-3">
              <div class="game-card glass rounded-xl p-4 cursor-pointer hover:scale-[1.03] active:scale-[0.97] transition-all group" data-page="roam">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600/30 to-gold/20 flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform">🏛️</div>
                <h4 class="font-bold text-gold text-sm mb-0.5">朝代漫游</h4>
                <p class="text-[10px] opacity-50">3D场景探索历史</p>
                <div class="mt-2 flex items-center gap-1">
                  <span class="text-[10px] bg-gold/10 px-1.5 py-0.5 rounded">16位人物</span>
                </div>
              </div>
              <div class="game-card glass rounded-xl p-4 cursor-pointer hover:scale-[1.03] active:scale-[0.97] transition-all group" data-page="poem">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-600/30 to-rose-400/20 flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform">📜</div>
                <h4 class="font-bold text-gold text-sm mb-0.5">诗词拼图</h4>
                <p class="text-[10px] opacity-50">还原经典诗句</p>
                <div class="mt-2 flex items-center gap-1">
                  <span class="text-[10px] bg-gold/10 px-1.5 py-0.5 rounded">20首诗词</span>
                </div>
              </div>
              <div class="game-card glass rounded-xl p-4 cursor-pointer hover:scale-[1.03] active:scale-[0.97] transition-all group" data-page="quiz">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-400/20 flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform">🎯</div>
                <h4 class="font-bold text-gold text-sm mb-0.5">历史问答</h4>
                <p class="text-[10px] opacity-50">挑战知识储备</p>
                <div class="mt-2 flex items-center gap-1">
                  <span class="text-[10px] bg-gold/10 px-1.5 py-0.5 rounded">25道题目</span>
                </div>
              </div>
              <div class="game-card glass rounded-xl p-4 cursor-pointer hover:scale-[1.03] active:scale-[0.97] transition-all group" data-page="idiom">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600/30 to-emerald-400/20 flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform">🧩</div>
                <h4 class="font-bold text-gold text-sm mb-0.5">成语挑战</h4>
                <p class="text-[10px] opacity-50">猜成语学典故</p>
                <div class="mt-2 flex items-center gap-1">
                  <span class="text-[10px] bg-gold/10 px-1.5 py-0.5 rounded">12个成语</span>
                </div>
              </div>
              <div class="game-card glass rounded-xl p-4 cursor-pointer hover:scale-[1.03] active:scale-[0.97] transition-all group" data-page="timeline">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/30 to-violet-400/20 flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform">📅</div>
                <h4 class="font-bold text-gold text-sm mb-0.5">历史年表</h4>
                <p class="text-[10px] opacity-50">纵览历史大事</p>
                <div class="mt-2 flex items-center gap-1">
                  <span class="text-[10px] bg-gold/10 px-1.5 py-0.5 rounded">12个事件</span>
                </div>
              </div>
              <div class="game-card glass rounded-xl p-4 cursor-pointer hover:scale-[1.03] active:scale-[0.97] transition-all group" data-page="leaderboard">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-600/30 to-amber-400/20 flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform">🏆</div>
                <h4 class="font-bold text-gold text-sm mb-0.5">排行榜</h4>
                <p class="text-[10px] opacity-50">与好友竞技</p>
                <div class="mt-2 flex items-center gap-1">
                  <span class="text-[10px] bg-gold/10 px-1.5 py-0.5 rounded">实时排名</span>
                </div>
              </div>
            </div>
          </section>

          <!-- Achievements -->
          <section class="glass rounded-xl p-4">
            <div class="flex items-center justify-between mb-3">
              <h3 class="font-bold text-gold flex items-center gap-2">
                <span>🏅</span> 成就系统
              </h3>
              <span class="text-xs opacity-50">${storage.getAchievements().filter(a => a.unlocked).length}/10</span>
            </div>
            <div class="flex gap-2 overflow-x-auto pb-1 scroll-hide" id="achievementList"></div>
          </section>

          <!-- Stats -->
          <section class="glass rounded-xl p-4">
            <h3 class="font-bold text-gold mb-3 flex items-center gap-2">
              <span>📊</span> 学习统计
            </h3>
            <div class="grid grid-cols-4 gap-3 text-center">
              <div class="glass rounded-lg p-2">
                <p class="text-xl font-bold text-gold">${stats.gamesPlayed || 0}</p>
                <p class="text-[10px] opacity-60">游戏次数</p>
              </div>
              <div class="glass rounded-lg p-2">
                <p class="text-xl font-bold text-gold">${stats.correctAnswers || 0}</p>
                <p class="text-[10px] opacity-60">答对题目</p>
              </div>
              <div class="glass rounded-lg p-2">
                <p class="text-xl font-bold text-gold">${stats.poemsSolved || 0}</p>
                <p class="text-[10px] opacity-60">诗词完成</p>
              </div>
              <div class="glass rounded-lg p-2">
                <p class="text-xl font-bold text-gold">${stats.streakDays || 0}</p>
                <p class="text-[10px] opacity-60">连续天数</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    `;
    this.renderTasks();
    this.renderAchievements();
    this.bindEvents();
  }

  private renderTasks() {
    const tasks = storage.getTasks();
    const container = document.getElementById('taskList');
    if (!container || tasks.length === 0) return;
    container.innerHTML = tasks.map(t => {
      const pct = Math.min((t.current / t.target) * 100, 100);
      return `<div class="flex items-center gap-3 p-2 rounded-lg ${t.completed ? 'bg-green-500/10' : 'bg-deep-blue-light/30'}">
        <div class="w-8 h-8 rounded-lg ${t.completed ? 'bg-green-500/20' : 'bg-gold/10'} flex items-center justify-center text-sm">
          ${t.completed ? '✅' : '📋'}
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-xs font-medium truncate">${t.title}</p>
          <div class="w-full h-1 bg-deep-blue-light rounded-full mt-1 overflow-hidden">
            <div class="h-full ${t.completed ? 'bg-green-400' : 'bg-gold'} rounded-full transition-all" style="width:${pct}%"></div>
          </div>
        </div>
        <div class="text-right">
          <p class="text-[10px] opacity-60">${t.current}/${t.target}</p>
          <p class="text-[10px] text-gold">+${t.reward}💰</p>
        </div>
      </div>`;
    }).join('');
  }

  private renderAchievements() {
    const achievements = storage.getAchievements();
    const container = document.getElementById('achievementList');
    if (!container) return;
    container.innerHTML = achievements.map(a => `
      <div class="flex-shrink-0 w-16 text-center opacity-${a.unlocked ? '100' : '30'}">
        <div class="w-12 h-12 mx-auto rounded-xl ${a.unlocked ? 'bg-gradient-to-br from-gold/30 to-amber-600/20' : 'bg-deep-blue-light/50'} flex items-center justify-center text-xl mb-1">
          ${a.icon}
        </div>
        <p class="text-[9px] truncate">${a.name}</p>
      </div>
    `).join('');
  }

  private bindEvents() {
    this.container.querySelectorAll('[data-page]').forEach(el => {
      el.addEventListener('click', () => {
        audioManager.playClick();
        const page = el.getAttribute('data-page');
        if (this.onNavigate) this.onNavigate(page!);
      });
      el.addEventListener('mouseenter', () => audioManager.playHover());
    });

    document.getElementById('profileBtn')?.addEventListener('click', () => {
      audioManager.playClick();
      if (this.onNavigate) this.onNavigate('profile');
    });

    const muteBtn = document.getElementById('muteBtn');
    const muteIcon = document.getElementById('muteIcon');
    muteBtn?.addEventListener('click', () => {
      const muted = audioManager.toggleMute();
      if (muteIcon) muteIcon.textContent = muted ? '🔇' : '🔊';
    });
  }
}
