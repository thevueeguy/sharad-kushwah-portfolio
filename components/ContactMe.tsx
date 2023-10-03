import {
  BuildingLibraryIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-simple-toasts";
import { PageInfo } from "../typings";
import dynamic from "next/dynamic";
const EarthCanvas = dynamic(() => import("./Earth"), {
  ssr: false,
});

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    if (formData.email && formData.message && formData.name && formData.subject)
      location.href = `mailto:sharadrkushwah@gmail.com?subject=${formData.subject}&body=Hello, my name is ${formData.name}, ${formData.message} (${formData.email})`;
    else toast("Can not submit with empty values.", 1000);
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl space-y-5 md:space-y-6 lg:space-x-7 xl:space-y-10 justify-evenly items-center mx-auto mb-20 lg:mb-0">
      <h3 className="absolute top-10 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-base sm:text-xl md:text-2xl mx-auto font-medium">
        &nbsp;Contact
      </h3>

      <div className="flex flex-col lg:flex-row pt-28 space-y-10 items-center justify-center h-full w-full"> 
        <div className="h-full w-full md:h-1/2 md:w-1/2">
          <EarthCanvas />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col space-y-6 w-full xl:w-1/2"
        >
          <h4 className="text-sm sm:text-lg md:text-xl font-semibold text-center">
            I&#39;ve got what you need.&nbsp;&nbsp;
            <span className="decoration-red-800 underline text-sm sm:text-lg md:text-xl">
              Lets talk
            </span>
          </h4>
        
          <div className="space-y-2 sm:space-y-4 md:space-y-5 lg:space-x-6">
            <div className="flex items-center space-x-5 justify-center">
              <BuildingLibraryIcon className="text-red-800 h-5 w-5 sm:h-7 sm:w-7  animate-pulse" />
              <p className="text-sm sm:text-lg md:text-xl">MITS</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-red-800 h-5 w-5 sm:h-7 sm:w-7 animate-pulse" />
              <p className="text-sm sm:text-lg md:text-xl">{pageInfo?.address}</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-red-800 h-5 w-5 sm:h-7 sm:w-7 animate-pulse" />
              <p className="text-sm sm:text-lg md:text-xl">{pageInfo?.email}</p>
            </div>
          </div>
        
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-3 mx-auto w-[70%] h-auto"
          >
            {["name", "email", "subject", "message"].map((item: any, index) => (
              <div key={index}>
                <input
                  {...register(item)}
                  placeholder={item[0].toUpperCase() + item.slice(1)}
                  className="contactInput w-full placeholder:text-sm placeholder:sm:text-lg placeholder:md:text-xl"
                  type={item === "email" ? item : "text"}
                />
              </div>
            ))}
        
            <button className="contactButton">
              <div className="svg-wrapper-1 pr-3">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Submit</span>
            </button>
          </form>
        </motion.div>
      </div >
    </div>
  );
}
