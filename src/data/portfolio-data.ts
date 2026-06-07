// ============================================================================
// PERSONAL INFORMATION
// ============================================================================

export const personalInfo = {
  firstName: "Abhishek",
  lastName: "Adiga",

  role: "Full-Stack Developer & AI Enthusiast",

  profilePhoto: "/images/profile.jpg",

  heroBio:
    "Building web apps to understand how things work. Focused on full-stack, AI, and DSA.",

  heroContext:
    "B.Tech ISE @ Sahyadri CEM · Full-Stack Dev · AI Enthusiast",

  openToWork: true,
  availabilityDate: "2027",
};

// ============================================================================
// ABOUT SECTION
// ============================================================================

export const aboutInfo = {
  intro:
    "B.Tech student in Information Science at Sahyadri CEM. I build web apps, design APIs, work with databases, and pick up frameworks along the way.",

  secondary:
    "I learn by building — whether it's APIs, databases, AI models, or real-time systems. Projects and DSA keep me growing.",

  degree: "B.Tech in Information Science & Engineering",
  university: "Sahyadri College of Engineering and Management",
  graduationYear: "2023 - 2027",
  CGPA: "8.0 / 10.0",

  location: "Udupi, Karnataka, India",
  locationDetail: "Open to internships & entry-level roles",

  yearsExperience: "3+ Years Building",
  experienceDetail: "Projects · DSA · Full-Stack",

  interests: [
    "Full-Stack Development",
    "Backend Engineering",
    "Artificial Intelligence",
    "Data Structures & Algorithms",
    "Open Source",
  ],
};

// ============================================================================
// EXPERIENCE SECTION
// ============================================================================

export const experiences = [
  {
    role: "Student Developer",
    org: "Innovex Student Developer Community",
    duration: "Aug 2025 - Present",
    bullets: [
      "Built web projects with React, Next.js, and TypeScript alongside student peers.",
      "Maintained apps via code reviews and team conventions.",
      "Shipped features through code reviews and team collaboration.",
    ],
  },

  {
    role: "Open Source Contributor",
    org: "FitMart",
    duration: "2025 - Present",
    bullets: [
      "Submitted bug fixes and features to an OSS project on GitHub.",
      "Learned a production codebase's architecture and contributor workflow.",
      "Collaborated via PRs, code reviews, issues, and Git.",
    ],
  },
];

// ============================================================================
// SKILLS SECTION
// ============================================================================

export const skillCategories = [
  {
    label: "Languages & Frameworks",
    color: "#61DAFB",
    skills: [
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        bg: "#007396",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        bg: "#F7DF1E",
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        bg: "#3178C6",
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        bg: "#61DAFB",
      },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        bg: "#000000",
      },
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        bg: "#339933",
      },
    ],
  },
  {
    label: "Tools & Technologies",
    color: "#FF9900",
    skills: [
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        bg: "#47A248",
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        bg: "#336791",
      },
      {
        name: "Prisma",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
        bg: "#2D3748",
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        bg: "#2496ED",
      },
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        bg: "#F05032",
      },
      {
        name: "Tailwind CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        bg: "#06B6D4",
      },
    ],
  },
];

// ============================================================================
// FEATURED PROJECTS
// ============================================================================

export const featuredProjects = [
  {
    title: "NeonChat",
    subtitle: "AI-Powered Multi-Model Chat Platform",
    description:
      "AI chat platform with 100+ LLMs, real-time streaming, GitHub auth, and persistent history.",
    image: "/images/neonchat.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "OpenRouter",
      "Tailwind CSS",
    ],
    github: "https://github.com/AbhishekAdiga05/NeonChat",
    live: "https://neon-pulse-chat.netlify.app/",
    number: "01",
  },

  {
    title: "CodeForge",
    subtitle: "Full-Stack DSA Practice Platform",
    description:
      "LeetCode-style platform with online code execution, progress tracking, and analytics.",
    image: "/images/codeforge.png",
    tags: [
      "Next.js",
      "React",
      "Prisma",
      "PostgreSQL",
      "Judge0 API",
      "Clerk",
    ],
    github: "https://github.com/AbhishekAdiga05/CodeForge",
    live: "https://codeforge-neon.vercel.app/",
    number: "02",
  },

  {
    title: "SafeCast",
    subtitle: "Cybersecure E-Voting System",
    description:
      "Secure e-voting with threat detection, anti-DDoS, and encrypted voting.",
    image: "/images/safecast.png",
    tags: [
      "MERN",
      "Cybersecurity",
      "IoT",
      "Docker",
      "Networking",
    ],
    github: "https://github.com/AbhishekAdiga05/SafeCast",
    live: "https://safecasts.netlify.app",
    number: "03",
  },
];

// ============================================================================
// CERTIFICATIONS
// ============================================================================

export const certifications = [
  {
    icon: "⚛️",
    name: "React & Next.js with AI Integration",
    issuer: "Udemy",
    date: "Apr 2026",
  },
  {
    icon: "🚀",
    name: "MERN Stack Development",
    issuer: "Technical Career Education",
    date: "Jun 2025",
  },
  {
    icon: "📡",
    name: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "Sep 2025",
  },
  {
    icon: "📜",
    name: "JavaScript Certification",
    issuer: "Scaler",
    date: "Aug 2025",
  },
];

// ============================================================================
// EDUCATION
// ============================================================================

export const education = {
  degree: "B.Tech in Information Science & Engineering",
  university: "Sahyadri College of Engineering and Management",
  duration: "2023 - 2027",
  gpa: "8.0 / 10.0",

  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Database Management Systems",
    "Computer Networks",
    "Software Engineering",
    "Web Technologies",
  ],
};

// ============================================================================
// CONTACT INFORMATION
// ============================================================================

export const contactInfo = {
  email: "abhishekadiga2345@gmail.com",

  github: "https://github.com/AbhishekAdiga05",

  linkedin: "https://www.linkedin.com/in/abhishek-adiga-1a37b232a/",

  linkedinHandle: "/in/abhishek-adiga-1a37b232a",

  location: "Udupi, Karnataka, India",

  description:
    "Open to collabs, internships, and tech chats. Say hi.",

  responseTime: "Usually within 24 hours.",
};

// ============================================================================
// RESUME
// ============================================================================

export const resumeLink = "";
