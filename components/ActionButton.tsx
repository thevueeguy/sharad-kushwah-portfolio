import { PlusIcon, ArrowDownTrayIcon, LinkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

export default function ActionButton() {
  const [click, setClick] = useState<boolean>(false);
  const PORTFOLIO_GITHUB = "https://github.com/thevueeguy/sharad-kushwah-portfolio";

  return (
    <div className="fixed bottom-0 right-0 p-5 flex items-end justify-end w-18 h-18 md:w-24 md:h-24 z-20000">
      <Tooltip id="tooltip" />
      <div
        className={`text-white cursor-pointer active:scale-110 shadow-xl z-20000 ease-in-out duration-100 flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-red-400 to-red-700 z-50 absolute ${click ? "rotate-45" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          setClick(!click);
        }}
      >
        <PlusIcon className="h-4 w-4 md:h-6 md:w-6 font-bold" />
      </div>
      <div data-tooltip-id="tooltip" data-tooltip-content="Download Resume" data-tooltip-place="left" className={`absolute cursor-pointer active:scale-110 z-20000 rounded-full transition-all duration-100 ease-out scale-y-0 flex  p-2 hover:p-3 bg-green-300 scale-100 hover:bg-slate-600 hover:text-white text-black ${click ? "scale-y-100 -translate-x-16" : ""}`}>
        <a href="Sharad_Resume.pdf" download>
          <ArrowDownTrayIcon className="h-3 w-3 md:h-5 md:w-5 m-1" />
        </a>
      </div>
      <div data-tooltip-id="tooltip" data-tooltip-content="Source Code" data-tooltip-place="left" className={`absolute cursor-pointer active:scale-110 z-20000 rounded-full transition-all duration-100 ease-out scale-x-0 flex  p-2 hover:p-3 bg-blue-300 hover:bg-slate-600 hover:text-white text-black ${click ? "scale-x-100 -translate-y-16" : ""}`}>
        <a href={PORTFOLIO_GITHUB} target="_blank">
          <LinkIcon className="h-3 w-3 md:h-5 md:w-5 m-1" />
        </a>
      </div>
    </div>
  );
}
