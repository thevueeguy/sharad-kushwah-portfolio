import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <div className='flex flex-row items-center'>
            {/* {Social Icons} */}
            <SocialIcon url="https://youtube.com/jaketrent" fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="https://youtube.com/jaketrent" fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="https://youtube.com/jaketrent" fgColor='gray' bgColor='transparent'/>
        </div>

        <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon className="cursor-pointer" network="email" url="https://twitter.com/jaketrent" fgColor='gray' bgColor='transparent'/>
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>get in touch</p>
        </div>
    </header>
  )
}