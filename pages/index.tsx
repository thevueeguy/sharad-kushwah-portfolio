import Head from "next/head";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  return (
    <div className="bg-black text-white h-screen overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-red-900/20 scrollbar-thumb-red-900/80">
      <Head>
        <title>Sharad Kushwah</title>
      </Head>

      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <WorkExperience />
      </section>

      <section id="skills">
        <Skills />
      </section>
      
      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <ContactMe />
      </section>
    </div>
  );
}
