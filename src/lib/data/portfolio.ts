export const profile = {
  name: {
    first: 'Riza Mae',
    middle: 'Mae',
    last: 'Tare'
  },
  title: 'BS Psychology Student',
  tagline: 'Leader · Advocate · Communicator',
  summary:
    'A driven psychology student with a strong track record in student leadership, community advocacy, and human development. Passionate about people, purpose, and making meaningful impact.',
  about:
    "I'm a BS Psychology student at the Polytechnic University of the Philippines – San Juan, and a consistent President's Lister. Beyond academics, I've served in student governance, led youth programs, and worked in HR recruitment — always with a heart for people and a drive to grow.",
  contact: {
    phone: '+639 66 3291912',
    email: 'rizamae.tare@gmail.com',
    location: 'Taguig City, Metro Manila'
  },
  social: {
    linkedin: '#',
    facebook: '#'
  }
};

export const skills = [
  'Leadership & Student Governance',
  'Public Speaking & Facilitation',
  'Human Resource Management',
  'Community Outreach & Advocacy',
  'Event Planning & Coordination',
  'Editorial Writing (Filipino)',
  'Peer Helping & Counseling Support',
  'Program & Youth Development'
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: (string | { text: string; sub: string[] })[];
}

export const experience: ExperienceItem[] = [
  {
    role: 'HR Recruitment Intern',
    company: 'Guild Solutions Inc.',
    period: 'Oct 2025 – Mar 2026',
    bullets: [
      'Completed 390 hours of internship in human resource recruitment',
      'Assisted in sourcing, screening, and coordinating candidates through the hiring pipeline',
      'Gained hands-on exposure to HR systems, documentation, and professional workplace dynamics'
    ]
  },
  {
    role: 'Secretary-General',
    company: 'Student Council, PUP San Juan – A.Y. 2025–2026',
    period: '2025 – Present',
    bullets: [
      'Manages official communications, records, and documentation for the student council',
      'Coordinates with officers and student organizations to facilitate governance activities',
      'Supports planning and execution of student-led initiatives and campus programs'
    ]
  },
  {
    role: 'Youth Development Worker',
    company: 'Tara, Basa Tutoring Program 2025',
    period: 'May 2025 – Jun 2025',
    bullets: [
      'Facilitated literacy and learning sessions for youth beneficiaries',
      'Collaborated with program leads to design age-appropriate learning activities',
      'Contributed to community development through educational outreach'
    ]
  },
  {
    role: 'Work Immersion',
    company: 'National Jail Management and Penology Training Institute (NJMPTI)',
    period: 'May 2022 – May 2022',
    bullets: [
      'Observed and participated in institutional operations and administrative processes',
      'Gained exposure to correctional psychology and rehabilitation frameworks'
    ]
  }
];

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  years: string;
}

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Psychology',
    school: 'Polytechnic University of the Philippines',
    location: 'San Juan Campus, San Juan City, Metro Manila',
    years: '2022 – Present'
  },
  {
    degree: 'Senior High School',
    school: 'Camp Vicente Lim Integrated School',
    location: 'Calamba City, Laguna',
    years: '2016 – 2022'
  },
  {
    degree: 'Elementary',
    school: 'Mayapa Elementary School',
    location: 'Calamba City, Laguna',
    years: '2010 – 2016'
  }
];