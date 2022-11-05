import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    animate={{
        scale: [1,2,2,4,1],
        opacity: [0.1, 0.5, 1, 1, 1, 0.8],
        borderRadius: ["20%", "20%", "50%", "80%", "10%"]
    }}
    transition={{
        duration: 3
    }}  
    className="relative flex justify-center items-center top-20"> 
      <div className="absolute border border-[#6e3a3a] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] opacity-20 rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border border-[#222121] opacity-25 rounded-full h-[520px] w-[520px] mt-52" />
      <div className="absolute border border-white opacity-50 rounded-full h-[650px] w-[650px] mt-52 animate-pulse" />
      <div className="absolute border border-[#333333] opacity-20 rounded-full h-[800px] w-[800px] mt-52 animate-pulse" />
    </motion.div>
  );
}