import {
  FaDiagramProject,
  FaEnvelope,
  // FaFacebookF,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
  // FaYoutube,
  FaTwitter,
} from "react-icons/fa6";
import {

  Algoxchange,
  CarRent,
  PortfolioFirebase,
  Ripfitness,
  Sheddlers,

  InstantMessage,
  Recruitify,
  
} from "../assets";
import {
  Aimage
} from '../assets'

export const Socials = [
  // {
  //   id: `facebook-${Date.now()}`,
  //   Icon: FaFacebookF,
  //   uri: "",
  //   color: "#1877F2",
  // },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uri: "https://www.linkedin.com/in/manish-s-35aa69118/",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uri: "https://github.com/Manishsingh8135",
    color: "#fff",
  },
  // {
  //   id: `youtube-${Date.now()}`,
  //   Icon: FaYoutube,
  //   uri: "",
  //   color: "#ff0000",
  // },
  {
    id: `twitter-${Date.now()}`,
    Icon: FaTwitter,
    uri: "https://twitter.com/manishsingh_01",
    color: "#00acee",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "My Projects",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About Me",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact Me",
  },
];

export const ProjectsData = [
  {
    id: `Ai Image Generator-${Date.now()}`,
    name: "AI Image Generator ",
    imgSrc: Aimage,
    gitURL: "https://github.com/Manishsingh8135/Ai-Image-generator",
    demoURL: "https://aiiimagegenerator.netlify.app/",
  },
  {
    id: `AlgoTrade-${Date.now()}`,
    name: "AlgoTrade ",
    imgSrc: Algoxchange,
    gitURL: "https://github.com/xahinds2/AlgoTrade",
    demoURL: "https://algoxchange.onrender.com/",
  },
  {
    id: `CarApp-${Date.now()}`,
    name: "Car Rental App",
    imgSrc: CarRent,
    gitURL: "https://github.com/Manishsingh8135/CarApp",
    demoURL: "https://car-app-mu.vercel.app/",
  },
  {
    id: `R1p Fitness-${Date.now()}`,
    name: "R1p Fitness",
    imgSrc: Ripfitness,
    gitURL: "https://github.com/Manishsingh8135/R1PFITNESS",
    demoURL: "https://www.r1pohana.net/",
  },{
    id: `Shedtronix Healthcare Agency-${Date.now()}`,
    name: "Shedtronix Healthcare Agency",
    imgSrc: Sheddlers,
    gitURL: "https://github.com/Manishsingh8135/Job-Portal",
    demoURL: "https://www.sheddlershealthcare.com/",
  },
  // {
  //   id: `FlightServiceService-${Date.now()}`,
  //   name: " Flight Booking Service",
  //   imgSrc: SocialMedia,
  //   gitURL: "https://github.com/ankittkamal/Flight-Booking-Service-System",
  // },

  {
    id: `InstantMessage-${Date.now()}`,
    name: "Instant Message",
    imgSrc: InstantMessage,
    gitURL: "https://vercel.com/manishsingh8135/messaging-app/DGGkvBNzJvZs6s4N3CzAj6KJ752v",
    demoURL: "https://vercel.com/manishsingh8135/messaging-app/DGGkvBNzJvZs6s4N3CzAj6KJ752v",
  },
  {
    id: `Recruitify-${Date.now()}`,
    name: "Recruitify",
    imgSrc: Recruitify,
    gitURL: "https://github.com/xahinds2/Recruitify",
    demoURL: "https://recruitify.onrender.com/",
  },

  // {
  //   id: `portfoliofirebase-${Date.now()}`,
  //   name: "Portfolio UI Fireabse",
  //   imgSrc: PortfolioFirebase,
  //   gitURL: "https://github.com/ankittkamal/React-Personal-Portfolio",
  //   demoURL: "https://ankittkamal-d5e97.web.app/",
  // },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Material UI",
  "React",
  "Git",
  "Tailwind CSS",
  "Docker",
  "MongoDB",
  "Mongoose",
  "Redux",
  "Git",
  "Github",
  "Firebase",
  "Rest API",
  "Node.js",
  "Express",
  "MySQL",
  "Postman",
  "Framer Motion",
  "NextJs",
  "TypeScript",
  "Prisma",
  "Python",
  "Django",
  "Flask"

];
