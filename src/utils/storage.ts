import type { User, Achievement, DailyTask } from '../types/index.ts';

const USER_KEY = 'hx_user_v2';
const STATS_KEY = 'hx_stats_v2';
const ACHIEVE_KEY = 'hx_achievements';
const TASKS_KEY = 'hx_tasks';
const MISTAKES_KEY = 'hx_mistakes';
const PROGRESS_KEY = 'hx_progress';

export const storage = {
  getUser(): User | null {
    try { const d = localStorage.getItem(USER_KEY); return d ? JSON.parse(d) : null; } catch { return null; }
  },
  saveUser(u: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(u));
  },
  getStats() {
    try {
      const d = localStorage.getItem(STATS_KEY);
      return d ? JSON.parse(d) : { gamesPlayed: 0, correctAnswers: 0, totalQuestions: 0, streakDays: 0, lastPlayDate: '', achievements: [], poemsSolved: 0, quizStreak: 0, maxStreak: 0, totalTime: 0 };
    } catch { return { gamesPlayed: 0, correctAnswers: 0, totalQuestions: 0, streakDays: 0, lastPlayDate: '', achievements: [], poemsSolved: 0, quizStreak: 0, maxStreak: 0, totalTime: 0 }; }
  },
  saveStats(s: any) { localStorage.setItem(STATS_KEY, JSON.stringify(s)); },
  getAchievements(): Achievement[] {
    try { const d = localStorage.getItem(ACHIEVE_KEY); return d ? JSON.parse(d) : []; } catch { return []; }
  },
  saveAchievements(a: Achievement[]) { localStorage.setItem(ACHIEVE_KEY, JSON.stringify(a)); },
  unlockAchievement(id: string) {
    const list = this.getAchievements();
    const found = list.find(x => x.id === id);
    if (found && !found.unlocked) {
      found.unlocked = true;
      found.unlockedAt = new Date().toISOString();
      this.saveAchievements(list);
      return true;
    }
    return false;
  },
  getTasks(): DailyTask[] {
    try { const d = localStorage.getItem(TASKS_KEY); return d ? JSON.parse(d) : []; } catch { return []; }
  },
  saveTasks(t: DailyTask[]) { localStorage.setItem(TASKS_KEY, JSON.stringify(t)); },
  updateTask(taskId: string, increment: number = 1) {
    const tasks = this.getTasks();
    const task = tasks.find(t => t.id === taskId);
    if (task && !task.completed) {
      task.current = Math.min(task.current + increment, task.target);
      if (task.current >= task.target) task.completed = true;
      this.saveTasks(tasks);
    }
  },
  addMistake(q: any) {
    const key = MISTAKES_KEY;
    const list = JSON.parse(localStorage.getItem(key) || '[]');
    list.push({ ...q, date: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(list.slice(-100)));
  },
  getMistakes() { return JSON.parse(localStorage.getItem(MISTAKES_KEY) || '[]'); },
  getProgress() {
    try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}'); } catch { return {}; }
  },
  saveProgress(p: any) { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); },
  clearAll() {
    [USER_KEY, STATS_KEY, ACHIEVE_KEY, TASKS_KEY, MISTAKES_KEY, PROGRESS_KEY].forEach(k => localStorage.removeItem(k));
  }
};
