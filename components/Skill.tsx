    import { motion } from "framer-motion";
    import React from "react";

    type Props = {
    directionLeft?: boolean;
    };

    export default function Skill({ directionLeft }: Props) {
    return (
        <div className="group relative flex cursor-pointer">
        <motion.img
            initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
            }}
            whileInView={{ opacity: 1, x:0 }}
            transition={{duration: 1}}
            viewport={{once: true}}
            src="./pfp.jpeg"
            className="rounded-full border border-gray-500 object-cover h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="opacity-0 absolute group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28  xl:h-32 xl:w-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-black opacity-100">100%</p>
            </div>
        </div>
        </div>
    );
    }
