import { LoginPage } from './components/LoginPage.ts';
import { HomePage } from './components/HomePage.ts';
import { GamePage } from './components/GamePage.ts';
import { ProfilePage } from './components/ProfilePage.ts';
import { storage } from './utils/storage.ts';
import { audioManager } from './utils/audio.ts';
import { achievements as defaultAchievements, dailyTasks as defaultTasks } from './data/dynasties.ts';
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
    this.initData();
    this.init();
  }

  private initData() {
    // Initialize achievements if empty
    if (storage.getAchievements().length === 0) {
      storage.saveAchievements(JSON.parse(JSON.stringify(defaultAchievements)));
    }
    // Initialize tasks if empty
    if (storage.getTasks().length === 0) {
      storage.saveTasks(JSON.parse(JSON.stringify(defaultTasks)));
    }
    // Check first login achievement
    if (this.user) {
      storage.unlockAchievement('a1');
    }
  }

  private init() {
    audioManager.init();
    if (this.user) {
      this.showHome();
    } else {
      this.showLogin();
    }
  }

  private showLogin() {
    this.app.innerHTML = '';
    new LoginPage('app', (user) => {
      this.user = user;
      storage.unlockAchievement('a1');
      this.showHome();
    });
  }

  private showHome() {
    this.app.innerHTML = '';
    this.homePage = new HomePage('app', (page) => {
      if (page === 'profile') {
        this.showProfile();
      } else {
        this.showGame(page);
      }
    });
  }

  private showGame(mode: string) {
    this.app.style.display = 'none';
    if (!this.gamePage) {
      this.gamePage = new GamePage('app', () => {
        this.app.style.display = 'block';
        this.showHome();
      });
    }
    this.gamePage.show(mode);
  }

  private showProfile() {
    this.app.innerHTML = '';
    this.profilePage = new ProfilePage('app', () => {
      this.showHome();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const loading = document.getElementById('loading');
  if (loading) {
    setTimeout(() => {
      loading.style.opacity = '0';
      setTimeout(() => loading.remove(), 500);
    }, 600);
  }
  new App();
});
