import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 'python-basics',
    title: 'Programming in Python',
    provider: 'SWAYAM',
    duration: '12 weeks',
    cost: 0,
    difficulty: 'Beginner',
    skills: ['Python', 'Programming Logic', 'Data Structures'],
    url: 'https://swayam.gov.in/nd1_noc20_cs73',
    rating: 4.5,
    language: ['English', 'Hindi']
  },
  {
    id: 'data-science-intro',
    title: 'Introduction to Data Science',
    provider: 'NPTEL',
    duration: '8 weeks',
    cost: 1000,
    difficulty: 'Beginner',
    skills: ['Data Analysis', 'Statistics', 'Python', 'Visualization'],
    url: 'https://nptel.ac.in/courses/106/106/106106179/',
    rating: 4.3,
    language: ['English']
  },
  {
    id: 'digital-marketing-fundamentals',
    title: 'Digital Marketing Fundamentals',
    provider: 'SWAYAM',
    duration: '6 weeks',
    cost: 0,
    difficulty: 'Beginner',
    skills: ['SEO', 'Social Media Marketing', 'Content Marketing', 'Analytics'],
    url: 'https://swayam.gov.in/nd1_noc19_mg20',
    rating: 4.2,
    language: ['English', 'Hindi']
  },
  {
    id: 'web-development',
    title: 'Web Development Basics',
    provider: 'NPTEL',
    duration: '10 weeks',
    cost: 1000,
    difficulty: 'Beginner',
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    url: 'https://nptel.ac.in/courses/106/106/106106203/',
    rating: 4.4,
    language: ['English']
  },
  {
    id: 'database-management',
    title: 'Database Management Systems',
    provider: 'SWAYAM',
    duration: '12 weeks',
    cost: 0,
    difficulty: 'Intermediate',
    skills: ['SQL', 'Database Design', 'Data Modeling', 'MySQL'],
    url: 'https://swayam.gov.in/nd1_noc20_cs06',
    rating: 4.1,
    language: ['English']
  },
  {
    id: 'ui-ux-design',
    title: 'User Interface Design',
    provider: 'SWAYAM',
    duration: '8 weeks',
    cost: 0,
    difficulty: 'Beginner',
    skills: ['UI Design', 'UX Principles', 'Figma', 'Prototyping'],
    url: 'https://swayam.gov.in/nd1_noc19_de12',
    rating: 4.0,
    language: ['English', 'Hindi']
  },
  {
    id: 'business-communication',
    title: 'Business Communication',
    provider: 'NPTEL',
    duration: '6 weeks',
    cost: 0,
    difficulty: 'Beginner',
    skills: ['Communication', 'Presentation', 'Writing', 'Professional Skills'],
    url: 'https://nptel.ac.in/courses/109/109/109109112/',
    rating: 4.3,
    language: ['English']
  },
  {
    id: 'excel-advanced',
    title: 'Advanced Excel for Data Analysis',
    provider: 'SWAYAM',
    duration: '4 weeks',
    cost: 0,
    difficulty: 'Intermediate',
    skills: ['Excel', 'Data Analysis', 'Pivot Tables', 'Macros'],
    url: 'https://swayam.gov.in/nd1_noc20_mg17',
    rating: 4.2,
    language: ['English', 'Hindi']
  }
];