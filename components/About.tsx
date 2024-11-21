"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function About() {
  const { ref } = useSectionInView("About");
  const t = useTranslations("AboutSection");
  const sectionLan = useTranslations("SectionName");
  const activeLocale = useLocale();

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      <>
        <p className="mb-3 text-lg text-gray-700">
          👋 Hello! I’m{" "}
          <span className="font-bold text-blue-600 italic">Hanzla Zafar</span>, a{" "}
          <span className="font-semibold italic">Software Engineering</span>{" "}
          student with a passion for leveraging{" "}
          <span className="font-medium text-blue-600">Data Science</span> to solve
          real-world problems. With expertise in{" "}
          <span className="font-medium text-blue-600 italic">
            Machine Learning
          </span>{" "}
          and{" "}
          <span className="font-medium text-blue-600 italic">Deep Learning</span>, 
          I thrive at the intersection of technology and innovation.
        </p>
  
        <p className="mb-3 text-lg text-gray-700">
          🚀 Over the past{" "}
          <span className="font-medium italic text-blue-600">2 years</span>, I’ve
          honed my skills as a{" "}
          <span className="font-bold text-blue-600 italic">Data Scientist</span>. 
          My journey has involved building intelligent models, performing advanced 
          analytics, and diving deep into the world of{" "}
          <span className="font-medium italic text-blue-600">Generative AI</span>. 
          From analyzing complex datasets to delivering actionable insights, I aim 
          to create AI-driven solutions that leave a meaningful impact.
        </p>
  
        <p className="text-lg text-gray-700">
          🌟 Beyond academics, I’m an avid learner and tech enthusiast. I love
          exploring emerging technologies and pushing the boundaries of what’s
          possible through hands-on projects. I also actively share my journey and
          ideas on platforms like{" "}
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-blue-500 underline"
          >
            LinkedIn
          </a>, connecting with like-minded professionals to shape the future of
          technology together.
        </p>
      </>
    </motion.section>
  );
}  