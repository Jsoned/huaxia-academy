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
    this.container.innerHTML = `<div class="min-h-screen">
      <header class="glass sticky top-0 z-50 px-4 py-3 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center text-deep-blue font-bold">${name.charAt(0)}</div>
          <div><p class="font-bold text-gold">${name}</p><p class="text-xs opacity-70">等级 ${level}</p></div>
        </div>
        <div class="flex items-center gap-4">
          <div class="text-center"><p class="text-xs opacity-70">经验</p><p class="text-gold font-bold">${exp}</p></div>
          <div class="text-center"><p class="text-xs opacity-70">金币</p><p class="text-gold font-bold">${coins}</p></div>
        </div>
      </header>
      <main class="p-4 space-y-6">
        <section class="text-center py-8">
          <h1 class="font-serif text-4xl gold mb-2">华夏学堂</h1>
          <p class="text-sm opacity-70">穿越千年，与古人对话</p>
        </section>
        <section class="grid grid-cols-2 gap-4">
          <div class="glass rounded-xl p-5 card-hover cursor-pointer" data-page="roam">
            <div class="text-4xl mb-2">🏛️</div><h3 class="font-bold text-gold mb-1">朝代漫游</h3><p class="text-xs opacity-70">3D场景探索历史</p></div>
          <div class="glass rounded-xl p-5 card-hover cursor-pointer" data-page="poem">
            <div class="text-4xl mb-2">📜</div><h3 class="font-bold text-gold mb-1">诗词拼图</h3><p class="text-xs opacity-70">还原经典诗句</p></div>
          <div class="glass rounded-xl p-5 card-hover cursor-pointer" data-page="quiz">
            <div class="text-4xl mb-2">🎯</div><h3 class="font-bold text-gold mb-1">历史问答</h3><p class="text-xs opacity-70">挑战知识储备</p></div>
          <div class="glass rounded-xl p-5 card-hover cursor-pointer" data-page="timeline">
            <div class="text-4xl mb-2">📅</div><h3 class="font-bold text-gold mb-1">历史年表</h3><p class="text-xs opacity-70">纵览历史大事</p></div>
        </section>
        <section class="glass rounded-xl p-4">
          <h3 class="font-bold text-gold mb-3">📊 学习统计</h3>
          <div class="grid grid-cols-3 gap-4 text-center">
            <div><p class="text-2xl font-bold text-gold">${storage.getStats().gamesPlayed}</p><p class="text-xs opacity-70">游戏次数</p></div>
            <div><p class="text-2xl font-bold text-gold">${storage.getStats().correctAnswers}</p><p class="text-xs opacity-70">答对题目</p></div>
            <div><p class="text-2xl font-bold text-gold">${storage.getStats().streakDays}</p><p class="text-xs opacity-70">连续天数</p></div>
          </div>
        </section>
      </main></div>`;
    this.bindEvents();
  }
  private bindEvents() {
    this.container.querySelectorAll('[data-page]').forEach(el => {
      el.addEventListener('click', () => {
        audioManager.playClick();
        const page = el.getAttribute('data-page');
        if (this.onNavigate) this.onNavigate(page!);
      });
    });
  }
}