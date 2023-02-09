import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.0.2/swiper-bundle.css"
          integrity="sha512-ABMyvLZ+mq0GncC2ZnM5iiRCvYY/Vso3NO+qBaXcnF4WkUOWyfvGyOoCx2gm7851C3Mw69038LTP96jQmEfqSw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
