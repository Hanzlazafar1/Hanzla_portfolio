import React from "react";

import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

const webchat = "/webchat.png";
const flight = "/flight.png";
const recipie = "/recipie.png";
const movie = "/movie.png";


import {
  FaPython,
  FaGitAlt,
  FaGithub,
  FaServer,
  FaLanguage,
  FaAws,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiMysql,
  SiTableau,
  SiPowerbi,
  SiDocker,
  SiJupyter,
  SiKeras,
  SiScikitlearn,
  SiStreamlit,
  SiHuggingface,
  SiLangchain,
  SiGooglecolab,
  SiKaggle
} from "react-icons/si";

import { BiLogoFlask } from "react-icons/bi";
import { flightRouterStateSchema } from "next/dist/server/app-render/types";

export interface Skill {
  name: string;
  icon: React.ElementType;
  color?: string;
}

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiences",
    hash: "#experience",
  },
  // {
  //   name: "Social",
  //   hash: "#social",
  // },
] as const;

export const experiencesData = [
  {
    title: "BSc in Software Engineering",
    location: "University of Engineering and Technology, Pakistan",
    description:
      "pursuing a degree in Software Engineering at UET Taxila, where I am immersed in a rigorous curriculum that blends theoretical knowledge with practical application. The program emphasizes a deep understanding of core software engineering principles, coupled with hands-on experience in modern technologies. This academic foundation is equipping me to tackle complex challenges in the ever-evolving tech landscape",
    icon: React.createElement(LuGraduationCap),
    date: "2022 Sep - 2026 June",
  },
  {
    title: "Data Scientist",
    location: React.createElement(
      "span",
      {},
      React.createElement(
        "a",
        
        "Fiveer"
      ),
      "Fiverr , Self Employee"
    ),
    description:
      " As a freelancer and self-employed professional, I provide specialized services in the fields of chatbot development and data visualization. I work closely with clients across different industries to help them harness the power of AI and data analytics to solve business challenges, improve customer engagement, and make informed decisions based on insights derived from their data.",
    icon: React.createElement(FaVuejs),
    date: "2023 Dec - Present",
  },
  {
    title: "AI Intern at Devvibe",
    location: "DevVibe | Multan , Pakistan",
    description:
      "During my internship at DevVibe, I had the opportunity to immerse myself in cutting-edge technologies, particularly focusing on Large Language Models (LLMs) and cloud computing tools. I was exposed to practical applications of machine learning, AI model fine-tuning, and cloud infrastructure, while learning how to leverage open-source technologies for real-world business solutions.",
    icon: React.createElement(FaPython),
    date: "2024 June - 2024 August",
  },
];

export type ProjectTags = (typeof projectsData)[number]["tags"];

export const projectsData = [
  {
    title: "RAG Recipie Chatbot",

    description: `Developed a recipe chatbot leveraging Retrieval-Augmented Generation (RAG) and Gemini LLM for intelligent responses. The front end was designed using Streamlit, providing a user-friendly and interactive interface. `,

    tags: ["RAG", "Langchain","Streamlit","Gemini","Hugging Face","Vector DataBase"],
    imageUrl: recipie,
    projectUrl: "",
     
  },

  {
    title: "Airline Ticket Price Predictor",

    description:
      "A Flask-based web app that predicts Flight ticket prices using machine learning, featuring a user-friendly interface for accurate and practical insights, helping users make informed travel decisions.",
    tags: [
      "Python",
      "Machine Learning",
      "Flask",
      "scikit-learn",
      "Pandas",
    ],
    imageUrl:flight,
    projectUrl:
      "https://github.com/Hanzlazafar1/Ticket_price_predictor",
  },
  {
    title: "Custom Chatbot for Website ",

    description:
      "Built a chatbot for websites using LLaMA, RAG, FAISS, Hugging Face models, and LangChain, providing fast and accurate responses tailored to user queries.",
    tags: [  "RAG",
      "LLaMA",
      "Langchain",
      "Huging Face",
      "Faiss",],
    imageUrl: webchat,
    projectUrl: "https://github.com/Hanzlazafar1/zomato_Predication_App",
    
  },
  {
    title: "Movie Recommendation System",

    description: `This Movie Recommender System uses a popularity-based approach to suggest trending movies by analyzing user ratings, reviews, and watch frequency.`,

    tags: ["Machine Learning", "scikit-learn","Flask","Pandas","Pickel"],
    imageUrl: movie,
    projectUrl: "https://github.com/Hanzlazafar1/Movie-Recommender-System",
     
  },

];

export const skillsData: Skill[] = [
  { name: "Python", icon: FaPython, color: "#306998" },
  { name: "Machine Learning", icon: SiScikitlearn, color: "#FF6F00" },
  { name: "Deep Learning", icon: SiTensorflow, color: "#FF6F00" },
  { name: "NLP", icon: FaLanguage, color: "#2B8A3E" },
  { name: "RAG", icon: FaServer, color: "#6F4F37" },
  { name: "Langchain", icon: SiLangchain, color: " #000000" },
  { name: "Hugging Face", icon: SiHuggingface, color: " #FF9D00" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "NumPy", icon: SiNumpy, color: "#5A9E6F" },
  { name: "Matplotlib", icon: FaPython, color: "#8A8A8A" },
  { name: "Seaborn", icon: FaPython, color: "#8A8A8A" },
  { name: "SQL", icon: SiMysql, color: "#4479A1" },
  { name: "Streamlit", icon: SiStreamlit, color: "#f63366" },
  { name: "Flask", icon: BiLogoFlask, color: "#000000" },
  { name: "Power BI", icon: SiPowerbi, color: "#F2C811" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: FaAws, color: "#000000" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#181717" },
  { name: "Jupyter Notebooks", icon: SiJupyter, color: "#F37626" },
  { name: "Keras", icon: SiKeras, color: "#D00000" },
  { name: "Google Colab", icon: SiGooglecolab, color: "#FF6D00" },
  { name: "Kaggle", icon: SiKaggle, color: "#20BEFF" },
  { name: "Vector Databases", icon: FaServer, color: "#6A5ACD" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },

];

