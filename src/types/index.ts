export interface UserProfile {
  id: string;
  name: string;
  age: number;
  location: string;
  interests: string[];
  budget: number;              // for filtering courses
  timeAvailable: number;       // in hours per week
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
  courses: Course[];             // curated courses (manual or static)
  projects: Project[];
  ncoCode: string;
  matchScore: number;

  // 🔹 AI-enhanced fields
  aiAnalysis?: string;
  aiNotes?: string;
  aiCourses?: Course[];          // Gemini-suggested courses (dynamic)
  localInstitutes?: string[];    // nearby institutions (can integrate later)
  aiMarketTrends?: string;       // optional: trends from Gemini
  aiSkillGaps?: string[];        // optional: identified gaps
}

export interface Course {
  id: string;
  title: string;
  provider: 'SWAYAM' | 'NPTEL' | 'Other';
  duration: string;              // e.g. "6 weeks", "40 hours"
  cost: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  skills: string[];
  url: string;
  rating: number;
  language: string[];
  relevanceScore?: number;       // 🔹 for ranking by Gemini
  recommendedFor?: string[];     // 🔹 AI can map to specific roles/skills
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
