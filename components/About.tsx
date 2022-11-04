import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto ">
      <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="-mb-20 mt-20 md:mb-0 flex flex-shrink-0 flex-col w-56 h-56 object-cover md:flex-row md:w-[300px] md:h-[400px] xl:w-[500px] xl:h-[600px]"
        src="./2.png"
        alt="Image by pikisuperstar on Freepik"
      />
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
        <p className="text-[#e9e5e5] text-lg">
          I'm a final year undergraduate student pursuing my bachelor of
          technology in the department of Electrical Engineering. I am
          passionate about programming. Currently i am honing my skills,
          exploring and enhancing knowledge in different technologies.
        </p>
        <ul className="space-y-1 hidden md:block list-disc">
          <li className="list-item-about">
            While doing competitive programming in <b>C++</b> and <b>Javascript</b> I have solved <b>500+</b> problems across several coding platforms up until now .
          </li>
          <li className="list-item-about">I am a <b>MERN</b> stack developer.</li>
          <li className="list-item-about">
            I have <b>2+</b> years of experience in teaching Mathematics.
          </li>
          <li className="list-item-about">
            <b>Secured Rank 1</b> in college level coding contest.
          </li>
          <li className="list-item-about">
            I have working knowledge of <b>Cybersecurity</b>.
          </li>
        </ul>
        <hr />
        <p className="text-[#e9e5e5] text-lg">
          My aim is to keep getting better at problem-solving and to always keep
          a learning attitude in order to become a very good software engineer.
          Besides academics I love to read philosophy, practice meditation and
          workout in the gym.
        </p>
      </motion.div>
    </div>
  );
}
