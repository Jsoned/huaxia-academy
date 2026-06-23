export interface User {
  phone: string; name: string; ageGroup: string; level: number; exp: number;
  coins: number; createdAt: string; lastLogin: string; avatar?: string;
  totalGames: number; totalCorrect: number; streakDays: number; achievements: string[];
}
export interface Character {
  id: string; name: string; dynasty: string; title: string;
  description: string; quote: string; x: number; y: number; z: number;
  color: number; avatar: string; birthYear: string; deathYear: string;
  famousWorks: string[]; funFact: string;
}
export interface Poem {
  id: string; title: string; author: string; dynasty: string;
  lines: string[]; hint: string; difficulty: number; tags: string[];
  fullText: string; appreciation: string;
}
export interface QuizQuestion {
  id: string; question: string; options: string[]; correct: number;
  dynasty: string; explanation: string; category: string; difficulty: number;
}
export interface HistoricalEvent {
  id: string; title: string; dynasty: string; year: string;
  description: string; importance: number; image?: string;
}
export interface Idiom {
  id: string; word: string; pinyin: string; meaning: string;
  origin: string; example: string; difficulty: number;
}
export interface Achievement {
  id: string; name: string; description: string; icon: string;
  condition: string; unlocked: boolean; unlockedAt?: string;
}
export interface DailyTask {
  id: string; title: string; description: string; target: number;
  current: number; reward: number; completed: boolean;
}
export interface LeaderboardEntry {
  rank: number; name: string; level: number; score: number; avatar: string;
}
