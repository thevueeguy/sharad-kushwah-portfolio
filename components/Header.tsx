import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
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
           fgColor="white"
           bgColor="transparent"
           url="#contact"
         />
         <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-white-400">
            get in touch
          </p>
         </Link>
       </motion.div>
    </header>
  );
}
