import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import Head from "next/head";

// Components
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

// Type definition
import { Experience, PageInfo, Project, Skill, Social } from "../typings";

// Static props
import { getExperiences } from "../utils/getExperiences";
import { getPageInfo } from "../utils/getPageInfo";
import { getProjects } from "../utils/getProjects";
import { getSkills } from "../utils/getSkills";
import { getSocials } from "../utils/getSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  experiences,
  projects,
  skills,
  socials,
}: Props) {
  return (
    <div className="bg-black w-full relative text-white h-screen overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar-thin scrollbar-track-red-900/20 scrollbar-thumb-red-900/80">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
        className="circle"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
        className="circle"
      ></motion.div>

      <Head>
        <title>Sharad Kushwah</title>
      </Head>

      <Header socials={socials} />

      <section id="hero">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills">
        <Skills skills={skills} />
      </section>

      <section id="projects">
        <Projects projectData={projects} />
      </section>

      <section id="contact">
        <ContactMe pageInfo={pageInfo} />
      </section>

    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await getPageInfo();
  const experiences: Experience[] = await getExperiences();
  const projects: Project[] = await getProjects();
  const skills: Skill[] = await getSkills();
  const socials: Social[] = await getSocials();

  return {
    props: {
      pageInfo,
      experiences,
      projects,
      skills,
      socials,
    },

    // -next js will regenerate the page every 10 seconds
    // -when a request comes in
    // -at most once every 10 seconds
    // useful if data is changing continuosly

    // revalidate: 10,
  };
};
