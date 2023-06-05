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
} from "../components/Icons";

const projectsData = [
  {
    title: "EasyDash",
    desc: "Server, site, and project management tool used internally by rtCamp.",
    github: "",
    image: "/projects/easydash.png",
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
    image:
      "https://img.freepik.com/free-vector/hand-drawn-flat-design-metaverse-background_23-2149272282.jpg?w=1060&t=st=1685956306~exp=1685956906~hmac=38a7426b4855fa2d3bcae759cec71c3cb023b128a0e44fe57adc19c337c75839",
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
    image:
      "https://img.freepik.com/free-vector/big-data-processing-concept-server-room-blockchain-technology-token-access_39422-812.jpg?w=1380&t=st=1685899888~exp=1685900488~hmac=b8638717eb819faa23d9c73658b0bd382fdb0384baaed9b7fae2f861dda71e4c",
    deployed: "",
    tech: [<Bash key="bash" height={16} />],
  },
  {
    title: "QUBO: Classical vs Quantum Techniques",
    desc: "Implementation of Quadratic Unconstrained Binary Optimization on Quantum computers and simulators.",
    github: "",
    image:
      "https://newsroom.ibm.com/file.php/183868/IBM_SystemOne_Andrew_Lindemann_2-1500.jpg?thumbnail=modal",
    deployed: "",
    tech: [<Python key="python" height={16} />],
  },
  {
    title: "BibTeX Chrome",
    desc: "Chrome extension to convert BibTeX citations to other formats.",
    github: "https://github.com/danish17/bibtex-chrome",
    image:
      "https://img.freepik.com/free-vector/scientists-working-concept_23-2148488315.jpg?w=1060&t=st=1685900376~exp=1685900976~hmac=01ff08b4be9e394b87d47c10b96b8216f276da3db7cacbea54f86c3aed83d5d9",
    deployed:
      "https://chrome.google.com/webstore/detail/bibtex-chrome/mpkkjoodomgaedblckommkefnpinkgpa?hl=en",
    tech: [<JavaScript key="js" height={16} />],
  },
  {
    title: "Lempify",
    desc: "CLI utility to set up LEMP stack on Linux machines and instances.",
    github: "https://github.com/danish17/lempify",
    image:
      "https://img.freepik.com/free-vector/server-concept-illustration_114360-287.jpg?w=1060&t=st=1685903368~exp=1685903968~hmac=71726cd567d90edb7006d955390983e47c35f55b406b41f414347c4c2f62b8d1",
    deployed: "",
    tech: [<Bash key="bash" height={16} />],
  },
  {
    title: "Litmus AI",
    desc: "Stylometric ML-based web-app to predict truthfulness of a news article.",
    github: "https://github.com/danish17/litmus-ai-web",
    image:
      "https://img.freepik.com/free-photo/high-angle-fake-news-title_23-2149318833.jpg?w=1480&t=st=1685903959~exp=1685904559~hmac=77ab1eb2ed1687d51badf479ca48518124a5dbaf393c9bcff34da765df5f0d92",
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
    image:
      "https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg?w=1480&t=st=1685955644~exp=1685956244~hmac=41a74e1aeddb80be1ed104b8f24d3638f2522fe59e10ca675aa7f85564ecd31b",
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
