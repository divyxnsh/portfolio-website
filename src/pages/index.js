import Head from "next/head";
import Courses from "../components/Courses/Courses";
import Experience from "../components/Experience/Experience";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <>
      <Head>
        <title>Divyansh Bhandari</title>
      </Head>
      <Layout>
        <Section grid>
          <Hero />
        </Section>
        <Experience />
        <Projects />
        <Skills />
        <Courses />
      </Layout>
    </>
  );
};

export default Home;
