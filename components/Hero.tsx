import { motion } from "framer-motion";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: ["Namaskaram!", `I am ${pageInfo?.name}`, "<Welcome />"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative rounded-full h-32 w-32 mx-auto group">
        <motion.img
          className="absolute rounded-full h-32 w-32 mx-auto object-cover"
          src={urlFor(pageInfo?.heroImage).url()}
          alt="profile-photo"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="z-20"
      >
        <h2 className="text-sm sm:text-base md:text-xl mx-auto uppercase text-gray-400 px-4 tracking-[7px] md:tracking-[12px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-xl md:text-2xl font-semibold px-10 py-2">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="red" />
        </h1>

        <div className="pt-8">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
