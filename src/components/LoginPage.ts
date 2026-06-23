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
    this.container.innerHTML = `<div class="min-h-screen flex items-center justify-center p-4">
      <div class="glass rounded-2xl p-8 w-full max-w-md">
        <h1 class="font-serif text-3xl text-center gold mb-2">华夏学堂</h1>
        <p class="text-center text-sm opacity-70 mb-6">穿越古今 · 畅游华夏</p>
        <div class="space-y-4">
          <div><label class="block text-sm mb-1">手机号</label>
            <input type="tel" id="phone" placeholder="请输入手机号" maxlength="11" class="w-full bg-deep-blue-light border border-gold/20 rounded-lg px-4 py-3 text-gold-light focus:outline-none focus:border-gold"></div>
          <div><label class="block text-sm mb-1">验证码</label>
            <div class="flex gap-2">
              <input type="text" id="code" placeholder="1234" maxlength="4" class="flex-1 bg-deep-blue-light border border-gold/20 rounded-lg px-4 py-3 text-gold-light focus:outline-none focus:border-gold">
              <button id="sendCode" class="btn-gold rounded-lg px-4 whitespace-nowrap">获取验证码</button>
            </div></div>
          <div><label class="block text-sm mb-1">昵称</label>
            <input type="text" id="name" placeholder="请输入昵称" class="w-full bg-deep-blue-light border border-gold/20 rounded-lg px-4 py-3 text-gold-light focus:outline-none focus:border-gold"></div>
          <div><label class="block text-sm mb-1">年龄段</label>
            <select id="ageGroup" class="w-full bg-deep-blue-light border border-gold/20 rounded-lg px-4 py-3 text-gold-light focus:outline-none focus:border-gold">
              <option value="">请选择</option>
              <option value="2-6">启蒙期 (2-6岁)</option>
              <option value="7-12">少儿期 (7-12岁)</option>
              <option value="13-15">青少年期 (13-15岁)</option>
              <option value="16-18">进阶期 (16-18岁)</option>
            </select></div>
          <button id="loginBtn" class="w-full btn-gold rounded-lg py-3 text-lg">进入学堂</button>
        </div></div></div>`;
    this.bindEvents();
  }
  private bindEvents() {
    const sendBtn = document.getElementById('sendCode')! as HTMLButtonElement;
    const loginBtn = document.getElementById('loginBtn')!;
    sendBtn.addEventListener('click', () => {
      const phone = (document.getElementById('phone') as HTMLInputElement).value;
      if (!/^1\d{10}$/.test(phone)) { alert('请输入正确的手机号'); return; }
      let count = 60;
      sendBtn.textContent = count + 's';
      sendBtn.disabled = true;
      const timer = setInterval(() => {
        count--;
        if (count <= 0) { clearInterval(timer); sendBtn.textContent = '获取验证码'; sendBtn.disabled = false; }
        else { sendBtn.textContent = count + 's'; }
      }, 1000);
      alert('验证码已发送: 1234');
    });
    loginBtn.addEventListener('click', () => {
      const phone = (document.getElementById('phone') as HTMLInputElement).value;
      const code = (document.getElementById('code') as HTMLInputElement).value;
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const ageGroup = (document.getElementById('ageGroup') as HTMLSelectElement).value;
      if (!/^1\d{10}$/.test(phone)) { alert('请输入正确的手机号'); return; }
      if (code !== '1234') { alert('验证码错误'); return; }
      if (!name.trim()) { alert('请输入昵称'); return; }
      if (!ageGroup) { alert('请选择年龄段'); return; }
      const user: User = { phone, name: name.trim(), ageGroup, level: 1, exp: 0, coins: 100, createdAt: new Date().toISOString(), lastLogin: new Date().toISOString() };
      storage.saveUser(user);
      audioManager.playSuccess();
      if (this.onLogin) this.onLogin(user);
    });
  }
}