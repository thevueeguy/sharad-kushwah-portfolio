import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  const startDate = new Date(experience?.dateStarted);
  const endDate = new Date(experience?.dateEnded);

  return (
    <div className="card bg-black">
      <article className="flex flex-col text-center rounded-lg items-center p-5 space-y-1 md:space-y-7 md:p-10 flex-shrink-0 w-[325px] md:w-[600px] xl:w-[700px] snap-center cursor-pointer transition-opacity duration-200 overflow-hidden">
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
          className="rounded-md object-cover object-center h-24 w-24 md:h-28 md:w-28"
          src={urlFor(experience?.companyImage).url()}
          alt=""
        />

        <div className="px-0 md:px-10">
          <h4 className="text-base sm:text-xl md:text-2xl font-light">
            {experience?.jobTitle}
          </h4>
          <p className="text-base sm:text-lg md:text-xl font-bold mt-1">
            {experience?.company}
          </p>
          <div className="flex space-x-2 my-2 lg:my-5 justify-center flex-wrap">
            {experience?.technologies.map((technology) => (
              <motion.img
                key={technology._id}
                className="h-8 w-8 md:h-10 md:w-10 lg:h-14 lg:w-14 rounded-full bg-white border-2 border-sky-600"
                src={urlFor(technology.image).url()}
                alt={technology.title}
              />
            ))}
          </div>
          <p className="uppercase py-5 text-gray-300">
            {`FROM ${startDate.toLocaleString("default", {
              month: "short",
            })} ${startDate.getFullYear()}`}
            {experience?.isCurrentlyWorkingHere
              ? "Present"
              : ` TO ${endDate.toLocaleString("default", {
                  month: "short",
                })} ${endDate.getFullYear()}`}
          </p>

          <ul className="scrollbar-thin pr-2 scrollbar-track-black scrollbar-thumb-red-800 list-inside list-disc ">
            {experience?.points.map((point, index) => (
              <li key={index} className="mb-2 text-xs sm:text-md md:text-xl ">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
