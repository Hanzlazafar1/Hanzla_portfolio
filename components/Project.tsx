 "use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";
import { useLocale } from "next-intl";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const activeLocale = useLocale();

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-5 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-full sm:max-w-[45rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative   transition-all duration-300 hover:shadow-lg dark:text-white dark:bg-white/10">
        <div className="group pt-4 pb-7 px-2 sm:px-10  flex flex-col items-start gap-4  ">
          <h3 className="text-2xl font-semibold group-hover:text-pink dark:group-hover:text-yellow hover:underline">
            {title}
          </h3>

          <p className="text-gray-700 dark:text-white/70 leading-relaxed">
            {description}
          </p>

          <ul className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex gap-4">
            <Link
              href={projectUrl}
              target="_blank"
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 dark:hover:text-yellow hover:underline underline-offset-2"
              aria-label="View project on GitHub"
            >
              <FaGithubSquare className="w-5 h-5" />
              <span>Code</span>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
