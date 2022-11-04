import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[800px] snap-center p-10 bg-[#333] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        className="rounded-full h-32 w-32 object-cover object-center xl:w-[200px] xl:h-[200px]"
        src="./pfp.jpeg"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of thevueeguy.com </h4>
        <p className="text-2xl font-bold mt-1">thevueeguy</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src="./pfp.jpeg" alt="" />
        </div>
        <p className="uppercase py-5 text-gray-300">started ended</p>

        <ul>
          <li>points</li>
          <li>points</li>
          <li>points</li>
          <li>points</li>
          <li>points</li>
        </ul>
      </div>
    </article>
  );
}
