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

export interface AwardItem {
  title: string;
  org: string;
  year: string;
}

export const awards: AwardItem[] = [
  {
    title: "Consistent President's Lister (7/8)",
    org: 'Polytechnic University of the Philippines',
    year: '2022 – 2025'
  },
  {
    title: 'Outstanding Class Representative',
    org: "Psychology Students' Society A.Y. 2024–2025",
    year: 'Oct 2024'
  },
  {
    title: 'With Honors',
    org: 'Camp Vicente Lim Integrated School',
    year: '2016 – 2022'
  },
  {
    title: 'Qualifier, Calamba Division Schools Press Conference',
    org: 'Campus Journalism',
    year: '2015'
  }
];

export interface OrgItem {
  role: string;
  org: string;
  period: string;
}

export const organizations: OrgItem[] = [
  {
    role: 'Secretary-General',
    org: 'Student Council, PUP San Juan',
    period: '2025 – Present'
  },
  {
    role: 'Member',
    org: "Psychology Students' Society",
    period: '2022 – Present'
  },
  {
    role: 'Assistant Public Information Officer',
    org: "Psychology Students' Society",
    period: '2023 – 2024'
  },
  {
    role: 'Facilitator / Teacher',
    org: 'Destiny Leadership Training',
    period: '2022 – 2023'
  },
  {
    role: 'Treasurer',
    org: 'Supreme Student Government (SSG)',
    period: '2021 – 2022'
  },
  {
    role: 'Secretary',
    org: 'Kabataan Kontra Droga at Terorismo (KKDAT-Mayapa)',
    period: '2022'
  },
  {
    role: 'Year Level Representative',
    org: 'Supreme Student Government (SSG)',
    period: '2019 – 2020'
  },
  {
    role: 'Filipino Editorial Writer',
    org: 'Campus Journalism Club',
    period: '2015 – 2016'
  }
];