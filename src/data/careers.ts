import { CareerPath } from '../types';
import { courses } from './courses';

export const careerPaths: CareerPath[] = [
  {
    id: 'software-support',
    title: 'Software Support Engineer',
    type: 'skill-first',
    description: 'Help users solve technical problems and maintain software systems',
    
    entryRoles: ['Technical Support Associate', 'Help Desk Technician', 'Customer Support Specialist'],
    growthLadder: ['Support Engineer', 'Senior Support Engineer', 'Support Team Lead', 'Technical Manager'],
    requiredSkills: ['Problem Solving', 'Communication', 'Basic Programming', 'Database Knowledge', 'Networking'],
    timeline: '6-8 months',
    salaryRange: { entry: 25000, experienced: 80000 },
    courses: [],
    projects: [],
    ncoCode: '2512',
    matchScore: 0,
    aiNotes: '',
    aiCourses: [
      courses.find(c => c.id === 'python-basics')!,
      courses.find(c => c.id === 'database-management')!,
      courses.find(c => c.id === 'business-communication')!
    ],
    localInstitutes: []
  },
  {
    id: 'data-associate',
    title: 'Data Associate',
    
    type: 'skill-first',
    description: 'Collect, clean, and analyze data to help businesses make informed decisions',
    
    entryRoles: ['Data Entry Specialist', 'Junior Data Analyst', 'Research Associate'],
    growthLadder: ['Data Analyst', 'Senior Data Analyst', 'Data Scientist', 'Analytics Manager'],
    requiredSkills: ['Excel', 'SQL', 'Python/R', 'Statistics', 'Data Visualization'],
    timeline: '4-6 months',
    salaryRange: { entry: 30000, experienced: 120000 },
    courses: [],
    projects: [],
    ncoCode: '2120',
    matchScore: 0,
    aiNotes: '',
    aiCourses: [
      courses.find(c => c.id === 'excel-advanced')!,
      courses.find(c => c.id === 'data-science-intro')!,
      courses.find(c => c.id === 'python-basics')!
    ],
    localInstitutes: []
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Associate',
    type: 'skill-first',
    description: 'Create and manage online marketing campaigns across various digital platforms',
    
    entryRoles: ['Social Media Executive', 'Content Writer', 'SEO Associate'],
    growthLadder: ['Digital Marketing Specialist', 'Marketing Manager', 'Growth Manager', 'Marketing Director'],
    requiredSkills: ['Social Media', 'Content Creation', 'SEO/SEM', 'Analytics', 'Graphic Design'],
    timeline: '3-5 months',
    salaryRange: { entry: 22000, experienced: 100000 },
    courses: [],
    projects: [],
    ncoCode: '2431',
    matchScore: 0,
    aiNotes: '',
    aiCourses: [
      courses.find(c => c.id === 'digital-marketing-fundamentals')!,
      courses.find(c => c.id === 'business-communication')!
    ],
    localInstitutes: []
  },
  {
    id: 'ux-designer',
    title: 'UX/UI Designer',

    type: 'skill-first',
    description: 'Design user-friendly interfaces and experiences for websites and mobile apps',
    
    entryRoles: ['Junior UI Designer', 'Visual Designer', 'Design Intern'],
    growthLadder: ['UX Designer', 'Senior UX Designer', 'Lead Designer', 'Design Manager'],
    requiredSkills: ['Figma/Adobe XD', 'User Research', 'Prototyping', 'Visual Design', 'HTML/CSS'],
    timeline: '6-9 months',
    salaryRange: { entry: 35000, experienced: 150000 },
    courses: [],
    projects: [],
    ncoCode: '2166',
    matchScore: 0,
    aiNotes: '',
    aiCourses: [
      courses.find(c => c.id === 'ui-ux-design')!,
      courses.find(c => c.id === 'web-development')!
    ],
    localInstitutes: []
  },
  {
    id: 'bca-developer',
    title: 'Software Developer (BCA Track)',
    
    type: 'degree-plus',
    description: 'Develop software applications while pursuing BCA degree with practical projects',
    entryRoles: ['Trainee Developer', 'Junior Programmer', 'Software Intern'],
    growthLadder: ['Software Developer', 'Senior Developer', 'Tech Lead', 'Engineering Manager'],
    requiredSkills: ['Programming Languages', 'Database Management', 'Web Development', 'Problem Solving', 'Version Control'],
    timeline: '3 years (degree) + 6 months intensive',
    salaryRange: { entry: 40000, experienced: 200000 },
    courses: [],
    projects: [],
    ncoCode: '2511',
    matchScore: 0,
    aiNotes: '',
    aiCourses: [
      courses.find(c => c.id === 'python-basics')!,
      courses.find(c => c.id === 'web-development')!,
      courses.find(c => c.id === 'database-management')!
    ],
    localInstitutes: []
  },
  {
    id: 'open-uni-business',
    title: 'Business Operations (Open University)',
    type: 'degree-light',
    description: 'Manage business operations while studying through distance learning',
    entryRoles: ['Operations Assistant', 'Business Coordinator', 'Administrative Associate'],
    growthLadder: ['Operations Executive', 'Operations Manager', 'Business Manager', 'General Manager'],
    requiredSkills: ['Communication', 'Project Management', 'Data Analysis', 'Process Optimization', 'Leadership'],
    timeline: '3 years (flexible)',
    salaryRange: { entry: 28000, experienced: 90000 },
    courses: [],
    projects: [],
    ncoCode: '1211',
    matchScore: 0,
    aiNotes: '',
    aiCourses: [
      courses.find(c => c.id === 'business-communication')!,
      courses.find(c => c.id === 'excel-advanced')!
    ],
    localInstitutes: []
  },
  {
  id: 'mbbs-doctor',
  title: 'MBBS Doctor',
  type: 'degree-plus',
  description: 'Pursue MBBS to become a licensed medical doctor, diagnosing and treating patients.',
  entryRoles: ['Intern Doctor', 'Resident', 'Junior Doctor'],
  growthLadder: ['Senior Resident', 'Specialist Doctor', 'Consultant', 'Head of Department'],
  requiredSkills: ['Anatomy', 'Physiology', 'Clinical Skills', 'Patient Care', 'Medical Ethics'],
  timeline: '5.5 years (MBBS) + 1 year internship',
  salaryRange: { entry: 50000, experienced: 200000 },
  courses: [],
  projects: [],
  ncoCode: '2210',
  matchScore: 0,
  aiNotes: '',
  aiCourses: [
    courses.find(c => c.id === 'human-anatomy-basics')!,
    courses.find(c => c.id === 'nutrition-health')!,
    courses.find(c => c.id === 'mental-health-awareness')!
  ],
  localInstitutes: []
},
{
  id: 'pharmacy-associate',
  title: 'Pharmacy / Pharmacist',
  type: 'degree-plus',
  description: 'Learn pharmaceutical sciences to work in drug development, retail pharmacy, or clinical pharmacy.',
  entryRoles: ['Pharmacy Intern', 'Junior Pharmacist', 'Quality Analyst'],
  growthLadder: ['Pharmacist', 'Clinical Pharmacist', 'Research Scientist', 'Pharma Manager'],
  requiredSkills: ['Pharmacology', 'Drug Formulation', 'Lab Techniques', 'Patient Counseling', 'Regulatory Compliance'],
  timeline: '4 years (B.Pharm) + 6 months internship',
  salaryRange: { entry: 25000, experienced: 120000 },
  courses: [],
  projects: [],
  ncoCode: '2231',
  matchScore: 0,
  aiNotes: '',
  aiCourses: [
    courses.find(c => c.id === 'pharmacology-basics')!,
    courses.find(c => c.id === 'first-aid-training')!
  ],
  localInstitutes: []
},
{
  id: 'allied-health-associate',
  title: 'Allied Health Professional',
  type: 'skill-first',
  description: 'Support healthcare delivery as a lab technician, physiotherapist, or diagnostic specialist.',
  entryRoles: ['Lab Assistant', 'Physiotherapy Intern', 'Radiology Technician'],
  growthLadder: ['Allied Health Professional', 'Senior Technician', 'Specialist', 'Department Lead'],
  requiredSkills: ['Patient Care', 'Diagnostics', 'Medical Lab Skills', 'Therapeutic Skills'],
  timeline: '1-3 years (certificate/diploma)',
  salaryRange: { entry: 20000, experienced: 90000 },
  courses: [],
  projects: [],
  ncoCode: '2260',
  matchScore: 0,
  aiNotes: '',
  aiCourses: [
    courses.find(c => c.id === 'public-health')!,
    courses.find(c => c.id === 'first-aid-training')!
  ],
  localInstitutes: []
},
{
  id: 'nutritionist',
  title: 'Nutritionist / Dietitian',
  type: 'skill-first',
  description: 'Provide dietary advice and create nutrition plans for individuals and communities.',
  entryRoles: ['Diet Assistant', 'Junior Nutritionist', 'Wellness Coach'],
  growthLadder: ['Nutritionist', 'Senior Dietitian', 'Consultant', 'Health Advisor'],
  requiredSkills: ['Nutrition Planning', 'Health Assessment', 'Counseling', 'Public Health Knowledge'],
  timeline: '1-2 years diploma / certification',
  salaryRange: { entry: 18000, experienced: 80000 },
  courses: [],
  projects: [],
  ncoCode: '2261',
  matchScore: 0,
  aiNotes: '',
  aiCourses: [
    courses.find(c => c.id === 'nutrition-health')!,
    courses.find(c => c.id === 'mental-health-awareness')!
  ],
  localInstitutes: []
}

];
