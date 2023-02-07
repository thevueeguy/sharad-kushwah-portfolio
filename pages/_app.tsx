import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';

// button styling
import "../styles/hero-button.css"
import "../styles/contact-button.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
