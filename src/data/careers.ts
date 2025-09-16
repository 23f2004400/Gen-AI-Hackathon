import { CareerPath } from '../types';
import { courses } from './courses';

export const careerPaths: CareerPath[] = [
  {
    id: 'software-support',
    title: 'Software Support Engineer',
    titleHindi: 'सॉफ्टवेयर सपोर्ट इंजीनियर',
    type: 'skill-first',
    description: 'Help users solve technical problems and maintain software systems',
    descriptionHindi: 'उपयोगकर्ताओं की तकनीकी समस्याओं को हल करें और सॉफ्टवेयर सिस्टम बनाए रखें',
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
    titleHindi: 'डेटा एसोसिएट',
    type: 'skill-first',
    description: 'Collect, clean, and analyze data to help businesses make informed decisions',
    descriptionHindi: 'व्यवसायों को सूचित निर्णय लेने में मदद करने के लिए डेटा एकत्र, साफ और विश्लेषण करें',
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
    titleHindi: 'डिजिटल मार्केटिंग एसोसिएट',
    type: 'skill-first',
    description: 'Create and manage online marketing campaigns across various digital platforms',
    descriptionHindi: 'विभिन्न डिजिटल प्लेटफॉर्म पर ऑनलाइन मार्केटिंग अभियान बनाएं और प्रबंधित करें',
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
    titleHindi: 'यूएक्स/यूआई डिजाइनर',
    type: 'skill-first',
    description: 'Design user-friendly interfaces and experiences for websites and mobile apps',
    descriptionHindi: 'वेबसाइटों और मोबाइल ऐप्स के लिए उपयोगकर्ता-अनुकूल इंटरफेस और अनुभव डिज़ाइन करें',
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
    titleHindi: 'सॉफ्टवेयर डेवलपर (बीसीए ट्रैक)',
    type: 'degree-plus',
    description: 'Develop software applications while pursuing BCA degree with practical projects',
    descriptionHindi: 'व्यावहारिक परियोजनाओं के साथ बीसीए डिग्री करते हुए सॉफ्टवेयर एप्लिकेशन विकसित करें',
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
    titleHindi: 'बिजनेस ऑपरेशन्स (ओपन यूनिवर्सिटी)',
    type: 'degree-light',
    description: 'Manage business operations while studying through distance learning',
    descriptionHindi: 'दूरस्थ शिक्षा के माध्यम से अध्ययन करते हुए व्यावसायिक संचालन का प्रबंधन करें',
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
  }
];
