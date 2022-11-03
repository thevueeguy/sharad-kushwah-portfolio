import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-black text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Sharad Kushwah | Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start pt-20">
        <Hero />
      </section>

      {/* About */}
      <section id="About" className="snap-center">
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
}
