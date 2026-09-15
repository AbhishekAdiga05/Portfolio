export const personalInfo = {
  firstName: "Abhishek",
  lastName: "Adiga",
  role: "Full-Stack Developer & AI Tools Enthusiast",
  profilePhoto: "/images/profile.png",
  openToWork: true,
  availabilityDate: "2027",
};

export const aboutInfo = {
  intro:
    "I'm Abhishek Adiga, an Information Science engineering student and developer who enjoys building full-stack applications and experimenting with new technology. My main stack is React, Next.js, TypeScript, and Node.js. I also spend a lot of time exploring AI and LLMs, especially how they can make the way we build software a little better.",
  secondary: "",
  degree: "B.Tech in Information Science & Engineering",
  university: "Sahyadri College of Engineering and Management",
  graduationYear: "2023 - 2027",
  CGPA: "8.0 / 10.0",
  location: "Udupi, Karnataka, India",
  locationDetail: "Open to internships & entry-level roles",
  yearsExperience: "2+ Years Building",
  experienceDetail: "Projects · DSA · AI Integration",
  interests: [
    "Full-Stack Development",
    "Low level System Design",
    "AI Tools & Integration",
    "Data Structures & Algorithms",
    "Open Source",
    "Problem Solving",
  ],
};

export const experiences = [
  {
    role: "Full Stack Developer",
    org: "Innovex Student Developer Community",
    duration: "Aug 2025 - Present",
   bullets: [
  "Built and worked on real world web applications for community and client projects using React, Next.js, TypeScript, and Firebase.",
  "Contributed to the Tandoor Hotel website by developing key sections and helping with performance improvements and production deployment.",
  "Worked on the Sahyadri College Placement Portal, including the Placement Coordinator module, authentication, and branch-based access control.",
  "Collaborated with a 10+ member development team, using Git for code reviews, feature updates, and team development.",
],
  },
 {
  role: "Open Source Contributor & Google Cloud Arcade",
  org: "FitMart · Google Cloud",
  duration: "OCT 2025 - MAR 2026",
  bullets: [
    "Contributed to FitMart by improving product and cart pages, fixing UI issues, and making the experience more responsive.",
    "Fixed small bugs related to styling, form validation, and page functionality based on issues raised by the community.",
    "Worked with maintainers through pull requests and code reviews while following the project's existing code structure.",
    "Completed hands on Google Cloud Arcade labs covering cloud, AI, and data technologies.",
    "Earned multiple skill badges and milestones, along with Google Cloud Arcade swags through the program.",
  ],
},
];

export const skillCategories = [
  {
    label: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "C++"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "PostgreSQL", "MongoDB"],
  },
  {
    label: "AI & DevOps",
    skills: ["LangChain", "OpenRouter", "Docker", "AWS", "Git", "Postman"],
  },
];

export const featuredProjects = [
  {
  title: "NexPrice",
  subtitle: "Product Price Tracking & Market Intelligence Platform",
  description:
  "Tracks product prices across multiple stores and shows price history, deal alerts, and market trends.",
  image: "/images/nexprice.webp",
  category: "Full-Stack",
  tags: [
    "Next.js",
    "Supabase",
    "PostgreSQL",
    "Firecrawl",
    "Recharts",
    "Tailwind CSS",
  ],
  github: "https://github.com/AbhishekAdiga05/NexPrice",
  live: "https://getnexprice.vercel.app/",
  number: "03",
},
  {
    title: "Aither",
    subtitle: "AI-Powered Multi-Model Chat Platform",
    description:
      "A chat interface that connects to over 100 language models with real-time streaming, GitHub login, and conversation history.",
    image: "/images/Aither.png",
    category: "AI",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "OpenRouter",
      "Tailwind CSS",
    ],
    github: "https://github.com/AbhishekAdiga05/NeonChat",
    live: "https://aither-chat.vercel.app/",
    number: "01",
  },
  {
    title: "CodeForge",
    subtitle: "Full-Stack DSA Practice Platform",
    description:
      "A coding practice platform where you can solve problems, run code online, and track your progress over time.",
    image: "/images/codeforge.webp",
    category: "Full-Stack",
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
  
];

export const otherProjects = [
  {
    title: "SafeCast",
    subtitle: "Cybersecure E-Voting System",
    description:
      "An encrypted e-voting system with threat detection, DDoS protection, and real-time monitoring.",
    image: "/images/safecast.webp",
    category: "Full-Stack",
    tags: [
      "MERN",
      "Cybersecurity",
      "IoT",
      "Docker",
      "Networking",
    ],
    github: "https://github.com/AbhishekAdiga05/SafeCast",
    live: "https://safecasts.netlify.app",
    number: "04",
  },
  {
  title: "ChatVerse",
  subtitle: "Real-Time Messaging Platform",
  description:
    "Real-time messaging app with authentication, online status indicators, media sharing, and Socket.io-based architecture.",
  image: "/images/chatapp.webp",
  category: "Full-Stack",
  tags: [
    "React",
    "Node.js",
    "MongoDB",
    "Socket.io",
    "JWT",
    "Cloudinary",
    "Zustand",
    "Tailwind CSS",
  ],
  github: "https://github.com/AbhishekAdiga05/ChatVerse",
  live: "https://realtime-chat-app-vulu.onrender.com",
  number: "05",
},
{
  title: "Syncverse",
  subtitle: "AI-Powered Collaborative Code Editor",
  description:
    "A collaborative code editor with real-time sync, AI-assisted code review, whiteboarding, multi-language execution, and built-in chat.",
  image: "/images/syncverse.webp",
  category: "AI",
  tags: [
    "React",
    "Node.js",
    "MongoDB",
    "Socket.io",
    "Yjs",
    "Monaco Editor",
    "OpenRouter",
    "Judge0",
    "tldraw",
    "Clerk",
  ],
  github: "https://github.com/AbhishekAdiga05/SyncVerse.git",
  live: "https://pairverse-hpp9.onrender.com/",
  number: "06",
},
{
  title: "DocPilot",
  subtitle: "AI-Powered Documentation Agent",
  description:
    "Analyzes source code and generates README files, API docs, docstrings, and code walkthroughs across multiple languages.",
  image: "/images/docpilot.png",
  category: "AI",
  tags: [
    "Python",
    "Streamlit",
    "LangChain",
    "Groq",
    "LLaMA 3.3",
    "AST",
    "Generative AI",
  ],
  github: "https://github.com/AbhishekAdiga05/DocPilot.git",
  live: "https://docpilotai.streamlit.app/",
  number: "07",
},
{
  title: "Tandoor Kitchen",
  subtitle: "Premium Restaurant Web Experience",
  description:
    "A restaurant website with categorized menus, photo galleries, customer reviews, and a reservation system.",
  image: "/images/tandoor-kitchen.png",
  category: "Full-Stack",
  tags: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "REST API",
    "Google Maps API",
    "Vercel",
  ],
  github: "https://github.com/isdc-sahyadri/Tandoor-Website.git",
  live: "https://tandoor-kitchen.vercel.app/",
  number: "08",
},
{
  title: "Cogniva",
  subtitle: "Companion Platform for Elderly Care",
  description:
    "An accessibility-focused companion app that helps elderly users manage daily reminders, brain activities, progress, and voice interactions, while giving caregivers a dedicated dashboard to monitor activity and alerts.",
  image: "/images/cogniva.webp",
  category: "Full-Stack",
  tags: [
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "Zod",
    "Web Speech API",
    "PWA",
    "Vercel",
  ],
  github: "https://github.com/AbhishekAdiga05/cogniva",
  live: "https://cogniva-eight.vercel.app/",
  number: "09",
},
];

export const certifications = [
  {
    logo: "https://cdn.simpleicons.org/udemy/ffffff",
    name: "React & Next.js with AI Integration",
    issuer: "Udemy",
    date: "Apr 2026",
  },
  {
    logo: "https://cdn.simpleicons.org/kaggle/ffffff",
    name: "AI Agents: Intensive Vibe Coding Workshop",
    issuer: "Google × Kaggle",
    date: "2026",
  },
  {
    logo: "https://cdn.simpleicons.org/hackerrank/ffffff",
    name: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    date: "2026",
  },
  {
    logo: "https://cdn.simpleicons.org/postman/ffffff",
    name: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "Sep 2025",
  },
  {
    logo: "/images/logos/scaler.svg",
    name: "JavaScript Certification",
    issuer: "Scaler",
    date: "Aug 2025",
  },
  {
    logo: "https://cdn.simpleicons.org/codingninjas/ffffff",
    name: "Vibe2Ship Hackathon",
    issuer: "Coding Ninjas",
    date: "2026",
  },
];

export const education = [
  {
    logo: "/images/logos/SCEM.jpg",
    degree: "B.Tech in Information Science & Engineering",
    institution: "Sahyadri College of Engineering and Management",
    duration: "2023 - 2027",
    score: "8.0 / 10.0 CGPA",
  },
  {
    logo: "/images/logos/viveka.jpg",
    degree: "Pre-University Course (PCMC)",
    institution: "Viveka Pre-University College, Kota, Udupi",
    duration: "2021-2023",
    score: "95%",
  },
];

export const contactInfo = {
  email: "abhivion.dev@gmail.com",
  github: "https://github.com/AbhishekAdiga05",
  linkedin: "https://www.linkedin.com/in/abhishek-adiga-1a37b232a/",
  linkedinHandle: "/in/abhishek-adiga-1a37b232a",
  leetcode: "#",
  location: "Udupi, Karnataka, India",
  description:
    "Open to collabs, internships, and discussions about full-stack development, AI tools, or tech in general.",
  responseTime: "Usually within 24 hours.",
};

export const resumeLink = "/Resume.pdf";

// Stats shown in the Highlights band under the hero.
// Real, verifiable numbers only — update these if your stats change.
export const highlights = [
  { value: 2, suffix: "+", label: "Years Building" },
  { value: 10, suffix: "+", label: "Projects Shipped" },
  { value: 200, suffix: "+", label: "LeetCode Problems" },
  { value: 6, suffix: "+", label: "Certifications" },
];

// A blog post's body is a list of content blocks — paragraphs, headings, lists,
// and pull-quotes. Inline `**bold**` markers are supported in block text.
export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: BlogBlock[];
  draft?: boolean;
};

// Posts render on the dedicated /blog page; the home page only teases the latest one.
export const blogPosts: BlogPost[] = [
  {
    slug: "how-ai-changed-the-way-i-learn-and-build",
    title: "How AI Changed the Way I Learn and Build",
    excerpt:
      "Some of the most useful things I’ve learned as a student didn’t come from a classroom. AI has helped me explore those things, experiment more, and learn by actually building.",
    date: "Aug 10, 2026",
    readTime: "3 min read",
    tags: ["AI", "Learning", "Development"],
    content: [
      {
        type: "paragraph",
        text: "As a college student, I've realized that there is a lot more to learn than what we get taught in class.",
      },
      {
        type: "paragraph",
        text: "New frameworks, tools, technologies, projects, interviews, and even basic things like how to actually build something. Most of the time, we have to explore these things ourselves.",
      },
      {
        type: "paragraph",
        text: "That's where AI has become a big part of my daily workflow.",
      },
      {
        type: "paragraph",
        text: "I use it almost every day while coding, learning something new, debugging projects, exploring ideas, or simply when I don't know where to start.",
      },
      {
        type: "paragraph",
        text: "When I first started using AI, I mostly used it to get answers. If my code didn't work, I would paste it into ChatGPT and ask for a fix.",
      },
      {
        type: "paragraph",
        text: "It was fast, but I slowly realized that getting the answer doesn't always mean I learned something.",
      },
      {
        type: "paragraph",
        text: "So I changed how I use it.",
      },
      {
        type: "paragraph",
        text: "**1. I use AI when I don't know where to start**",
      },
      {
        type: "paragraph",
        text: "Sometimes I want to learn a new technology or build something I've never built before. Instead of spending hours feeling lost, I use AI to understand the basics and figure out what I should explore first.",
      },
      {
        type: "paragraph",
        text: "**2. I use AI to understand things college doesn't cover**",
      },
      {
        type: "paragraph",
        text: "There are many things I have learned outside my college syllabus — new tools, frameworks, APIs, deployment, AI, and different ways of building projects.",
      },
      {
        type: "paragraph",
        text: "AI makes it easier to ask questions whenever I'm curious and keep learning beyond what is taught in class.",
      },
      {
        type: "paragraph",
        text: "**3. I try things myself, then use AI when I'm stuck**",
      },
      {
        type: "paragraph",
        text: "I don't want AI to do everything for me. I usually try first, make mistakes, and then ask AI to explain what went wrong or why my approach isn't working.",
      },
      {
        type: "paragraph",
        text: "For me, **\"Why doesn't my approach work?\"** is much more useful than **\"Give me the correct code.\"**",
      },
      {
        type: "paragraph",
        text: "**4. I use AI to explore and experiment**",
      },
      {
        type: "paragraph",
        text: "One of my favorite things about AI is that I can ask almost anything. I can explore a new tool, compare technologies, brainstorm a project, understand an error, or try an idea just because I'm curious.",
      },
      {
        type: "paragraph",
        text: "Not everything I try works. Sometimes I spend time on a tool and later realize I didn't need it. But that experimentation is also part of learning.",
      },
      {
        type: "paragraph",
        text: "I still check documentation, write my own code, test things, make mistakes, and figure things out myself. AI is just another tool in that process.",
      },
      {
        type: "paragraph",
        text: "For me, that's the biggest change.",
      },
      {
        type: "paragraph",
        text: "College gives me the foundation, but learning doesn't stop in the classroom. AI makes it much easier to explore things on my own and turn curiosity into something I can actually build.",
      },
      {
        type: "paragraph",
        text: "**I don't use AI to learn less. I use it to explore more.**",
      }
    ]
  }
];

