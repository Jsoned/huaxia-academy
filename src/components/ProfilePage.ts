import { storage } from '../utils/storage.ts';
import { audioManager } from '../utils/audio.ts';
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
    this.container.innerHTML = `<div class="min-h-screen p-4">
      <div class="max-w-lg mx-auto space-y-4">
        <div class="glass rounded-2xl p-6">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center text-deep-blue text-2xl font-bold">${user?.name?.charAt(0) || '?'}</div>
            <div>
              <h2 class="font-serif text-xl gold">${user?.name || '游客'}</h2>
              <p class="text-sm opacity-70">${user?.phone || ''}</p>
              <p class="text-xs opacity-50">${user?.ageGroup ? this.getAgeLabel(user.ageGroup) : ''}</p>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-4 text-center">
            <div class="glass rounded-lg p-3"><p class="text-2xl font-bold text-gold">${user?.level || 1}</p><p class="text-xs opacity-70">等级</p></div>
            <div class="glass rounded-lg p-3"><p class="text-2xl font-bold text-gold">${user?.exp || 0}</p><p class="text-xs opacity-70">经验</p></div>
            <div class="glass rounded-lg p-3"><p class="text-2xl font-bold text-gold">${user?.coins || 0}</p><p class="text-xs opacity-70">金币</p></div>
          </div>
        </div>
        <div class="glass rounded-2xl p-4">
          <h3 class="font-bold text-gold mb-3">📊 详细统计</h3>
          <div class="space-y-2">
            <div class="flex justify-between"><span>游戏次数</span><span class="text-gold">${stats.gamesPlayed}</span></div>
            <div class="flex justify-between"><span>答对题目</span><span class="text-gold">${stats.correctAnswers}</span></div>
            <div class="flex justify-between"><span>总题目数</span><span class="text-gold">${stats.totalQuestions}</span></div>
            <div class="flex justify-between"><span>正确率</span><span class="text-gold">${stats.totalQuestions > 0 ? Math.round(stats.correctAnswers / stats.totalQuestions * 100) : 0}%</span></div>
            <div class="flex justify-between"><span>连续学习</span><span class="text-gold">${stats.streakDays} 天</span></div>
          </div>
        </div>
        <div class="glass rounded-2xl p-4">
          <h3 class="font-bold text-gold mb-3">📖 错题本 (${mistakes.length})</h3>
          ${mistakes.length === 0 ? '<p class="text-sm opacity-50 text-center py-4">暂无错题，继续保持！</p>' :
            '<div class="space-y-2 max-h-60 overflow-y-auto">' + mistakes.slice().reverse().map((m: any) =>
              '<div class="glass rounded-lg p-3"><p class="text-sm font-bold">' + m.question + '</p><p class="text-xs text-red-400 mt-1">正确答案：' + m.options[m.correct] + '</p><p class="text-xs opacity-50 mt-1">' + m.explanation + '</p></div>'
            ).join('') + '</div>'}
        </div>
        <div class="flex gap-3">
          <button id="backBtn" class="flex-1 btn-gold rounded-lg py-3">返回首页</button>
          <button id="clearBtn" class="flex-1 glass rounded-lg py-3 text-red-400">清空数据</button>
        </div>
      </div></div>`;
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