import {
  BuildingLibraryIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-simple-toasts";
import { PageInfo } from "../typings";

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
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl space-y-3 sm:space-y-5 md:space-y-6 lg:space-x-7 xl:space-y-10 justify-evenly items-center mx-auto">
      <h3 className="absolute top-10 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-base sm:text-xl md:text-2xl mx-auto">
        &nbsp;Contact
      </h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col space-y-10"
      >
        <h4 className="text-base sm:text-xl md:text-2xl font-semibold text-center">
          I have got what you need.&nbsp;&nbsp;
          <span className="decoration-red-800 underline text-base sm:text-xl md:text-2xl">
            Lets talk
          </span>
        </h4>

        <div className="space-y-3 sm:space-y-5 md:space-y-6 lg:space-x-7 xl:space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <BuildingLibraryIcon className="text-red-800 h-5 w-5 sm:h-7 sm:w-7  animate-pulse" />
            <p className="text-base sm:text-xl md:text-2xl">MITS</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-red-800 h-5 w-5 sm:h-7 sm:w-7 animate-pulse" />
            <p className="text-base sm:text-xl md:text-2xl">
              {pageInfo?.address}
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-red-800 h-5 w-5 sm:h-7 sm:w-7 animate-pulse" />
            <p className="text-base sm:text-xl md:text-2xl">
              {pageInfo?.email}
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 mx-auto w-[80%] h-auto"
        >
          <div className="flex space-x-2">
            <div className="containerInput">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput w-[50%]"
                type="text"
              />
            </div>
            <div className="containerInput ">
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput w-[50%]"
                type="email"
              />
            </div>
          </div>

          <div className="containerInput w-full">
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput w-full"
              type="text"
            />
          </div>
          <div className="containerInput w-full">
            <input
              {...register("message")}
              placeholder="Message"
              className="contactInput w-full"
            />
          </div>

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
    </div>
  );
}
