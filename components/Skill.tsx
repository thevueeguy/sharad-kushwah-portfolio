    import { motion } from "framer-motion";

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
            animate={{ opacity: 1, x:0 }}
            transition={{duration: 1}}
            src="./pfp.jpeg"
            className="rounded-full border border-gray-500 object-cover h-12 w-12 md:h-16 md:w-16 xl:h-20 xl:w-20 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="opacity-0 absolute group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:h-16 md:w-16 xl:h-20 xl:w-20 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-1xl font-bold text-black opacity-100">100%</p>
            </div>
        </div>
        </div>
    );
    }
