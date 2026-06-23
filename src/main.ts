import { LoginPage } from './components/LoginPage.ts';
import { HomePage } from './components/HomePage.ts';
import { GamePage } from './components/GamePage.ts';
import { ProfilePage } from './components/ProfilePage.ts';
import { storage } from './utils/storage.ts';
import { audioManager } from './utils/audio.ts';
import type { User } from './types/index.ts';

class App {
  private app: HTMLElement;
  private user: User | null = null;
  private homePage: HomePage | null = null;
  private gamePage: GamePage | null = null;
  private profilePage: ProfilePage | null = null;
  constructor() {
    this.app = document.getElementById('app')!;
    this.user = storage.getUser();
    this.init();
  }
  private init() {
    audioManager.init();
    if (this.user) { this.showHome(); }
    else { this.showLogin(); }
  }
  private showLogin() {
    this.app.innerHTML = '';
    new LoginPage('app', (user) => { this.user = user; this.showHome(); });
  }
  private showHome() {
    this.app.innerHTML = '';
    this.homePage = new HomePage('app', (page) => {
      if (page === 'profile') { this.showProfile(); }
      else { this.showGame(page); }
    });
  }
  private showGame(mode: string) {
    this.app.style.display = 'none';
    if (!this.gamePage) {
      this.gamePage = new GamePage('app', () => { this.app.style.display = 'block'; this.showHome(); });
    }
    this.gamePage.show(mode);
  }
  private showProfile() {
    this.app.innerHTML = '';
    this.profilePage = new ProfilePage('app', () => { this.showHome(); });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App();
});
