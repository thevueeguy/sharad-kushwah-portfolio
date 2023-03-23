import { motion } from "framer-motion";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";
import { VerticalTimeline } from "react-vertical-timeline-component";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div className="flex flex-col gap-10 max-w-full justify-around mx-auto items-center z-10 px-0 md:px-14">
      <h3 className="uppercase top-0 tracking-[10px] md:tracking-[20px] text-gray-500 text-base sm:text-xl md:text-2xl mx-auto">
        &nbsp;Experience
      </h3>

      <VerticalTimeline>
        {experiences
          ?.sort((a, b) => a.jobTitle.localeCompare(b.jobTitle))
          .map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))}
      </VerticalTimeline>
    </motion.div>
  );
}
