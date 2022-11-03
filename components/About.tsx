import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto">
    <h3 className="absolute top-24 tracking-[20px] text-gray-500 text-2xl">About</h3>
    <motion.img 
    initial={{
        x: -200,
        opacity: 0
    }}
    whileInView={{
        opacity: 1,
        x:0
    }}
    transition={{
        duration: 1
    }}
    className="-mb-20 md:mb-0 flex flex-shrink-0 flex-col w-56 h-56 object-cover md:flex-row md:w-[300px] md:h-[400px] xl:w-[500px] xl:h-[600px]"
    src="./2.png"
    alt="Image by pikisuperstar on Freepik"
    />
    <div>
        <h4>
            Here a little background
        </h4>
    </div>
  </div>;
}
