"use client";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import { navItems } from "../data";
import RecentProjects from "@/components/RecentProjects"; 


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />
       <Hero/>
       <Grid />
      <RecentProjects />
 
      </div>
    </main>
  );
};

export default Home;