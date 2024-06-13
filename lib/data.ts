import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import PateoESG from "@/public/PateoESG.png";
import GarantiaApp from "@/public/garantiaPateopng.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
 {
  name: "Home",
  hash: "#home",
  instagram: "<-",
  hash2: "/"
 },
 {
  name: "About",
  hash: "#about",
  instagram: "Descubra",
  hash2: "/"
 },
 {
  name: "Projects",
  hash: "#projects",
  instagram: "quem",
  hash2: "/"
 },
 {
  name: "Skills",
  hash: "#skills",
  instagram: "não",
  hash2: "/"
 },
 {
  name: "Experience",
  hash: "#experience",
  instagram: "te segue",
  hash2: "/"
 },
 {
  name: "Instagram",
  hash: "/instagram",
  instagram: "de volta",
  hash2: "/"
 },
] as const;

export const experiencesData = [
 {
  title: "Graduated Mechatronics Technician",
  location: "São Paulo, BR",
  description:
   "I have a background in mechatronics technology but am now making a transition into programming, ready to apply my technical skills to a new and exciting career path.",
  icon: React.createElement(LuGraduationCap),
  date: "2012 - 2015",
 },
 {
  title: "Graduated Mechanical Engineering",
  location: "Recife, BR",
  description:
   "I completed my mechanical engineering degree and secured a position as a mechanical engineer.",
  icon: React.createElement(LuGraduationCap),
  date: "2013 - 2018",
 },
 {
  title: "ESL-English as Second Language",
  location: "San Antonio, TX",
  description:
   "I successfully completed an English as a Second Language (ESL) program, achieving an impressive score of 950 on the test. I am now well-prepared to communicate effectively in English.",
  icon: React.createElement(LuGraduationCap),
  date: "2018 - 2020",
 },
 {
  title: "Full-Stack Developer",
  location: "Recife, BR",
  description:
   "I'm currently studying to become a full stack developer, learning both front-end and back-end technologies to build versatile web applications.",
  icon: React.createElement(FaReact),
  date: "2022.2 - present",
 },
] as const;

export const projectsData = [
 {
  title: "PateoESG",
  description:
   "Effortlessly manage and reduce MTR emissions with our specialized ESG app for precise environmental impact control.",
  tags: ["React", "TypeScript", "Next.js", "MySQL", "Tailwind"],
  imageUrl: PateoESG,
 },
 {
  title: "GarantiaApp",
  description:
   "Optimize Hyundai after-sales warranty processes with intuitive dashboards for streamlined management.",
  tags: ["React", "TypeScript", "Next.js", "Tailwind", "MySQL", "GoogleAPI"],
  imageUrl: GarantiaApp,
 },
 {
  title: "Word Analytics",
  description:
   "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  tags: ["React", "Next.js", "MySQL", "Tailwind", "Framer"],
  imageUrl: wordanalyticsImg,
 },
] as const;

export const skillsData = [
 "HTML",
 "CSS",
 "JavaScript",
 "TypeScript",
 "React",
 "Next.js",
 "Node.js",
 "Git",
 "Tailwind",
 "Prisma",
 "MongoDB",
 "Express",
 "PostgreSQL",
 "Framer Motion",
] as const;