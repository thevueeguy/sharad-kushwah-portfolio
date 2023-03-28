import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Experience } from "../typings";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  const startDate = new Date(experience?.dateStarted);
  const endDate = new Date(experience?.dateEnded);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "black",
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
          <p className="text-base sm:text-lg md:text-xl font-bold">
            {experience?.company}
          </p>
          <div className="flex space-x-2 w-2/3 flex-wrap justify-center">
            {experience?.technologies.map((technology) => (
              <motion.img
                key={technology._id}
                className="h-8 w-8 md:h-10 md:w-10 lg:h-14 lg:w-14 rounded-full bg-white border-2 border-sky-600"
                src={urlFor(technology.image).url()}
                alt={technology.title}
              />
            ))}
          </div>
          <p className="uppercase text-gray-300">
            {`FROM ${startDate.toLocaleString("default", {
              month: "short",
            })} ${startDate.getFullYear()}`}
            {experience?.isCurrentlyWorkingHere
              ? "Present"
              : ` TO ${endDate.toLocaleString("default", {
                  month: "short",
                })} ${endDate.getFullYear()}`}
          </p>

          <ul className="scrollbar-thin scrollbar-track-black scrollbar-thumb-red-800 list-inside list-disc ">
            {experience?.points.map((point, index) => (
              <li key={index} className="mb-2 text-xs md:text-base ">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </VerticalTimelineElement>
  );
}
