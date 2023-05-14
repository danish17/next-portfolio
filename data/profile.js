import {
  IoBook,
  IoBriefcase,
  IoCode,
  IoMedal,
  IoSchool,
  IoStar,
} from "react-icons/io5";
import { MdScore } from "react-icons/md";

export const WorkExperienceData = [
  {
    title: "Software Engineer",
    company: "rtCamp Pvt. Ltd.",
    from: "07/2021",
    to: "",
    location: "Pune, India",
    description: [
      "Led SaaS product developer teams involving 10+ developers.",
      "Created performant web apps using React.js, Next.js, JavaScript, TypeScript, Nest.js, Socket.io, etc.",
      "Designed and developed database systems using MariaDB (SQL) and MongoDB (No-SQL).",
      "Assisted teams with product design, management, architecture, and UI/UX.",
      "Developed multiple WordPress plugins and themes using PHP, JavaScript, CSS, and React.js.",
      "Integrated ReST and GraphQL APIs using Axios, ReduxToolkit, etc.",
      "Increased API performance by 2x using Axios Cache and WordPress Transients.",
      "Integrated CI/CD pipelines using GitHub Actions, Vercel, CirceCI, and Docker.",
      "Improved developer tooling and workflows using Shell Scripts; reduced build times by ~60%.",
      "Set up software infrastructures using Amazon AWS, DigitalOcean, Hetzner, and Plesk.",
      "Delivered 5+ training sessions to trainees and clients on HTML, CSS, JavaScript, and WordPress.",
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
    title: "Projects",
    slug: "projects",
    icon: <IoCode />,
    command: "2",
  },
  {
    title: "Skills",
    slug: "skills",
    icon: <IoStar />,
    command: "3",
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
