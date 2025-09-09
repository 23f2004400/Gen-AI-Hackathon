// OpenAI Service for real AI analysis (with fallback to demo mode)
// Works with Vite (frontend) using import.meta.env

import { UserProfile, CareerPath, WellbeingCheck } from '../types';

export class OpenAIService {
  // Get API key from Vite env variable
  private static readonly API_KEY = import.meta.env.VITE_OPENAI_API_KEY || '';

  // Toggle demo mode (true = no real API call, only mock responses)
  private static readonly DEMO_MODE = !this.API_KEY;

  static async analyzeCareerProfile(profile: UserProfile): Promise<{
    analysis: string;
    recommendations: CareerPath[];
    marketTrends: string;
    skillGaps: string[];
  }> {
    if (this.DEMO_MODE) {
      // ✅ Mock responses for hackathon demo
      await new Promise(resolve => setTimeout(resolve, 2000));
      return {
        analysis: this.generateDetailedAnalysis(profile),
        recommendations: [],
        marketTrends: this.getMarketTrends(profile),
        skillGaps: this.identifySkillGaps(profile),
      };
    }

    // 🔑 If API key is provided, call OpenAI API here
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${this.API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: "You are a career advisor for Indian students after 12th." },
            { role: "user", content: `Analyze this profile: ${JSON.stringify(profile)}` }
          ],
        }),
      });

      const data = await response.json();
      const aiText = data.choices?.[0]?.message?.content || "No AI response";

      return {
        analysis: aiText,
        recommendations: [],
        marketTrends: "AI generated insights",
        skillGaps: ["AI detected skill gaps"],
      };
    } catch (err) {
      console.error("OpenAI API error:", err);
      // Fallback to mock
      return {
        analysis: this.generateDetailedAnalysis(profile),
        recommendations: [],
        marketTrends: this.getMarketTrends(profile),
        skillGaps: this.identifySkillGaps(profile),
      };
    }
  }

  // 🔹 Mock analysis (your existing functions)
  private static generateDetailedAnalysis(profile: UserProfile): string {
    return `Demo Career Analysis for ${profile.name}`;
  }

  private static getMarketTrends(profile: UserProfile): string {
    return "Demo market trends for Indian students.";
  }

  private static identifySkillGaps(profile: UserProfile): string[] {
    return ["Demo skill gap 1", "Demo skill gap 2"];
  }

  static async generateMotivationalMessage(
    wellbeing: WellbeingCheck,
    profile: UserProfile
  ): Promise<string> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return `${profile.name}, you are on the right path! 🚀`;
  }
}
