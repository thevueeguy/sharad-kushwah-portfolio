import { motion } from "framer-motion";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-around mx-auto items-center z-10">
      <h3 className="absolute uppercase top-24 bottom-24 tracking-[10px] md:tracking-[20px] text-gray-500 text-base sm:text-xl md:text-2xl mx-auto">
        &nbsp;Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll overflow-y-hidden p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-red-900/20 scrollbar-thumb-red-900/80">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
