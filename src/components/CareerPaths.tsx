import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, DollarSign, TrendingUp, BookOpen, Target, Download, CheckCircle, ExternalLink, Star } from 'lucide-react';
import { UserProfile, CareerPath, ParentBrief } from '../types';
import { AIService } from '../services/aiServices';
import { PDFService } from '../services/pdfService';

interface CareerPathsProps {
  profile: UserProfile;
  onBack: () => void;
}

const CareerPaths: React.FC<CareerPathsProps> = ({ profile, onBack }) => {
  const [recommendations, setRecommendations] = useState<CareerPath[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPath, setSelectedPath] = useState<CareerPath | null>(null);
  const [showRoadmap, setShowRoadmap] = useState(false);

  useEffect(() => {
  const loadRecommendations = async () => {
    try {
      const paths = await AIService.generateCareerRecommendations(profile) || [];
      setRecommendations(paths);
    } catch (error) {
      console.error("Error loading recommendations:", error);
      setRecommendations([]);
    } finally {
      setLoading(false);
    }
  };

  loadRecommendations();
}, [profile]);


  const handleSelectPath = (path: CareerPath) => {
    setSelectedPath(path);
    setShowRoadmap(true);
  };

const generateParentBrief = async (path: CareerPath) => {
  try {
    const brief: ParentBrief = {
      studentName: profile.name,
      chosenPath: path,
      timeline: path.timeline,
      supportTips: [
        "Encourage daily practice and skill-building activities",
        "Help create a dedicated study space at home",
        "Support their project work and portfolio development",
        "Connect them with industry professionals when possible",
        "Celebrate small wins and progress milestones",
        "Be patient during the learning process - skills take time to develop"
      ],
      expectedOutcomes: [
        `Entry-level position in ${path.entryRoles[0]} within ${path.timeline}`,
        `Starting salary range: ₹${path.salaryRange.entry.toLocaleString()} - ₹${(path.salaryRange.entry * 1.5).toLocaleString()}`,
        `Career growth potential to ₹${path.salaryRange.experienced.toLocaleString()}+ with experience`,
        "Strong portfolio of practical projects and certifications",
        "Industry-relevant skills that are in high demand",
        "Network of peers and mentors in the chosen field"
      ],
      budgetBreakdown: {
        courses: path.courses.reduce((sum, course) => sum + course.cost, 0),
        materials: Math.min(profile.budget * 0.2, 15000),
        total:
          path.courses.reduce((sum, course) => sum + course.cost, 0) +
          Math.min(profile.budget * 0.2, 15000)
      }
    };

    await PDFService.generateParentBrief(brief);
  } catch (error) {
    console.error("Error generating parent brief:", error);
  }
};


  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Analyzing Your Profile...
          </h2>
          <p className="text-gray-600">
            Our AI is finding the perfect career paths for you
          </p>
          <p className="text-sm text-gray-500 font-hindi mt-2">
            हमारा AI आपके लिए सही करियर पथ खोज रहा है
          </p>
        </div>
      </div>
    );
  }

  if (showRoadmap && selectedPath) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-6">
            <button
              onClick={() => setShowRoadmap(false)}
              className="text-orange-600 hover:text-orange-700 font-medium mb-4"
            >
              ← Back to Career Paths
            </button>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Your Learning Roadmap
            </h1>
            <p className="text-gray-600">
              Detailed plan for becoming a {selectedPath.title}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Path Overview */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedPath.title}
                    </h2>
                    <p className="text-gray-600 font-hindi mb-4">
                      {selectedPath.titleHindi}
                    </p>
                    <p className="text-gray-700">
                      {selectedPath.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {Math.round(selectedPath.matchScore)}% Match
                    </div>
                    <div className="text-sm text-gray-500">
                      {selectedPath.type.replace('-', ' ').toUpperCase()}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Clock className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Timeline</div>
                    <div className="font-semibold">{selectedPath.timeline}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <DollarSign className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Starting Salary</div>
                    <div className="font-semibold">₹{selectedPath.salaryRange.entry.toLocaleString()}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Growth Potential</div>
                    <div className="font-semibold">₹{selectedPath.salaryRange.experienced.toLocaleString()}</div>
                  </div>
                </div>
              </div>

              {/* Learning Path */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 text-orange-500 mr-2" />
                  Recommended Courses
                </h3>
                
                <div className="space-y-4">
                  {selectedPath.courses.map((course, index) => (
                    <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {index + 1}. {course.title}
                          </h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              {course.provider}
                            </span>
                            <span>{course.duration}</span>
                            <span className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 mr-1" />
                              {course.rating}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {course.skills.map(skill => (
                              <span key={skill} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right ml-4">
                          <div className="text-lg font-bold text-green-600 mb-2">
                            {course.cost === 0 ? 'FREE' : `₹${course.cost.toLocaleString()}`}
                          </div>
                          <a
                            href={course.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 text-orange-600 hover:text-orange-700 text-sm font-medium"
                          >
                            <span>Enroll</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Target className="w-6 h-6 text-purple-500 mr-2" />
                  Practice Projects
                </h3>
                
                <div className="space-y-4">
                  {selectedPath.projects.map((project, index) => (
                    <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Project {index + 1}: {project.title}
                          </h4>
                          <p className="text-gray-600 mb-3">
                            {project.description}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {project.duration}
                            </span>
                            <span className={`px-2 py-1 rounded text-xs ${
                              project.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                              project.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {project.difficulty}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.skills.map(skill => (
                              <span key={skill} className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Deliverables:</h5>
                        <ul className="space-y-1">
                          {project.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Career Growth */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Career Growth Path
                </h3>
                <div className="space-y-3">
                  {selectedPath.growthLadder.map((role, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        index === 0 ? 'bg-green-100 text-green-700' :
                        index === 1 ? 'bg-blue-100 text-blue-700' :
                        index === 2 ? 'bg-purple-100 text-purple-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Skills */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Key Skills to Develop
                </h3>
                <div className="space-y-2">
                  {selectedPath.requiredSkills.map(skill => (
                    <div key={skill} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-700">{skill}</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Parent Brief */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Share with Parents
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Download a detailed report to help your parents understand your chosen career path.
                </p>
                <button
                  onClick={() => generateParentBrief(selectedPath)}
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-pink-600 transition-all flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Parent Brief</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Personalized Career Paths
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Based on your profile, here are the best career options for you, {profile.name}
          </p>
          <p className="text-lg text-gray-500 font-hindi">
            आपकी प्रोफ़ाइल के आधार पर, यहाँ आपके लिए सबसे अच्छे करियर विकल्प हैं
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {recommendations.map((path, index) => (
            <div key={path.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    path.type === 'skill-first' ? 'bg-green-100 text-green-800' :
                    path.type === 'degree-light' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {path.type.replace('-', ' ').toUpperCase()}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-600">
                      {Math.round(path.matchScore)}%
                    </div>
                    <div className="text-xs text-gray-500">Match</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {path.title}
                </h3>
                <p className="text-sm text-gray-600 font-hindi mb-3">
                  {path.titleHindi}
                </p>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {path.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Timeline:</span>
                    <span className="font-medium">{path.timeline}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Starting Salary:</span>
                    <span className="font-medium text-green-600">₹{path.salaryRange.entry.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Growth Potential:</span>
                    <span className="font-medium text-blue-600">₹{path.salaryRange.experienced.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Entry Roles:</h4>
                  <div className="flex flex-wrap gap-2">
                    {path.entryRoles.slice(0, 2).map(role => (
                      <span key={role} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {role}
                      </span>
                    ))}
                    {path.entryRoles.length > 2 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{path.entryRoles.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => handleSelectPath(path)}
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-pink-600 transition-all flex items-center justify-center space-x-2"
                >
                  <span>View Detailed Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onBack}
            className="text-orange-600 hover:text-orange-700 font-medium"
          >
            ← Take Assessment Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerPaths;