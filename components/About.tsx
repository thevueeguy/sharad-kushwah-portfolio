import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center mb-20 md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto ">
      <h3 className="absolute uppercase top-10 tracking-[10px] md:tracking-[20px] text-gray-500 text-base sm:text-xl md:text-2xl mx-auto font-medium">
        &nbsp;About
      </h3>

      <div className="cube -mb-20 mt-28 md:mb-0 mx-5 lg:mx-20 flex flex-shrink-0 flex-col md:flex-row md:mt-20 object-cover w-44 h-44 sm:w-60 sm:h-60 md:w-96 md:h-96 xl:w-auto xl:h-auto">
        <div className="topD"></div>
        <div>
          <span style={{ ["--i" as string]: 0 }}></span>
          <span style={{ ["--i" as string]: 1 }}></span>
          <span style={{ ["--i" as string]: 2 }}></span>
          <span style={{ ["--i" as string]: 3 }}></span>
        </div>

        <div className="cube2">
          <div>
            <span style={{ ["--i" as string]: 0 }}></span>
            <span style={{ ["--i" as string]: 1 }}></span>
            <span style={{ ["--i" as string]: 2 }}></span>
            <span style={{ ["--i" as string]: 3 }}></span>
          </div>

          <div className="cube3">
            <div className="top3"></div>
            <div>
              <span style={{ ["--i" as string]: 0 }}></span>
              <span style={{ ["--i" as string]: 1 }}></span>
              <span style={{ ["--i" as string]: 2 }}></span>
              <span style={{ ["--i" as string]: 3 }}></span>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="space-y-5 text-lg px-0 pt-20 md:px-10"
      >
        <p className="text-[#e9e5e5] text-xs sm:text-base">
          I&#39;m Sharad Kushwah, a dedicated software engineer who is
          passionate about building robust and responsive web applications. I
          have worked on a wide range of projects, from developing
          enterprise-level applications to designing and implementing
          user-friendly interfaces for consumer-facing products. I have gained a
          strong foundation in programming languages such as C++, C, Java and
          JavaScript. I am a dedicated learner and always strive to keep myself
          updated with the latest technologies and frameworks.
        </p>
        <div className="space-y-1 hidden lg:block list-disc text-sm sm:text-base">
          <p>
            I have hands-on experience in using various frameworks and libraries such as ReactJS,
            NextJS, ExpressJS, Angular, SpringBoot, Tailwind, Bootstrap, and Chakra UI, along with
            tools such as Postman, Eclipse, VS Code, GIT, IntelliJ IDEA and Sublime-text.
          </p>
          <p>
            Apart from my technical skills, I possess excellent soft skills such
            as problem-solving, flexibility, teamwork, and time management. I
            have completed relevant coursework in Data Structures, Algorithms
            Analysis, Cyber Security, Version Control, Frontend Development, and
            Backend Development. I am always looking for opportunities to enhance my skills
          and work on challenging projects. Please feel free to connect with me
          on LinkedIn or drop me an email.
          </p>
        </div>
        <hr />
        <p className="text-[#e9e5e5] text-xs sm:text-base">
          During my leisure time, I enjoy watching Anime or
          relaxing with Netflix. Additionally, I have a keen interest in reading
          philosophy and playing video games. <a className="underline decoration-red-800 underline-offset-4 hover:underline-offset-8 transition-all ease-in-out" target="_blank" href="https://steamcommunity.com/id/thevueeguy">Click here</a> to add me on Steam.
        </p>
      </motion.div>
    </div>
  );
}
