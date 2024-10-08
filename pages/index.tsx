import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const WorkExperience = dynamic(() => import("../components/WorkExperience"), { loading: () => <Loader /> });
const Testimonials = dynamic(() => import("../components/Testimonials"), { loading: () => <Loader /> });
const Skills = dynamic(() => import("../components/Skills"), { loading: () => <Loader /> });
const About = dynamic(() => import("../components/About"), { loading: () => <Loader /> });
const Hero = dynamic(() => import("../components/Hero"), { loading: () => <Loader /> });

// Type definition
import { Certificate, Experience, PageInfo, Project, Skill, Social, Testimonial } from "../typings";

// Static props
import { getExperiences } from "../utils/getExperiences";
import { getPageInfo } from "../utils/getPageInfo";
import { getProjects } from "../utils/getProjects";
import { getSkills } from "../utils/getSkills";
import { getSocials } from "../utils/getSocials";
import { getTestimonials } from "../utils/getTestimonials";
import { getCertificates } from "../utils/getCertificates";
import ActionButton from "../components/ActionButton";
import Certificates from "../components/Certificates";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  testimonials: Testimonial[];
  certificates: Certificate[];
};

// custom loader
export const Loader = () => {
  return (
    <div role="status" className="h-screen w-full flex justify-center items-center">
      <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default function Home({ certificates, pageInfo, experiences, testimonials, skills, socials }: Props) {
  return (
    <Suspense fallback={<Loader />}>
      <div className="bg-black w-full relative text-white h-screen overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-thin scrollbar-track-red-900/20 scrollbar-thumb-red-900/80">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ duration: 2 }} className="circle"></motion.div>

        <Head>
          <title>Sharad Kushwah</title>
        </Head>

        <section id="hero">
          <Hero pageInfo={pageInfo} socials={socials} />
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

        <section id="certificates">
          <Certificates certificates={certificates} />
        </section>

        <section id="testimonials">
          <Testimonials testimonials={testimonials} />
        </section>

        <ActionButton />
      </div>
    </Suspense>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const testimonials: Testimonial[] = await getTestimonials();
  const certificates: Certificate[] = await getCertificates();
  const experiences: Experience[] = await getExperiences();
  const projects: Project[] = await getProjects();
  const pageInfo: PageInfo = await getPageInfo();
  const socials: Social[] = await getSocials();
  const skills: Skill[] = await getSkills();

  return {
    props: {
      certificates,
      testimonials,
      experiences,
      projects,
      pageInfo,
      socials,
      skills,
    },

    // next js will regenerate the page every 10 seconds when a request comes in at most once every 10 seconds useful if data is changing continuosl
    // revalidate: 10,
  };
};
