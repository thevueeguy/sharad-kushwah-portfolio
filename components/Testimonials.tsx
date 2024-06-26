import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Testimonial } from "../typings";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css/bundle";
import { SocialIcon } from "react-social-icons";

type Props = {
  testimonials: Testimonial[];
};

export default function Testimonials({ testimonials }: Props) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly items-center">
      <h3 className="absolute top-5 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-base sm:text-xl md:text-2xl mx-auto font-medium">&nbsp;Testimonials</h3>

      <motion.div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-red-900/20 scrollbar-thumb-red-900/80 lg:px-16">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={"auto"}
          centeredSlides={true}
          navigation
          pagination={{ clickable: true }}
          speed={1800}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
        >
          {testimonials?.sort((first, second) => (first?.name.split("").reverse().join("") > second?.name.split("").reverse().join("") ? 1 : -1)).map((testimonial, index) => (
            <SwiperSlide key={testimonial._createdAt} virtualIndex={index}>
              <div className="flex justify-center items-center">
                <div key={testimonial?._id} className="snap-center flex flex-col space-y-5 justify-center items-center px-16 md:p-44 h-screen">
                  <motion.img initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="relative rounded-full h-24 w-24 sm:h-32 sm:w-32 xl:h-36 xl:w-36 mx-auto object-cover pt-0" src={urlFor(testimonial?.image).url()} alt="profile-photo" />
                  <div className="h-1/2 md:h-2/3 lg:h-5/6 sm:mx-5 px-0 md:px-10 max-w-6xl flex justify-start items-center flex-col">
                    <h4 className="text-base sm:text-xl md:text-2xl font-semibold text-center">{testimonial?.name}</h4>

                    <h4 className="text-xs mb-5 mt-2 sm:text-sm md:text-md font-semibold text-center flex flex-col items-center">
                      {testimonial?.position}
                      <SocialIcon className="cursor-pointer transition-all duration-200" network="linkedin" fgColor="white" bgColor="transparent" target="_blank" url={testimonial?.linkedin} />
                    </h4>

                    <div className="overflow-y-auto w-full lg:w-3/4 text-xs sm:text-base text-ellipsis pb-5 text-left sm:text-center pl-3 pr-2 scrollbar-thin scrollbar-track-red-900/20 scrollbar-thumb-red-900/80">{testimonial?.review}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <motion.div
        initial={{
          width: 0,
          transform: "skew(0deg, 0deg)",
          borderRadius: "0 60px 60px 0",
        }}
        whileInView={{
          width: "200%",
          transform: "skew(0deg, 45deg)",
          borderRadius: "0 1px 1px 0",
        }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="w-full absolute top-[30%] bg-white/10 left-0 h-[500px] skew-y-12"
      />
    </motion.div>
  );
}
