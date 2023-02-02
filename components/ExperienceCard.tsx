import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center p-5 space-y-1 md:space-y-7 md:p-10 flex-shrink-0 w-[325px] md:w-[500px] xl:w-[700px] snap-center lg:opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className="rounded-full object-cover object-center h-16 w-16 md:h-28 md:w-28 xl:h-36 xl:w-36"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />

      <div className="px-0 pt-2 md:px-10 text-center">
        <h4 className="text-base sm:text-xl md:text-2xl font-light">
          {experience?.jobTitle}
        </h4>
        <p className="text-base sm:text-lg md:text-xl font-bold mt-1">
          {experience?.company}
        </p>
        <div className="flex space-x-2 my-2 justify-center">
          {experience?.technologies.map((technology) => (
            <motion.img
              key={technology._id}
              className="h-10 w-10 rounded-full bg-white border-b-2 border-t-2"
              src={urlFor(technology.image).url()}
              alt={technology.title}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>

        <div className="text-left">
          <ul className="scrollbar-thin pr-2 scrollbar-track-black scrollbar-thumb-red-800 list-disc list-inside ml-5">
            {experience?.points.map((point, index) => (
              <li key={index} className="pb-2 text-sm md:text-md lg:text-lg">{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
