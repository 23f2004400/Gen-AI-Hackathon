export interface UserProfile {
  id: string;
  name: string;
  age: number;
  location: string;
  interests: string[];
  budget: number;
  timeAvailable: number;
  learningStyle: 'visual' | 'auditory' | 'kinesthetic' | 'mixed';
  examHistory: {
    class10: number;
    class12: number;
    attempts: number;
  };
  psychometric: {
    grit: number;
    openness: number;
    verbalPreference: number;
    quantPreference: number;
    visualPreference: number;
  };
  constraints: string[];
  language: 'english' | 'hindi' | 'mixed';
  createdAt: Date;
}

export interface CareerPath {
  id: string;
  title: string;
  titleHindi: string;
  type: 'skill-first' | 'degree-light' | 'degree-plus';
  description: string;
  descriptionHindi: string;
  entryRoles: string[];
  growthLadder: string[];
  requiredSkills: string[];
  timeline: string;
  salaryRange: {
    entry: number;
    experienced: number;
  };
  courses: Course[];
  projects: Project[];
  ncoCode: string;
  matchScore: number;
  aiAnalysis?: string;
}

export interface Course {
  id: string;
  title: string;
  provider: 'SWAYAM' | 'NPTEL' | 'Other';
  duration: string;
  cost: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  skills: string[];
  url: string;
  rating: number;
  language: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  skills: string[];
  duration: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  deliverables: string[];
}

export interface WellbeingCheck {
  id: string;
  userId: string;
  mood: number;
  stress: number;
  motivation: number;
  concerns: string[];
  timestamp: Date;
  riskLevel: 'low' | 'medium' | 'high' | 'crisis';
}

export interface ParentBrief {
  studentName: string;
  chosenPath: CareerPath;
  timeline: string;
  supportTips: string[];
  expectedOutcomes: string[];
  budgetBreakdown: {
    courses: number;
    materials: number;
    total: number;
  };
}