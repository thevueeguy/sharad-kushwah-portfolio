import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
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
    location.href = `mailto:sharadrkushwah@gmail.com?subject=${formData.subject}&body=Hello, my name is ${formData.name}, ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl space-y-3 sm:space-y-5 md:space-y-6 lg:space-x-7 xl:space-y-10 justify-evenly items-center mx-auto">
      <h3 className="absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-base sm:text-xl md:text-2xl mx-auto">
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
            <PhoneIcon className="text-red-800 h-5 w-5 sm:h-7 sm:w-7  animate-pulse" />
            <p className="text-base sm:text-xl md:text-2xl">
              <b className="text-red-800">+</b>917999685385
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-red-800 h-5 w-5 sm:h-7 sm:w-7 animate-pulse" />
            <p className="text-base sm:text-xl md:text-2xl">{pageInfo?.address}</p>
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
          className="flex flex-col space-y-2 mx-auto w-[90%]"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-[50%]"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-[50%]"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            className="bg-red-900 rounded-md uppercase font-medium text-base sm:text-lg md:text-xl px-0 py-3 md:px-10 md:py-5 tracking-wider hover:bg-red-900/50"
            type="submit"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
}
