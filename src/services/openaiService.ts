import { GoogleGenerativeAI } from "@google/generative-ai";
import { UserProfile, CareerPath, WellbeingCheck, Course } from "../types";
import { courses } from "../data/courses"; // ✅ your static catalog

export class OpenAIService {
  private static readonly API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";
  private static readonly DEMO_MODE = !import.meta.env.VITE_GEMINI_API_KEY;

  // -----------------------
  // Career Analysis with Gemini
  // -----------------------
  static async analyzeCareerProfile(profile: UserProfile): Promise<{
    analysis: string;
    recommendations: CareerPath[];
    marketTrends: string;
    skillGaps: string[];
  }> {
    if (this.DEMO_MODE) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return {
        analysis: this.generateDetailedAnalysis(profile),
        recommendations: [],
        marketTrends: this.getMarketTrends(profile),
        skillGaps: this.identifySkillGaps(profile),
      };
    }

    try {
      const genAI = new GoogleGenerativeAI(this.API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `
      Analyze this student's profile and provide insights.

      Profile:
      ${JSON.stringify(profile)}

      Return JSON with:
      {
        "analysis": "detailed career analysis",
        "recommendations": [],  // suggest roles/career paths
        "marketTrends": "short summary",
        "skillGaps": []
      }
      `;

      const result = await model.generateContent(prompt);
      const text = result.response.text();

      let parsed: any;
      try {
        parsed = JSON.parse(text);
      } catch {
        parsed = { analysis: text, recommendations: [], marketTrends: "", skillGaps: [] };
      }

      return parsed;
    } catch (err) {
      console.error("Gemini API error:", err);
      return {
        analysis: this.generateDetailedAnalysis(profile),
        recommendations: [],
        marketTrends: this.getMarketTrends(profile),
        skillGaps: this.identifySkillGaps(profile),
      };
    }
  }

  // -----------------------
  // Motivational Messages
  // -----------------------
  static async generateMotivationalMessage(
    wellbeing: WellbeingCheck,
    profile: UserProfile
  ): Promise<string> {
    if (this.DEMO_MODE) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return `${profile.name}, you are on the right path! 🚀`;
    }

    try {
      const genAI = new GoogleGenerativeAI(this.API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `
      The student "${profile.name}" has wellbeing status: ${JSON.stringify(wellbeing)}.
      Write a short, empathetic motivational message that is supportive,
      culturally sensitive to Indian students, and under 2 sentences.
      `;

      const result = await model.generateContent(prompt);
      return result.response.text() || `${profile.name}, keep pushing forward! 🌟`;
    } catch (err) {
      console.error("Gemini motivational message error:", err);
      return `${profile.name}, you are doing great! 🌈`;
    }
  }

  // -----------------------
  // Dynamic Course Recommendation
  // -----------------------
  static async recommendCoursesForPath(
    path: CareerPath,
    profile: UserProfile
  ): Promise<Course[]> {
    if (this.DEMO_MODE) {
      // fallback = filter based on skills overlap
      return courses.filter((c) =>
        c.skills.some((skill) => path.requiredSkills.includes(skill))
      );
    }

    try {
      const genAI = new GoogleGenerativeAI(this.API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `
      A student wants to follow this career path:
      ${JSON.stringify(path)}

      Student profile:
      ${JSON.stringify(profile)}

      Here is the course catalog:
      ${JSON.stringify(courses)}

      Select 3-5 MOST relevant courses that match:
      - Required skills for the path
      - Student's budget
      - Time available
      - Learning style

      Return JSON array of course IDs only, e.g.:
      ["python-basics", "excel-advanced"]
      `;

      const result = await model.generateContent(prompt);
      const text = result.response.text();

      let ids: string[];
      try {
        ids = JSON.parse(text);
      } catch {
        ids = [];
      }

      return courses.filter((c) => ids.includes(c.id));
    } catch (err) {
      console.error("Gemini course recommendation error:", err);
      return courses.filter((c) =>
        c.skills.some((skill) => path.requiredSkills.includes(skill))
      );
    }
  }

  // -----------------------
  // Mock fallback helpers
  // -----------------------
  private static generateDetailedAnalysis(profile: UserProfile): string {
    return `Demo Career Analysis for ${profile.name}`;
  }

  private static getMarketTrends(profile: UserProfile): string {
    return "Demo market trends for Indian students.";
  }

  private static identifySkillGaps(profile: UserProfile): string[] {
    return ["Demo skill gap 1", "Demo skill gap 2"];
  }
}
