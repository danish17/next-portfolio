import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineLink,
} from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";

const socialLinks = [
  {
    title: "Send Mail",
    icon: <AiFillMail />,
    link: "mailto:danishshakeel54@gmail.com",
    color: "secondary",
  },
  {
    title: "Read Blog",
    icon: <AiOutlineLink />,
    link: "https://danishshakeel.me",
    color: "error",
  },
  {
    title: "View LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://linkedin.com/in/danishshakeel",
    style: { background: "#0a66c2" },
    rel: "noreferrer noopener",
  },
  {
    title: "View GitHub",
    icon: <AiFillGithub />,
    link: "https://github.com/danish17",
    style: { background: "#333" },
    rel: "noreferrer noopener",
  },
  {
    title: "View Google Scholar",
    icon: <SiGooglescholar fill="#3F86F4" />,
    link: "https://scholar.google.com/citations?user=QnC8JDQAAAAJ&hl=en",
    style: { background: "#f0f0f0" },
    rel: "noreferrer noopener",
  },
  {
    title: "View Instagram",
    icon: <AiFillInstagram />,
    link: "https://instagram.com/iamdanish17",
    style: { background: "#5851db" },
    rel: "noreferrer noopener",
  },
];

export default socialLinks;
