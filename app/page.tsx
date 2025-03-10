"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Testimonies from "@/components/Testimonies";
import Experience from "@/components/Experience";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Projects from "../components/Projects";
import { BackgroundBeams } from "@/components/ui/background-beams";


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <BackgroundBeams/>
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects/>
        <Testimonies />
        <Experience />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
