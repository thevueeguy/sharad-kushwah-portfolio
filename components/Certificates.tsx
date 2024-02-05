// @ts-nocheck
import { useState } from "react";
import { urlFor } from "../sanity";
import { motion } from "framer-motion";
import { Lightbox } from "react-modal-image";
import { Certificate as CertificateType } from "../typings";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Grid } from "swiper";

// Import Swiper styles
import "swiper/css/bundle";

type Props = {
  certificates: CertificateType[];
};

export default function Certificates({ certificates }: Props) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [url, setUrl] = useState<string | undefined>(undefined);
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly items-center">
      <h3 className="absolute top-0 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-base sm:text-xl md:text-2xl mx-auto font-medium">&nbsp;Certificates</h3>
      <h3 className="absolute top-12 uppercase text-center tracking-[3px] text-gray-500 text-xs sm:text-sm md:text-md">Click on a certificate to view in full size</h3>

      <motion.div className="relative w-full flex scrollbar-thin scrollbar-track-red-900/20 scrollbar-thumb-red-900/80 h-4/5">
        <Swiper slidesPerView={3} grid={{ rows: 2 }} spaceBetween={30} centeredSlides={true} modules={[Navigation, A11y, Grid]} navigation>
          {certificates.map((certificate, index) => (
            <SwiperSlide key={certificate._id} virtualIndex={index} className="!h-1/3 my-auto align-middle !flex !mx-auto">
              <div className={"flex flex-col items-center hover:scale-110 transition-all duration-200 cursor-pointer group opacity-80 hover:opacity-100 " + ((index&1 ? "justify-start" : "justify-end"))}>
                <motion.img onClick={() => {setIsClicked(true); setUrl(urlFor(certificate?.certificate).url())}} initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="relative w-24 h-24 sm:w-44 sm:h-44 xl:w-60 xl:h-60 mx-auto object-contain pt-0" data-tooltip-id="tooltip" data-tooltip-content={certificate?.summary} data-tooltip-place="bottom" src={urlFor(certificate?.certificate).url()} alt="profile-photo" />
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
          width: "100%",
          transform: "skew(0deg, 0deg)",
          borderRadius: "0 1px 1px 0",
        }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="w-full absolute top-[30%] bg-white/10 left-0 h-[500px] skew-y-12"
      />

      {isClicked && <Lightbox small={""} medium={url} large={url} alt="Certificate in view!" onClose={() => setIsClicked(false)} />}
    </motion.div>
  );
}

