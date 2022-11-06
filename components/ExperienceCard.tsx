import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center p-3 space-y-1 md:space-y-7 md:p-10 flex-shrink-0 w-[300px] md:w-[500px] xl:w-[700px] snap-center bg-[#333] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{once: true}}
        className="rounded-full object-cover object-center h-24 w-24 md:h-28 md:w-28 xl:h-36 xl:w-36"
        src="./pfp.jpeg"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-base sm:text-xl md:text-2xl font-light">CEO of thevueeguy.com </h4>
        <p className="text-base sm:text-lg md:text-xl font-bold mt-1">thevueeguy</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src="./pfp.jpeg" alt="" />
        </div>
        <p className="uppercase py-5 text-gray-300">started ended</p>

        <ul>
          <li>points</li>
          <li>points</li>
          <li>points</li>
          <li>points</li>
          <li>points</li>
        </ul>
      </div>
    </article>
  );
}
