export interface User{phone:string;name:string;ageGroup:string;level:number;exp:number;coins:number;createdAt:string;lastLogin:string}
export interface Character{id:string;name:string;dynasty:string;title:string;description:string;quote:string;x:number;y:number;z:number;color:number}
export interface Poem{id:string;title:string;author:string;dynasty:string;lines:string[];hint:string}
export interface QuizQuestion{id:string;question:string;options:string[];correct:number;dynasty:string;explanation:string}
export interface HistoricalEvent{id:string;title:string;dynasty:string;year:string;description:string;importance:number}
export interface SceneConfig{backgroundColor:number;fogColor:number;fogDensity:number;groundColor:number;ambientLight:number}