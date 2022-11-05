import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

export default function ContactMe({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got what you need.
          <span className="decoration-red-800 underline">Lets talk</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-red-800 h-7 w-7 animate-pulse"/>
            <p className="text-2xl">7999685385</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-red-800 h-7 w-7 animate-pulse"/>
            <p className="text-2xl">123 street food</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-red-800 h-7 w-7 animate-pulse"/>
            <p className="text-2xl">sharadrkushwah@gmail.com</p>
          </div>
        </div>

        
      </div>
    </div>
  );
}
