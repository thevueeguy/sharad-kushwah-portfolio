import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity";
import { Project } from "../typings";

type Props = {
  projectData: Project[];
};

export default function Projects({ projectData }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-base sm:text-xl md:text-2xl mx-auto">
        &nbsp;Projects
      </h3>

      <motion.div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-red-900/20 scrollbar-thumb-red-900/80">
        {projectData?.map((project, index) => (
          <div key={project?._id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{ y: -200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative rounded-full h-24 w-24 sm:h-32 sm:w-32 xl:h-36 xl:w-36 mx-auto object-cover pt-0"
              src={urlFor(project.image).url()}
              alt="profile-photo"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-base sm:text-xl md:text-2xl font-semibold text-center">
                {project?.title}
              </h4>

              <div className="flex flex-row space-x-5 items-center justify-center">
                {project?.technologies.map((technology) => (
                  <motion.img
                    className="h-10 w-10 lg:h-16 lg:w-16 rounded-full"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                  />
                ))}
              </div>

              <p className="text-[#e9e5e5] text-center text-xs sm:text-lg md:text-xl lg:text-left ">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{
          width: 0,
          transform: "skew(0deg, 0deg)",
          borderRadius: "0 60px 60px 0",
        }}
        whileInView={{
          width: "100%",
          transform: "skew(0deg, 30deg)",
          borderRadius: "0 1px 1px 0",
        }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full absolute top-[30%] bg-white/10 left-0 h-[500px] skew-y-12"
      />
    </motion.div>
  );
}
