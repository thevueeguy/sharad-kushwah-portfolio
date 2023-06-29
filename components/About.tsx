import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center mb-20 md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto ">
      <h3 className="absolute uppercase top-10 tracking-[10px] md:tracking-[20px] text-gray-500 text-base sm:text-xl md:text-2xl mx-auto">
        &nbsp;About
      </h3>

      <div className="cube -mb-20 mt-20 md:mb-0 mx-5 lg:mx-20 flex flex-shrink-0 flex-col md:flex-row object-cover w-44 h-44 sm:w-60 sm:h-60 md:w-96 md:h-96 xl:w-auto xl:h-auto">
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
        <p className="text-[#e9e5e5] text-sm sm:text-base md:text-base lg:text-base ">
          I&quot;m Sharad Kushwah, a dedicated frontend web developer who is
          passionate about building robust and responsive web applications.
          Pursuing my Bachelor of Technology in Electrical Engineering from
          Madhav Institute of Technology and Science in Gwalior, India, I have
          honed my skills in various programming languages such as C++, C, Java,
          JavaScript, and Typescript. I have a GPA of 8.50, and I am committed
          to staying up-to-date with the latest technologies and frameworks to
          improve my skills.
        </p>
        <div className="space-y-1 hidden lg:block list-disc text-sm sm:text-base">
          <p>
            With experience in competitive programming using C++ and JavaScript,
            I have successfully solved over 500 problems across various coding
            platforms. I specialize in the MERN stack and have worked as a
            Mathematics teacher for over two years.
          </p>
          <p>
            I have secured first place in a college-level coding contest and I
            have a working knowledge of cybersecurity. I strive to improve my
            problem-solving abilities and maintain a learning attitude to become
            a skilled software engineer.
          </p>
        </div>
        <hr />
        <p className="text-[#e9e5e5] text-sm sm:text-base">
          In my free time, I enjoy watching technology-related videos, relaxing
          with Netflix, and reading philosophy. I am always looking for
          opportunities to enhance my skills and work on challenging projects.
          Please feel free to connect with me on LinkedIn or drop me an email.
        </p>
      </motion.div>
    </div>
  );
}
