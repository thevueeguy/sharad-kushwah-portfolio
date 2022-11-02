import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Ahoy!",
            "The name's Sharad Kushwah",
            "<Welcome_to_my_portfolio />"
        ],
        loop: true,
        delaySpeed: 1000
    })
  return (
    <div>
        <BackgroundCircles />
        <h1>
            {text}
            <Cursor cursorColor='red'/>
        </h1>
    </div>
  )
}