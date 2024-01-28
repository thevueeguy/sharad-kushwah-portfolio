import { AnimatePresence, motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Experience } from "../typings";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import NoSSRComponent from "./NoSSR";
import { useState } from "react";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  const startDate = new Date(experience?.dateStarted);
  const endDate = new Date(experience?.dateEnded);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        maxWidth: "500px"
      }}
      contentArrowStyle={{ borderRight: "10px solid  white" }}
      iconStyle={{ background: "white" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <motion.img
            src={urlFor(experience?.companyImage).url()}
            alt={experience.company}
            className="w-[80%] h-[80%] object-contain"
          />
        </div>
      }
    >
      <article className="rounded-lg w-full snap-center cursor-pointer transition-opacity duration-200">
        <div className="px-0 md:px-5 flex flex-col justify-center items-center text-center space-y-1 md:space-y-7">
          <h4 className="text-base sm:text-xl md:text-2xl font-light">
            {experience?.jobTitle}
          </h4>
          <div className="text-base sm:text-lg md:text-xl font-bold py-1">
            {experience?.company}
          </div>
          <div className="w-1/2 flex py-2 justify-center gap-2 flex-wrap">
            {experience?.technologies.map((technology) => (
              <motion.img
                key={technology._id}
                className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 object-fill rounded-full bg-white border-2 border-white-800 border-double"
                src={urlFor(technology.image).url()}
                alt={technology.title}
              />
            ))}
          </div>

          <NoSSRComponent>
            <div className="uppercase text-gray-300 py-1">
              {`FROM ${startDate.toLocaleString("default", {
                month: "short",
              })} ${startDate.getFullYear()}`}
              {experience?.isCurrentWorkingHere
                ? " - Present"
                : ` To ${endDate.toLocaleString("default", {
                    month: "short",
                  })} ${endDate.getFullYear()}`}
            </div>
          </NoSSRComponent>
              
          <motion.ul className="overflow-hidden list-inside list-disc">
            <li
              key={0}
              className="mb-2 text-xs md:text-base text-left leading-tight"
            >
              {experience.points[0]}
            </li>
            <AnimatePresence initial={false}>
              {isOpened && (
                <motion.section
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {experience?.points.slice(1).map((point, index) => (
                    <li key={index + 1} className="mb-2 text-xs md:text-base text-left leading-tight">
                      {point}
                    </li>
                  ))}
                </motion.section>
              )}
            </AnimatePresence>
          </motion.ul>
        </div>
        <motion.div
            className="flex flex-row gap-3 justify-center items-center align-middle w-full h-full mt-3"
            onClick={() => setIsOpened(!isOpened)}
          >
            <span>Read {isOpened ? "Less" : "More"}</span>
            {isOpened ? (
              <ChevronUpIcon className="text-red-800 h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 animate-bounce" />
            ) : (
              <ChevronDownIcon className="text-red-800 h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 animate-bounce" />
            )}
          </motion.div>
      </article>
    </VerticalTimelineElement>
  );
}
