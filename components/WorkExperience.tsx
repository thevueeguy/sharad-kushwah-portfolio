import { motion } from "framer-motion";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css/bundle";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-around mx-auto items-center z-10 px-0 md:px-14">
      <h3 className="absolute uppercase top-5 tracking-[10px] md:tracking-[20px] text-gray-500 text-base sm:text-xl md:text-2xl mx-auto">
        &nbsp;Experience
      </h3>

      <div className="w-full flex items-center justify-center overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-red-900/20 scrollbar-thumb-red-900/80">
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => {}}
          onSlideChange={() => {}}
          observer
          observeParents
          parallax
        >
          {experiences?.map((experience, index) => (
            <SwiperSlide
              key={experience._createdAt}
              virtualIndex={index}
              className="my-10"
            >
              <div className="w-full flex justify-center items-center snap-x snap-mandatory">
                <ExperienceCard key={experience._id} experience={experience} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}
