import { motion } from "framer-motion";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";
import { Tooltip } from "react-tooltip";
import { memo } from "react";

type Props = {
  pageInfo: PageInfo;
};

const WinkEmoji = memo(function WinkEmoji() {
  return <span role="img">{String.fromCodePoint(0x1f609)}</span>;
});

export default function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: ["Namaskaram!", `I am ${pageInfo?.name}`, "<Welcome />"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden z-2000">
      <BackgroundCircles />
      <div className="relative rounded-full h-32 w-32 mx-auto group" data-tooltip-id="tooltip-wink">
        <Tooltip id="tooltip-wink">
          <WinkEmoji />
        </Tooltip>
        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute rounded-full h-32 w-32 mx-auto mt-2 object-cover" src={urlFor(pageInfo?.heroImage).url()} alt="profile-photo" />
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="z-20">
        <h2 className="text-xs sm:text-base md:text-xl mx-auto uppercase text-gray-400 px-4 tracking-[7px] md:tracking-[12px]">{pageInfo?.role}</h2>
        <h1 className="text-sm sm:text-base md:text-xl font-semibold px-10 py-2">
          <span className="mr-1">{text}</span>
          <Cursor cursorColor="#f1b05a" />
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
          <Link href="#testimonials">
            <button className="heroButton">Testimonials</button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
