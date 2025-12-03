import {
  IoBook,
  IoBriefcase,
  IoCode,
  IoMedal,
  IoSchool,
  IoStar,
} from "react-icons/io5";
import { MdScore } from "react-icons/md";

export const ProfileSections = [
  {
    title: "Work Experience",
    slug: "work-experience",
    icon: <IoBriefcase />,
    command: "0",
  },
  {
    title: "Education",
    slug: "education",
    icon: <IoSchool />,
    command: "1",
  },
  {
    title: "Achievements",
    slug: "achievements",
    icon: <IoMedal />,
    command: "4",
  },
  {
    title: "Test Scores",
    slug: "scores",
    icon: <MdScore />,
    command: "5",
  },
  {
    title: "Skills",
    slug: "skills",
    icon: <IoStar />,
    command: "3",
  },
  {
    title: "Projects",
    slug: "projects",
    icon: <IoCode />,
    command: "2",
  },
];

export const WorkExperienceData = [
  {
    title: "Co-founder & CTO",
    company: "Suprvise",
    from: "11/2024",
    to: "",
    location: "Saarbrücken, Germany",
    description: [
      "Defined and executed the full technical roadmap and product strategy for an AI-driven SaaS startup.",
      "Built and scaled a high-performing engineering team of 5; established agile workflows and engineering best practices.",
      "Secured EUR125,000 in non-dilutive funding via EXIST-Gr¨understipendium to accelerate product development.",
      "Architected a modular, multi-tenant microservices platform from scratch comprising of 10+ packages and 5 microservices.",
      "Engineered plugin architecture for dynamic registration and loading capable of handling 500+ applications.",
      "Oversaw the go-to-market (GTM) strategy in collaboration with stakeholders for product launch.",
      "Led MVP demos with various pilot customers across multiple platforms."
    ],
  },
  {
    title: "Sr. Software Engineer",
    company: "rtCamp Pvt. Ltd.",
    from: "02/2024",
    to: "",
    location: "USA (Remote)",
    description: [
      "Directed and mentored a growth engineering team, overseeing development of B2B solutions for user acquisition and retention.",
      "Pioneered the architecture and development of Zazu, a RAG-powered platform for AI chatbots.",
      "Engineered OnePress, an open-source enterprise-grade WordPress framework for multi-brand organizations.",
      "Led technical strategy and architecture for a SaaS platform serving millions of users.",
      "Optimized multi-threaded infrastructure supporting 700K+ users; improved API performance by 200%.",
      "Managed hiring pipelines, conducted technical interviews, and delivered internal and corporate training to strengthen team capability.",
      "Authored developer documentation and led DevRel initiatives, improving client engagement and adoption."
    ],
  },
  {
    title: "Software Engineer",
    company: "rtCamp Pvt. Ltd.",
    from: "07/2021",
    to: "02/2024",
    location: "Pune, India (Remote)",
    description: [
      "Developed performant web apps using JavaScript, TypeScript, React.js, Next.js, NestJS, PHP, etc.",
      "Architected and developed database systems using SQL and MongoDB; developed migration scripts.",
      "Developed multiple WordPress plugins and themes using PHP, JavaScript, CSS, and React.js.",
      "Integrated REST and GraphQL APIs using Axios, ReduxToolkit, etc.",
      "Enhanced API performance by ~200% using Axios Cache and WordPress Transients.",
      "Assisted teams with product design, management, and UI/UX.",
      "Integrated CI/CD pipelines using GitHub Actions, Vercel, CirceCI, and Docker.",
      "Improved developer tooling and workflows using Shell Scripts; reduced build times by ~60%.",
      "Deployed server monitoring systems using New Relic and Grafana.",
      "Set up infrastructures on Amazon AWS, DigitalOcean, Hetzner, and Plesk.",
      "Automated processes using Shell Scripts and Python.",
      "Contributed to the company's open-source WordPress course and training program.",
      "Delivered corporate training sessions on HTML, CSS, JavaScript, and WordPress.",
      "Interviewed more than 20 candidates for multiple roles; assisted with technical evaluation.",
    ],
  },
  {
    title: "Freelance IT Consultant",
    company: "MightyIQ Inc.",
    from: "12/2021",
    to: "02/2022",
    location: "Halifax, Canada",
    description: [
      "Migrated existing infrastructure from managed hosting to the cloud; reduced monthly costs by ~50%.",
      "Set up 30+ websites using EasyEngine, Nginx, and Docker.",
      "Researched and provided consultation on various ERP Solutions for JavaScript and WordPress.",
    ],
  },
  {
    title: "Data Science Intern",
    company: "SKIMS",
    from: "04/2020",
    to: "07/2020",
    location: "Srinagar, India",
    description: [
      "Built a machine learning-based web-app which allows users (doctors) to predict required Phenytoin dosage for patients and predict the resultant serum levels with ~70% accuracy.",
    ],
  },
  {
    title: "IT Intern (Tech & Product)",
    company: "EzeSkool",
    from: "06/2020",
    to: "09/2020",
    location: "Dubai, UAE",
    description: [
      "Developed and managed 3 websites using WordPress for the Dubai-based start-up.",
      "Led the effort to research similar platforms, systematically plan, design, and develop the websites.",
    ],
  },
];

export const EducationData = [
  {
    degree: "M.Sc. Computer Science",
    insitution: "Universität des Saarlandes",
    description: [
      "Coursework: Software Engineering, Human-Computer Interaction",
    ],
    from: "2023",
    to: "2025",
  },
  {
    degree: "Bachelor of Engineering (Hons.), CSE",
    insitution: "Chandigarh University",
    from: "2018",
    to: "2022",
    grade: "8.36/10",
    description: [
      "Awarded the gold medal for outstanding academic performance and excellent conduct.",
      "Coursework: Data Structures and Algorithms, Programming Languages, Information Security, Networking, among other CSE subjects.",
      "Credits earned: 179 (268.5 ECTS).",
    ],
  },
  {
    degree: "Senior School Certificate",
    insitution: "CBSE",
    from: "2017",
    to: "2018",
    grade: "86.8%",
    description: [
      "Consistently ranked among the top 3 students.",
      "Coursework: Physics, Chemistry, Mathematics, English, Informatics Practices.",
    ],
  },
];

export const AchievementsData = [
  {
    title: "Academic Gold Medal",
    description:
      "Awarded with the Academic Gold Medal for highest academic achievement and excellent conduct during the bachelor's degree.",
    org: "Chandigarh University",
    year: "2023",
  },
  {
    title: "All-India Rank 3",
    description:
      "Secured All-India rank 3 in Global Assessment of Information Technology (GAIT); more than 6,000 students from all over the country participated in the examination.",
    org: "GAIT",
    year: "2021",
  },
  {
    title: "Security Intelligence Engineer v2",
    description:
      "Successfully qualifed for the Security Intelligence Engineer v2 certification and passed the mastery examination.",
    org: "IBM",
    year: "2021",
  },
  {
    title: "Digital India Cyber Security Champion",
    description:
      "Awarded with the Digital India award for winning the Cybersecurity Championship in which more than 1 million students participated.",
    org: "Government of India",
    year: "2016",
  },
  {
    title: "1st, Int'l Cyber Olympiad",
    description:
      "Secured 1st position (state-level) in International Cyber Olympiad organized by the EduHeal Foundation, India.",
    org: "EduHeal Foundation",
    year: "2015",
  },
  {
    title: "3rd, Int'l Science Olympiad",
    description:
      "Secured 3rd position (state-level) in International Science Olympiad organized by the EduHeal Foundation, India.",
    org: "EduHeal Foundation",
    year: "2015",
  },
];

export const TestScoresData = [
  {
    title: "IELTS",
    org: "IDP and British Council",
    score: "8.0 / CEFR C1",
    year: "2023",
    description:
      "Achieved band score of 8 in IELTS; corresponding to CEFR C1 level.",
  },
  {
    title: "GAIT All-India Open 2021",
    org: "GAIT",
    score: "568",
    year: "2021",
    description:
      "Secured All-India Rank 3 in the Global Assessment of Information Technology (GAIT) ALL INDIA OPEN 2021v1 Exam. 6,878 students, from various colleges across India, took the exam.",
  },
  {
    title: "AMCAT",
    org: "Aspiring Minds",
    score: "3454",
    year: "2020",
    description:
      "Rank 5 in the department, and 13 in all CSE and MCA branches.",
  },
];

export const SkillsData = {
  industryKnowledge: [
    "Full-Stack Development",
    "Front-End Development",
    "Systems Design",
    "R&D",
    "IT Consulting",
    "System Engineering & DevOps",
    "Server Management",
  ],
  technologies: [
    "Next.js",
    "Nest.js",
    "React.js",
    "WordPress",
    "SQL & NoSQL Databases",
    "Linux",
    "GitHub",
    "NewRelic",
    "Frappe",
    "Nest.js",
    "ReST",
    "GraphQL",
    "Prototyping Tools (Figma & Adobe XD)",
    "Adobe Illustrator",
    "Amazon AWS",
  ],
  languages: [
    "JavaScript",
    "Python",
    "PHP",
    "TypeScript",
    "HTML (😅)",
    "CSS and Sass",
    "Shell Scripting",
  ],
  interpersonal: [
    "Creative Problem Solving",
    "Leadership",
    "Conflict Resolution",
    "Verbal and Non-Verbal Communication",
  ],
};
