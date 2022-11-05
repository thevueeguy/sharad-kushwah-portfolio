import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <motion.div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-red-900/20 scrollbar-thumb-red-900/80">
        {projects.map((project, index) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{ y: -200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative rounded-full h-32 w-32 mx-auto object-cover pt-3"
              src="./pfp.jpeg"
              alt="profile-photo"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-red-700/50">
                  Case study {index + 1} of {projects.length} : react
                </span>{" "}
                covid clone
              </h4>
              <p className="text-[#e9e5e5] text-center text-lg md:text-left">
                I'm a final year undergraduate student pursuing my bachelor of
                technology in the department of Electrical Engineering. I am
                passionate about programming. Currently i am honing my skills,
                exploring and enhancing knowledge in different technologies.
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
