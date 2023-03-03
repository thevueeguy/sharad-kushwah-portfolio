import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky h-16 md:h-20 xl:h-28 top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
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
        {socials?.map((social, index) => (
          <div
            key={social._id}
            className="flex items-center group"
            onClick={(e) => {
              e.preventDefault();
              window.open(social.url, "_blank");
            }}
          >
            <SocialIcon
              key={social._id}
              url={social.url}
              target="_blank"
              fgColor="white"
              bgColor="transparent"
            />
            <p className="transition-all duration-500 cursor-pointer ease-out opacity-50 w-0 overflow-hidden origin-top-left -rotate-12 group-hover:opacity-100 group-hover:w-fit group-hover:rotate-0">
              {social.title}
            </p>
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
        className="flex flex-row items-center text-white-300 cursor-pointer hover:text-red-400"
      >
        <SocialIcon
          className="cursor-pointer transition-all duration-300 hover:mr-1 "
          network="email"
          fgColor="white"
          bgColor="transparent"
          url="#contact"
        />
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-white-400 hover:ml-1 transition-all duration-300">
            get in touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
