// src/services/aiServices.ts
import { UserProfile, CareerPath, WellbeingCheck } from '../types';
import { careerPaths } from '../data/careers';
import { courses } from '../data/courses';
import { OpenAIService } from './openaiService';

export class AIService {
  // 🔹 Add Career Recommendation Generator
  static async generateCareerRecommendations(profile: UserProfile): Promise<CareerPath[]> {
    // Fake async delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Example: Match based on interests or skills
    let recommendations = careerPaths.map((path) => {
      const matchScore = Math.min(
        100,
        Math.random() * 20 + 80 // Dummy: 80–100% match
      );

      return {
        ...path,
        matchScore,
        courses: courses.filter(c => path.requiredSkills.some(s => c.skills.includes(s)))
      };
    });

    // Sort by match score (best first)
    recommendations.sort((a, b) => b.matchScore - a.matchScore);

    return recommendations;
  }

  static async assessWellbeing(responses: any): Promise<WellbeingCheck> {
    await new Promise(resolve => setTimeout(resolve, 500));

    const riskKeywords = ['hopeless', 'worthless', 'suicide', 'harm', 'end it all', 'give up'];
    const responseText = Object.values(responses).join(' ').toLowerCase();

    let riskLevel: 'low' | 'medium' | 'high' | 'crisis' = 'low';

    if (riskKeywords.some(keyword => responseText.includes(keyword))) {
      riskLevel = 'crisis';
    } else if (responses.stress > 8 || responses.motivation < 3) {
      riskLevel = 'high';
    } else if (responses.stress > 6 || responses.motivation < 5) {
      riskLevel = 'medium';
    }

    return {
      id: Date.now().toString(),
      userId: 'current-user',
      mood: responses.mood || 5,
      stress: responses.stress || 5,
      motivation: responses.motivation || 5,
      concerns: responses.concerns || [],
      timestamp: new Date(),
      riskLevel
    };
  }

  static async generateMotivationalMessage(
    wellbeing: WellbeingCheck,
    profile: UserProfile
  ): Promise<string> {
    return await OpenAIService.generateMotivationalMessage(wellbeing, profile);
  }
}
