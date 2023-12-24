import { SpeedInsights } from '@vercel/speed-insights/next';
import type { AppProps } from "next/app";
import "../styles/globals.css";

// UI addtions
import "../styles/bubbles.css";
import "../styles/contact-button.css";
import "../styles/cube.css";
import "../styles/hero-button.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}
