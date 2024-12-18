import {
  Bash,
  Docker,
  JavaScript,
  NestJs,
  NextJs,
  Python,
  Slack,
  Tensorflow,
  TypeScript,
  SocketIo,
  Redis,
  Redux,
  MySQL,
} from "../components/Icons";

const projectsData = [
  {
    title: "CSV Deduper",
    desc: "Next.js app to expand and deduplicate CSV rows while aggregating metrics.",
    github: "https://github.com/danish17/csv-deduper",
    image: "https://dedupe.iamdani.sh/og-image.jpeg",
    deployed: "https://dedupe.iamdani.sh",
    tech: [
      <NextJs key="nextjs" height={16} />,
      <TypeScript key="ts" height={16} />,
    ],
  },
  {
    title: "Secrets",
    desc: "API & Webapp to create and share n-time viewable secrets.",
    github: "https://github.com/danish17/secrets",
    image: "/projects/secrets.webp",
    deployed: "https://secrets.iamdani.sh",
    tech: [
      <NextJs key="nextjs" height={16} />,
      <NestJs key="nestjs" height={16} />,
      <TypeScript key="ts" height={16} />,
      <Redux key="redux" height={16} />,
      <MySQL key="my-sql" height={16} />,
    ],
  },
  {
    title: "EasyDash",
    desc: "Server, site, and project management tool used internally by rtCamp.",
    github: "",
    image: "/projects/easydash.webp",
    deployed: "",
    tech: [
      <NextJs key="nextjs" height={16} />,
      <NestJs key="nestjs" height={16} />,
      <TypeScript key="ts" height={16} />,
      <Redux key="redux" height={16} />,
      <SocketIo key="socket" height={16} />,
      <Docker key="docker" height={16} />,
      <Redis key="redis" height={16} />,
    ],
  },
  {
    title: "Visual QA Automation",
    desc: "Create, manage, and track visual QA tests on your apps using Playwright. PoC project for rtCamp.",
    github: "",
    image: "/projects/obo-qa.webp",
    deployed: "",
    tech: [
      <NextJs key="nextjs" height={16} />,
      <NestJs key="nestjs" height={16} />,
      <TypeScript key="ts" height={16} />,
      <JavaScript key="js" height={16} />,
      <Redux key="redux" height={16} />,
      <Docker key="docker" height={16} />,
    ],
  },
  {
    title: "Alfred Slack Bot",
    desc: "Alfred helps you to automatically send birthday and anniversary wishes on Slack using Google Apps Script, Google Triggers, Google Sheets, and Slack API.",
    github: "https://github.com/danish17/alfred-slack-bot",
    image: "/projects/alfred.webp",
    deployed: "",
    tech: [
      <JavaScript key="js" height={16} />,
      <Slack key="slack" height={16} />,
    ],
  },
  {
    title: "Auto Server Backup",
    desc: "Collection of shell scripts to automatically backup Linux servers.",
    github: "https://github.com/danish17/alfred-slack-bot",
    image: "/projects/server-backup.webp",
    deployed: "",
    tech: [<Bash key="bash" height={16} />],
  },
  {
    title: "QUBO: Classical vs Quantum Techniques",
    desc: "Implementation of Quadratic Unconstrained Binary Optimization on Quantum computers and simulators.",
    github: "",
    image: "/projects/qubo.webp",
    deployed: "",
    tech: [<Python key="python" height={16} />],
  },
  {
    title: "BibTeX Chrome",
    desc: "Chrome extension to convert BibTeX citations to other formats.",
    github: "https://github.com/danish17/bibtex-chrome",
    image: "/projects/bibtex.webp",
    deployed:
      "https://chrome.google.com/webstore/detail/bibtex-chrome/mpkkjoodomgaedblckommkefnpinkgpa?hl=en",
    tech: [<JavaScript key="js" height={16} />],
  },
  {
    title: "Lempify",
    desc: "CLI utility to set up LEMP stack on Linux machines and instances.",
    github: "https://github.com/danish17/lempify",
    image: "/projects/lempify.webp",
    deployed: "",
    tech: [<Bash key="bash" height={16} />],
  },
  {
    title: "Litmus AI",
    desc: "Stylometric ML-based web-app to predict truthfulness of a news article.",
    github: "https://github.com/danish17/litmus-ai-web",
    image: "/projects/litmus.webp",
    deployed: "",
    tech: [
      <Python key="python" height={16} />,
      <JavaScript key="js" height={16} />,
      <Tensorflow key="tf" height={16} />,
    ],
  },
  {
    title: "Drug Administration ML",
    desc: "ML-powered web-app to predict required Phenytoin dosage and resultant serum levels.",
    github: "",
    image: "/projects/drug-admin.webp",
    deployed:
      "https://www.researchgate.net/profile/Danish-Shakeel-2/publication/341575853_Personalized_drug_concentration_predictions_with_machine_learning_an_exploratory_study/links/5ec7e66a458515626cc15bf3/Personalized-drug-concentration-predictions-with-machine-learning-an-exploratory-study.pdf",
    tech: [
      <Python key="python" height={16} />,
      <JavaScript key="js" height={16} />,
    ],
  },
  {
    title: "My Kashmir",
    desc: "Android app with ~50K downloads (4.8/5 stars) to bring all the information about Kashmir.",
    github: "",
    image: "/projects/mykashmir.webp",
    deployed: "https://iamdani.sh/mykashmir",
    tech: [],
  },
];

export default projectsData;
