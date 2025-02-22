import { PageInfo, Social } from "../typings";

import { memo } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import { urlFor } from "../sanity";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import { Loader } from "../pages";
import BackgroundCircles from "./BackgroundCircles";

const Header = dynamic(() => import("../components/Header"), { loading: () => <Loader /> });

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
};

const WinkEmoji = memo(function WinkEmoji() {
  return <span role="img">{String.fromCodePoint(0x1f609)}</span>;
});

export default function Hero({ pageInfo, socials }: Props) {
  const [text] = useTypewriter({
    words: ["Namaskaram!", "I'm a Frontend Engineer, crafting seamless user interfaces.", "Pixel perfectionist, refining websites with an eagle eye.", "<Welcome />"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <>
      <Header socials={socials} />
      <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-visible">
        <BackgroundCircles />
        <div className="relative rounded-full h-32 w-32 mx-auto group" data-tooltip-id="tooltip-wink">
          <Tooltip id="tooltip-wink">
            <WinkEmoji />
          </Tooltip>
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute border-2 border-white rounded-full h-32 w-32 mx-auto mt-2 object-cover" src={urlFor(pageInfo?.heroImage).url()} alt="profile-photo" />
        </div>
        <motion.div className="z-10 flex flex-col items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          <h2 className="text-xs sm:text-base md:text-xl mx-auto uppercase text-gray-400 px-4 tracking-[7px] md:tracking-[12px]">{pageInfo?.name}</h2>
          <h1 className="text-xs sm:text-base md:text-md font-semibold text-center w-2/3 px-10 py-4 h-16">
            <span>{text}</span>
            <Cursor cursorColor="#f1b05a" />
          </h1>

          <div className="pt-8 px-3 cursor-pointer flex flex-wrap justify-center align-middle items-center w-full">
            <Link href="#about">
              <button className="heroButton">About</button>
            </Link>
            <Link href="#experience">
              <button className="heroButton">Experience</button>
            </Link>
            <Link href="#skills">
              <button className="heroButton">Skills</button>
            </Link>
            <Link href="#certificates">
              <button className="heroButton">Certificates</button>
            </Link>
            <Link href="#testimonials">
              <button className="heroButton">Testimonials</button>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
