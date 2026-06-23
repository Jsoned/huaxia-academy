import { storage } from '../utils/storage.ts';
import { audioManager } from '../utils/audio.ts';
import type { User } from '../types/index.ts';

export class LoginPage {
  private container: HTMLElement;
  private onLogin?: (user: User) => void;

  constructor(containerId: string, onLogin?: (user: User) => void) {
    this.container = document.getElementById(containerId)!;
    this.onLogin = onLogin;
    this.render();
  }

  private render() {
    this.container.innerHTML = `
      <div class="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10" style="background: radial-gradient(circle at 50% 50%, #D4A574 0%, transparent 70%);"></div>
        <div class="glass rounded-2xl p-8 w-full max-w-md relative z-10 animate-fade-in">
          <div class="text-center mb-6">
            <div class="text-6xl mb-3 animate-bounce-slow">🏛️</div>
            <h1 class="font-serif text-3xl gold mb-1 animate-slide-up">华夏学堂</h1>
            <p class="text-sm opacity-60 animate-slide-up" style="animation-delay:0.1s">穿越古今 · 畅游华夏</p>
          </div>
          <div class="space-y-4">
            <div class="animate-slide-up" style="animation-delay:0.2s">
              <label class="block text-sm mb-1 opacity-80">手机号</label>
              <input type="tel" id="phone" placeholder="请输入手机号" maxlength="11"
                class="w-full bg-deep-blue-light/50 border border-gold/20 rounded-lg px-4 py-3 text-gold-light focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-all">
            </div>
            <div class="animate-slide-up" style="animation-delay:0.3s">
              <label class="block text-sm mb-1 opacity-80">验证码</label>
              <div class="flex gap-2">
                <input type="text" id="code" placeholder="1234" maxlength="4"
                  class="flex-1 bg-deep-blue-light/50 border border-gold/20 rounded-lg px-4 py-3 text-gold-light focus:outline-none focus:border-gold/60 transition-all">
                <button id="sendCode" class="btn-gold rounded-lg px-4 whitespace-nowrap text-sm hover:scale-105 transition-transform">获取验证码</button>
              </div>
            </div>
            <div class="animate-slide-up" style="animation-delay:0.4s">
              <label class="block text-sm mb-1 opacity-80">昵称</label>
              <input type="text" id="name" placeholder="请输入昵称"
                class="w-full bg-deep-blue-light/50 border border-gold/20 rounded-lg px-4 py-3 text-gold-light focus:outline-none focus:border-gold/60 transition-all">
            </div>
            <div class="animate-slide-up" style="animation-delay:0.5s">
              <label class="block text-sm mb-1 opacity-80">年龄段</label>
              <select id="ageGroup"
                class="w-full bg-deep-blue-light/50 border border-gold/20 rounded-lg px-4 py-3 text-gold-light focus:outline-none focus:border-gold/60 transition-all">
                <option value="">请选择年龄段</option>
                <option value="2-6">🌱 启蒙期 (2-6岁)</option>
                <option value="7-12">🌿 少儿期 (7-12岁)</option>
                <option value="13-15">🌳 青少年期 (13-15岁)</option>
                <option value="16-18">🌲 进阶期 (16-18岁)</option>
              </select>
            </div>
            <button id="loginBtn" class="w-full btn-gold rounded-lg py-3 text-lg mt-2 animate-slide-up hover:scale-[1.02] active:scale-[0.98] transition-all" style="animation-delay:0.6s">
              ✨ 进入学堂
            </button>
          </div>
          <p class="text-center text-xs opacity-40 mt-4">登录即表示同意用户协议和隐私政策</p>
        </div>
      </div>
    `;
    this.bindEvents();
    this.addAnimations();
  }

  private addAnimations() {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes bounceSlow { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      .animate-fade-in { animation: fadeIn 0.6s ease-out; }
      .animate-slide-up { animation: slideUp 0.5s ease-out forwards; opacity: 0; }
      .animate-bounce-slow { animation: bounceSlow 2s ease-in-out infinite; }
    `;
    document.head.appendChild(style);
  }

  private bindEvents() {
    const sendBtn = document.getElementById('sendCode') as HTMLButtonElement;
    const loginBtn = document.getElementById('loginBtn') as HTMLButtonElement;

    sendBtn.addEventListener('click', () => {
      const phone = (document.getElementById('phone') as HTMLInputElement).value;
      if (!/^1\d{10}$/.test(phone)) { this.showToast('请输入正确的手机号'); return; }
      let count = 60;
      sendBtn.textContent = count + 's';
      sendBtn.disabled = true;
      const timer = setInterval(() => {
        count--;
        if (count <= 0) { clearInterval(timer); sendBtn.textContent = '获取验证码'; sendBtn.disabled = false; }
        else { sendBtn.textContent = count + 's'; }
      }, 1000);
      this.showToast('验证码已发送: 1234');
      audioManager.playSuccess();
    });

    loginBtn.addEventListener('click', () => {
      const phone = (document.getElementById('phone') as HTMLInputElement).value;
      const code = (document.getElementById('code') as HTMLInputElement).value;
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const ageGroup = (document.getElementById('ageGroup') as HTMLSelectElement).value;

      if (!/^1\d{10}$/.test(phone)) { this.showToast('请输入正确的手机号'); return; }
      if (code !== '1234') { this.showToast('验证码错误'); return; }
      if (!name.trim()) { this.showToast('请输入昵称'); return; }
      if (!ageGroup) { this.showToast('请选择年龄段'); return; }

      const user: User = {
        phone, name: name.trim(), ageGroup, level: 1, exp: 0, coins: 100,
        createdAt: new Date().toISOString(), lastLogin: new Date().toISOString(),
        avatar: this.getAvatar(name), totalGames: 0, totalCorrect: 0,
        streakDays: 0, achievements: []
      };
      storage.saveUser(user);
      audioManager.playLevelUp();
      this.showToast('🎉 欢迎进入华夏学堂！');
      setTimeout(() => { if (this.onLogin) this.onLogin(user); }, 800);
    });
  }

  private getAvatar(name: string): string {
    const avatars = ['🎭', '📜', '🏛️', '🌟', '📚', '🎨', '⚔️', '🌸', '🍶', '🌿'];
    return avatars[name.charCodeAt(0) % avatars.length];
  }

  private showToast(msg: string) {
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-full text-sm z-50 animate-fade-in';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
  }
}
