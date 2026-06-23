import { storage } from '../utils/storage.ts';
import { audioManager } from '../utils/audio.ts';
import { achievements } from '../data/dynasties.ts';

export class ProfilePage {
  private container: HTMLElement;
  private onBack?: () => void;

  constructor(containerId: string, onBack?: () => void) {
    this.container = document.getElementById(containerId)!;
    this.onBack = onBack;
    this.render();
  }

  private render() {
    const user = storage.getUser();
    const stats = storage.getStats();
    const mistakes = storage.getMistakes();
    const userAchievements = storage.getAchievements();
    const unlockedCount = userAchievements.filter(a => a.unlocked).length;
    const nextLevelExp = (user?.level || 1) * 100;
    const expPercent = Math.min(((user?.exp || 0) / nextLevelExp) * 100, 100);

    this.container.innerHTML = `
      <div class="min-h-screen p-4 pb-20">
        <div class="max-w-lg mx-auto space-y-4">
          <!-- Profile Card -->
          <div class="glass rounded-2xl p-6 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 opacity-10" style="background: radial-gradient(circle, #D4A574 0%, transparent 70%);"></div>
            <div class="flex items-center gap-4 mb-5 relative z-10">
              <div class="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-amber-600 flex items-center justify-center text-deep-blue text-3xl font-bold shadow-lg shadow-gold/20">
                ${user?.avatar || '👤'}
              </div>
              <div class="flex-1">
                <h2 class="font-serif text-xl gold">${user?.name || '游客'}</h2>
                <p class="text-sm opacity-60">${user?.phone || ''}</p>
                <div class="flex items-center gap-2 mt-1">
                  <span class="text-xs bg-gold/20 px-2 py-0.5 rounded">Lv.${user?.level || 1}</span>
                  <span class="text-xs opacity-50">${this.getAgeLabel(user?.ageGroup || '')}</span>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="flex justify-between text-xs mb-1">
                <span class="opacity-60">经验值</span>
                <span class="text-gold">${user?.exp || 0}/${nextLevelExp}</span>
              </div>
              <div class="w-full h-2 bg-deep-blue-light rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-gold to-amber-400 rounded-full transition-all duration-500" style="width:${expPercent}%"></div>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-3 text-center">
              <div class="glass rounded-lg p-3">
                <p class="text-2xl font-bold text-gold">${user?.level || 1}</p>
                <p class="text-[10px] opacity-60">等级</p>
              </div>
              <div class="glass rounded-lg p-3">
                <p class="text-2xl font-bold text-gold">${user?.exp || 0}</p>
                <p class="text-[10px] opacity-60">经验</p>
              </div>
              <div class="glass rounded-lg p-3">
                <p class="text-2xl font-bold text-gold">${user?.coins || 0}</p>
                <p class="text-[10px] opacity-60">金币</p>
              </div>
            </div>
          </div>

          <!-- Achievements -->
          <div class="glass rounded-2xl p-4">
            <div class="flex items-center justify-between mb-3">
              <h3 class="font-bold text-gold flex items-center gap-2">
                <span>🏅</span> 成就系统
              </h3>
              <span class="text-xs opacity-50">${unlockedCount}/${achievements.length}</span>
            </div>
            <div class="grid grid-cols-5 gap-2">
              ${userAchievements.map(a => `
                <div class="text-center opacity-${a.unlocked ? '100' : '40'}">
                  <div class="w-12 h-12 mx-auto rounded-xl ${a.unlocked ? 'bg-gradient-to-br from-gold/30 to-amber-600/20' : 'bg-deep-blue-light/50'} flex items-center justify-center text-2xl mb-1 transition-all">
                    ${a.icon}
                  </div>
                  <p class="text-[9px] truncate">${a.name}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Stats -->
          <div class="glass rounded-2xl p-4">
            <h3 class="font-bold text-gold mb-3 flex items-center gap-2">
              <span>📊</span> 详细统计
            </h3>
            <div class="space-y-2">
              <div class="flex justify-between items-center p-2 rounded-lg bg-deep-blue-light/30">
                <span class="text-sm opacity-70">游戏次数</span>
                <span class="text-gold font-bold">${stats.gamesPlayed || 0}</span>
              </div>
              <div class="flex justify-between items-center p-2 rounded-lg bg-deep-blue-light/30">
                <span class="text-sm opacity-70">答对题目</span>
                <span class="text-gold font-bold">${stats.correctAnswers || 0}</span>
              </div>
              <div class="flex justify-between items-center p-2 rounded-lg bg-deep-blue-light/30">
                <span class="text-sm opacity-70">总题目数</span>
                <span class="text-gold font-bold">${stats.totalQuestions || 0}</span>
              </div>
              <div class="flex justify-between items-center p-2 rounded-lg bg-deep-blue-light/30">
                <span class="text-sm opacity-70">正确率</span>
                <span class="text-gold font-bold">${stats.totalQuestions > 0 ? Math.round(stats.correctAnswers / stats.totalQuestions * 100) : 0}%</span>
              </div>
              <div class="flex justify-between items-center p-2 rounded-lg bg-deep-blue-light/30">
                <span class="text-sm opacity-70">诗词完成</span>
                <span class="text-gold font-bold">${stats.poemsSolved || 0}</span>
              </div>
              <div class="flex justify-between items-center p-2 rounded-lg bg-deep-blue-light/30">
                <span class="text-sm opacity-70">最高连胜</span>
                <span class="text-gold font-bold">${stats.maxStreak || 0} 🔥</span>
              </div>
              <div class="flex justify-between items-center p-2 rounded-lg bg-deep-blue-light/30">
                <span class="text-sm opacity-70">连续学习</span>
                <span class="text-gold font-bold">${stats.streakDays || 0} 天</span>
              </div>
            </div>
          </div>

          <!-- Mistakes -->
          <div class="glass rounded-2xl p-4">
            <h3 class="font-bold text-gold mb-3 flex items-center gap-2">
              <span>📖</span> 错题本 (${mistakes.length})
            </h3>
            ${mistakes.length === 0 ?
              '<p class="text-sm opacity-50 text-center py-6">暂无错题，继续保持！🎉</p>' :
              '<div class="space-y-2 max-h-60 overflow-y-auto scroll-hide">' +
              mistakes.slice().reverse().map((m: any) => `
                <div class="glass rounded-lg p-3">
                  <p class="text-sm font-bold mb-1">${m.question}</p>
                  <p class="text-xs text-green-400 mb-1">✓ ${m.options[m.correct]}</p>
                  <p class="text-xs opacity-50">${m.explanation}</p>
                </div>
              `).join('') + '</div>'}
          </div>

          <!-- Actions -->
          <div class="flex gap-3">
            <button id="backBtn" class="flex-1 btn-gold rounded-xl py-3 hover:scale-[1.02] active:scale-[0.98] transition-all">
              ← 返回首页
            </button>
            <button id="clearBtn" class="flex-1 glass rounded-xl py-3 text-red-400 hover:bg-red-500/10 transition-all">
              🗑️ 清空数据
            </button>
          </div>
        </div>
      </div>
    `;
    this.bindEvents();
  }

  private getAgeLabel(g: string) {
    const map: Record<string, string> = { '2-6': '启蒙期', '7-12': '少儿期', '13-15': '青少年期', '16-18': '进阶期' };
    return map[g] || g;
  }

  private bindEvents() {
    document.getElementById('backBtn')?.addEventListener('click', () => {
      audioManager.playClick();
      if (this.onBack) this.onBack();
    });
    document.getElementById('clearBtn')?.addEventListener('click', () => {
      if (confirm('确定要清空所有数据吗？此操作不可恢复！')) {
        storage.clearAll();
        audioManager.playSuccess();
        this.render();
      }
    });
  }
}
