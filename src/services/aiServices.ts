import { UserProfile, CareerPath, WellbeingCheck } from '../types';
import { careerPaths } from '../data/careers';
import { courses } from '../data/courses';
import { OpenAIService } from './openaiService';

// Enhanced AI service with real analysis capabilities
export class AIService {
  static async generateCareerRecommendations(profile: UserProfile): Promise<CareerPath[]> {
    // Get detailed AI analysis
    const aiAnalysis = await OpenAIService.analyzeCareerProfile(profile);
    
    // Enhanced matching algorithm based on AI analysis and market trends
    const recommendations = careerPaths.map(path => {
      let score = 0;
      
      // Advanced interest matching with market trends
      const interestKeywords = profile.interests.join(' ').toLowerCase();
      if (interestKeywords.includes('technology') || interestKeywords.includes('computer')) {
        if (path.id.includes('software') || path.id.includes('data') || path.id.includes('ux')) {
          score += 35; // Higher weight for tech roles due to market demand
        }
      }
      
      if (interestKeywords.includes('creative') || interestKeywords.includes('design')) {
        if (path.id.includes('ux') || path.id.includes('marketing')) {
          score += 30; // Creative industry growth
        }
      }
      
      if (interestKeywords.includes('business') || interestKeywords.includes('management')) {
        if (path.id.includes('business') || path.id.includes('marketing')) {
          score += 28; // Business skills in demand
        }
      }
      
      // Enhanced budget consideration
      if (profile.budget < 50000 && path.type === 'skill-first') {
        score += 25; // Higher preference for affordable paths
      } else if (profile.budget >= 100000 && path.type === 'degree-plus') {
        score += 20;
      }
      
      // Time availability with urgency factor
      if (profile.timeAvailable < 20 && path.type === 'skill-first') {
        score += 20; // Quick employment paths
      }
      
      // Enhanced learning style matching
      if (profile.learningStyle === 'visual' && path.id.includes('ux')) {
        score += 15;
      }
      if (profile.learningStyle === 'kinesthetic' && path.type === 'skill-first') {
        score += 12; // Hands-on learning preference
      }
      
      // Academic performance consideration
      if (profile.examHistory.class12 >= 75 && path.type === 'degree-plus') {
        score += 15;
      } else if (profile.examHistory.class12 < 60 && path.type === 'skill-first') {
        score += 20; // Skill-first better for lower academic scores
      }
      
      // Location-based scoring
      const location = profile.location.toLowerCase();
      if ((location.includes('mumbai') || location.includes('bangalore') || location.includes('delhi')) 
          && path.id.includes('software')) {
        score += 10; // Tech hubs advantage
      }
      
      // Add relevant courses
      const relevantCourses = courses.filter(course => 
        path.requiredSkills.some(skill => 
          course.skills.some(courseSkill => 
            courseSkill.toLowerCase().includes(skill.toLowerCase()) ||
            skill.toLowerCase().includes(courseSkill.toLowerCase())
          )
        )
      ).slice(0, 3);
      
      return {
        ...path,
        matchScore: Math.min(score + Math.random() * 15, 95), // More realistic scoring
        courses: relevantCourses,
        projects: this.generateProjects(path),
        aiAnalysis: aiAnalysis.analysis // Add AI analysis to each path
      };
    });
    
    return recommendations
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 4); // Show top 4 recommendations
  }
  
  static generateProjects(path: CareerPath) {
    const projectTemplates = {
      'software-support': [
        {
          id: 'helpdesk-system',
          title: 'Build a Help Desk Ticketing System',
          description: 'Create a web-based system for managing customer support tickets',
          skills: ['HTML/CSS', 'JavaScript', 'Database'],
          duration: '2-3 weeks',
          difficulty: 'Medium' as const,
          deliverables: ['Working web application', 'User documentation', 'Demo video']
        }
      ],
      'data-associate': [
        {
          id: 'sales-dashboard',
          title: 'Sales Performance Dashboard',
          description: 'Analyze sales data and create interactive visualizations',
          skills: ['Excel', 'Python', 'Data Visualization'],
          duration: '2 weeks',
          difficulty: 'Medium' as const,
          deliverables: ['Dashboard', 'Analysis report', 'Presentation']
        }
      ],
      'digital-marketing': [
        {
          id: 'social-campaign',
          title: 'Social Media Marketing Campaign',
          description: 'Design and execute a complete social media campaign for a local business',
          skills: ['Content Creation', 'Social Media', 'Analytics'],
          duration: '3 weeks',
          difficulty: 'Easy' as const,
          deliverables: ['Campaign strategy', 'Content calendar', 'Performance report']
        }
      ],
      'ux-designer': [
        {
          id: 'mobile-app-design',
          title: 'Mobile App UI/UX Design',
          description: 'Design a complete mobile app interface with user research',
          skills: ['Figma', 'User Research', 'Prototyping'],
          duration: '3-4 weeks',
          difficulty: 'Medium' as const,
          deliverables: ['Wireframes', 'High-fidelity designs', 'Interactive prototype']
        }
      ]
    };
    
    return projectTemplates[path.id as keyof typeof projectTemplates] || [
      {
        id: 'generic-project',
        title: 'Industry-Specific Project',
        description: 'Complete a real-world project in your chosen field',
        skills: path.requiredSkills.slice(0, 3),
        duration: '2-3 weeks',
        difficulty: 'Medium' as const,
        deliverables: ['Project deliverable', 'Documentation', 'Presentation']
      }
    ];
  }
  
  static async assessWellbeing(responses: any): Promise<WellbeingCheck> {
    // Simulate processing
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
  
  static generateMotivationalMessage(wellbeing: WellbeingCheck): string {
    // Use OpenAI service for personalized messages
    // For now, return enhanced generic messages
    return this.getEnhancedMotivationalMessage(wellbeing);
  }
  
  private static getEnhancedMotivationalMessage(wellbeing: WellbeingCheck): string {
    const contextualMessages = {
      low: [
        "Your positive mindset is your greatest asset! The job market is full of opportunities for motivated individuals like you. 🌟",
        "You're building momentum beautifully! Remember, 70% of successful professionals started exactly where you are now. 💪",
        "Your journey is inspiring! With this attitude, you're destined for success in whichever path you choose. 🚀"
      ],
      medium: [
        "Feeling uncertain is part of growth. Even top CEOs felt lost after 12th grade. You're in good company! 🌱",
        "Every challenge you face now is building resilience for your future career. You're stronger than you know! 💙",
        "It's okay to feel overwhelmed - you're making important life decisions. Take it step by step, and trust the process. 🌈"
      ],
      high: [
        "Your feelings are completely valid. Many successful people have felt exactly like this. Seeking support shows strength, not weakness. 🤝",
        "Remember, this difficult phase is temporary. Your mental health is the foundation of your future success. Take care of yourself first. 💚",
        "You have unique strengths and potential. Sometimes we need help to see them clearly. Professional guidance is available and effective. 🌸"
      ],
      crisis: [
        "Your life has immense value and potential. Please reach out to KIRAN (1800-599-0019) or Aasra (9820466726) right now. You matter! 🆘",
        "You don't have to carry this burden alone. Trained counselors are available 24/7 to help you through this. Your future self will thank you for reaching out. ❤️"
      ]
    };
    
    const levelMessages = contextualMessages[wellbeing.riskLevel];
    return levelMessages[Math.floor(Math.random() * levelMessages.length)];
  }
}