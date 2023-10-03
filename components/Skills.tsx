import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import Skill from "./Skill";

type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex relative overflow-hidden flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-10 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-base sm:text-xl md:text-2xl mx-auto font-medium">
        &nbsp;Skills
      </h3>
      <h3 className="absolute top-24 uppercase tracking-[3px] text-gray-500 text-xs sm:text-sm md:text-lg">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5 md:gap-7 z-10 mt-10">
        {skills?.map((skill) => (
          <Skill key={skill._id} skillSet={skill} />
        ))}
      </div>
    </motion.div>
  );
}
