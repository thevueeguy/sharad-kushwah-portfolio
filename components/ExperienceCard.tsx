import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article>
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
        viewport={{ once: true }}
        className="rounded-full h-32 w-32 object-cover object-center xl:w-[200px] xl:h-[200px]"
        src="./pfp.jpeg"
        alt=""
      />

      <div>
        <h4>CEO of thevueeguy.com </h4>
        <p>thevueeguy</p>
        <div>

        </div>
        <p>started ended</p>

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
