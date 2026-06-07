# Portfolio Customization Guide

## 📝 How to Customize Your Portfolio

All your personal information is centralized in one file for easy editing: `/src/data/portfolio-data.ts`

### Quick Start

1. Open `/src/data/portfolio-data.ts`
2. Replace all placeholder values with your actual information
3. Save the file and your portfolio will automatically update!

---

## 📋 Section-by-Section Guide

### 1. Personal Information (Hero Section)

```typescript
export const personalInfo = {
  firstName: "Your",           // Your first name
  lastName: "Name",             // Your last name
  role: "Software Engineering Student",  // Your current title/role
  profilePhoto: "...",          // URL to your profile photo
  heroBio: "...",               // 2-3 sentence bio
  heroContext: "...",           // Education · Status · Availability
  openToWork: true,             // Show "Open to work" badge?
  availabilityDate: "Summer 2026",  // When you're available
}
```

**Tips:**
- Keep your bio concise and impactful
- Use your own professional photo (LinkedIn photo works great)
- The `heroContext` should include: University, years of experience, and current status

---

### 2. About Section

```typescript
export const aboutInfo = {
  intro: "...",           // Main paragraph about you
  secondary: "...",       // Your current goals/focus
  degree: "B.Tech Computer Science",
  university: "[Your University Name]",
  graduationYear: "2025 - 2029",
  gpa: "8.5 / 10.0",
  location: "[Your City], India",
  locationDetail: "Open to remote globally",
  yearsExperience: "2+ Years Coding",
  experienceDetail: "Web Dev & Problem Solving",
  interests: ["Web Development", "Open Source", "DSA", "Cloud", "AI/ML"],
}
```

**Tips:**
- Keep interests to 5 items max for clean display
- Be honest about your experience level
- Tailor your intro to what makes you unique

---

### 3. Experience Section

```typescript
export const experiences = [
  {
    role: "Software Engineering Intern",
    org: "[Company Name]",
    duration: "Jun - Aug 2024",
    bullets: [
      "First achievement with metrics/impact",
      "Second achievement with metrics/impact",
    ],
  },
  // Add more experiences...
]
```

**Tips:**
- List 3-5 most relevant experiences
- Use action verbs (Built, Developed, Implemented, Led)
- Include metrics when possible (25% improvement, 500+ users, etc.)
- Can include: internships, open source, club leadership, research

---

### 4. Skills Section

```typescript
export const skillCategories = [
  {
    label: "Languages & Frameworks",
    color: "#61DAFB",
    skills: [
      { 
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/...",
        bg: "#F7DF1E"
      },
      // More skills...
    ],
  },
]
```

**Available Skills with Icons:**

**Languages:**
- JavaScript, TypeScript, Python, Java, C++, C, Go, Rust, PHP

**Frontend:**
- React, Vue, Angular, Next.js, Svelte, Tailwind CSS, Bootstrap

**Backend:**
- Node.js, Express, Django, Flask, FastAPI, Spring Boot

**Databases:**
- PostgreSQL, MySQL, MongoDB, Redis, Firebase

**Tools:**
- Git, Docker, Kubernetes, AWS, Azure, GCP, VS Code, Figma

**Tips:**
- Only include skills you're comfortable discussing in an interview
- Group related skills in categories
- Icons are fetched from devicons CDN

---

### 5. Featured Projects

```typescript
export const featuredProjects = [
  {
    title: "Project Name",
    subtitle: "Brief Project Type",
    description: "One sentence describing what it does",
    image: "https://images.unsplash.com/...",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/username/repo",
    live: "https://project-demo.com",  // Can be empty string
    number: "01",
  },
]
```

**Tips:**
- Showcase your 3 best projects
- Use descriptive, technical tags
- If no live demo, set `live: ""` to hide the demo button
- Find project images at [Unsplash](https://unsplash.com)

**Good Project Images:**
- Dashboard/analytics: Search "dashboard" or "analytics"
- AI/Chat: Search "artificial intelligence" or "chat interface"
- E-commerce: Search "online shopping" or "ecommerce"
- Social: Search "social media" or "networking"

---

### 6. Certifications

```typescript
export const certifications = [
  { 
    icon: "💻",
    name: "Full-Stack Web Development",
    issuer: "freeCodeCamp",
    date: "Mar 2024"
  },
]
```

**Popular Certification Icons:**
- 💻 Programming/Web Dev
- ☁️ Cloud (AWS, Azure, GCP)
- 🐍 Python
- ⚛️ React/Frontend
- 📊 Data Science/Analytics
- 🔐 Security/Cybersecurity
- 🧠 AI/Machine Learning
- ⚙️ DevOps/CI/CD
- 🌐 Networking
- 🎨 Design

---

### 7. Education

```typescript
export const education = {
  degree: "B.Tech in Computer Science & Engineering",
  university: "[Your University Name]",
  duration: "2021 - 2025",
  gpa: "8.5 / 10.0",
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    // Add 3-7 relevant courses
  ],
}
```

---

### 8. Contact Information

```typescript
export const contactInfo = {
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  linkedinHandle: "/in/yourusername",
  location: "[Your City], India",
  description: "I'm currently seeking...",
  responseTime: "I respond within 24-48 hours.",
}
```

---

### 9. Resume Link

```typescript
export const resumeLink = "#";  // Replace with your actual resume link
```

**How to get a resume link:**
1. Upload your resume to Google Drive
2. Right-click → Share → Anyone with the link can view
3. Copy the link
4. Replace `#` with your link

---

## 🎨 Customization Tips for Engineering Students

### If You're a Freshman/Sophomore:
- Focus on coursework and personal projects
- Highlight hackathons, coding competitions
- Include relevant coursework in detail
- Show learning journey through projects

### If You're a Junior/Senior:
- Emphasize internship experience
- Showcase complex capstone/major projects
- Include research or teaching assistant roles
- Demonstrate real-world impact

### If You Have Limited Experience:
- Quality over quantity - 2-3 solid projects > 10 small ones
- Include course projects if they're substantial
- Highlight open source contributions
- Focus on what you're learning and building

---

## 🚀 Next Steps

1. **Update your data**: Edit `/src/data/portfolio-data.ts`
2. **Add your photo**: Replace the profile photo URL with yours
3. **Upload resume**: Host it on Google Drive/Dropbox and update the link
4. **Test everything**: Click all links to ensure they work
5. **Deploy**: Share your portfolio!

---

## ❓ FAQ

**Q: How do I change the green accent color?**
A: The green (#22C55E) is defined as constant `G` in each section component. You can create a theme file, but for now it's intentionally kept simple.

**Q: Can I add more projects?**
A: Yes! Just add more objects to the `featuredProjects` array. The layout will adapt automatically.

**Q: What if I don't have certifications yet?**
A: That's okay! You can remove items or leave it as example data. Focus on building projects and skills first.

**Q: How do I find tech skill icons?**
A: Visit [Devicons](https://devicon.dev/) to find icons for almost any technology. Copy the CDN link format shown in the file.

---

## 📧 Need Help?

If you get stuck or need clarification on any section, feel free to ask!

Good luck with your portfolio! 🎉
