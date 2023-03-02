import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 4, 1],
        opacity: [0.1, 0.5, 1, 1, 1, 0.8],
        borderRadius: ["20%", "20%", "50%", "80%", "10%"],
      }}
      transition={{
        duration: 3,
      }}
      className="relative flex justify-center items-center bg-black"
    >
      <div className="absolute border border-[#5a4343] rounded-full h-[130px] w-[130px] md:h-[200px] md:w-[200px] mt-52 animate-ping" />
      <motion.div
        initial={{
          animation: "none",
        }}
        animate={{
          animation: "spin 15s linear infinite",
        }}
        transition={{
          duration: 2.5,
        }}
        className="absolute border border-[#484747] opacity-80 h-[200px] w-[200px] md:h-[300px] md:w-[300px] mt-52 animate-spin-slow hexagon"
      />
      <div className="absolute border border-[#2c2c2c] opacity-90 rounded-full h-[260px] w-[260px] md:h-[520px] md:w-[520px] mt-52" />
      <div className="absolute border border-gray-500 opacity-70 rounded-full h-[350px] w-[350px] md:h-[650px] md:w-[650px] mt-52 animate-pulse" />
      <div className="absolute border border-[#333333] opacity-100 rounded-full h-[400px] w-[400px] md:h-[800px] md:w-[800px] mt-52 animate-pulse" />
    </motion.div>
  );
}
