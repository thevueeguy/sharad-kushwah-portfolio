import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { Social } from "../typings";
import { useState } from "react";
import { Tooltip } from 'react-tooltip';

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  const [hover, setHover] = useState(false);
  return (
    <header className="sticky h-16 md:h-20 xl:h-28 top-0 p-5 flex items-center justify-between max-w-7xl mx-auto xl:items-center bg-transparent">
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
        className="flex flex-row items-center bg-transparent"
      >
        {socials?.map((social, index) => (
          <div
            key={social._id}
            className="flex items-center group"
            onClick={(e) => {
              e.preventDefault();
              window.open(social.url, "_blank");
            }}
          >
            <SocialIcon key={social._id} url={social.url} target="_blank" fgColor="white" bgColor="transparent" />
            <p className="transition-all duration-500 cursor-pointer ease-out opacity-50 w-0 overflow-hidden origin-top-left -rotate-12 group-hover:opacity-100 group-hover:w-fit group-hover:rotate-0">{social.title}</p>
          </div>
        ))}
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
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="flex flex-row items-center text-white-300 cursor-pointer hover:text-[#f1b05a]"
        data-tooltip-id="tooltip" 
        data-tooltip-content="Connect with me!"
        data-tooltip-place="bottom-start"
      >
        <SocialIcon className={"cursor-pointer transition-all duration-200 " + (hover ? "mr-1" : "mr-0")} network="email" fgColor={hover ? "orange" : "white"} bgColor="transparent" url="/contact" />
        <Link href="/contact">
          <p className={"uppercase hidden md:inline-flex text-white-400 transition-all duration-200 " + (hover ? "transform translate-x-1" : "transform translate-x-0")}>get in touch</p>
        </Link>
      </motion.div>
    </header>
  );
}
