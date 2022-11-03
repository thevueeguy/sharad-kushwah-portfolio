import React, { useRef } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky h-28 top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
      <motion.div
        initial={{
          x: -500,
          opacity: -1,
          scale: 10,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* {Social Icons} */}
        <SocialIcon
          url="https://www.linkedin.com/in/sharad-kushwah/"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/thevueeguy"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/sharadrkushwah"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/s.h.a.r.a.d.r/"
          fgColor="white"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: -1,
          scale: 10,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center text-white-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          url="mailto:sharadrkushwah@gmail.com"
          fgColor="white"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-white-400" onClick={(e) => location.href = "mailto:sharadrkushwah@gmail.com"}>
          get in touch
        </p>
      </motion.div>
    </header>
  );
}
