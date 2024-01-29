import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Skill as SkillType } from "../typings";

type Props = {
  skillSet: SkillType;
};

export default function Skill({ skillSet }: Props) {
  return (
    <div className="group relative flex justify-center cursor-pointer bg-white rounded-full border-white border-2 box-border">
      <motion.img
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        src={urlFor(skillSet.image).url()}
        alt={skillSet?.title}
        className="rounded-full object-cover h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 xl:h-18 xl:w-18 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="opacity-0 absolute group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 xl:h-18 xl:w-18 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-1xl font-bold text-black opacity-100">{skillSet?.progress}%</p>
        </div>
      </div>
    </div>
  );
}
