import CourseReps from "@/components/CourseReps";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Keymoments from "@/components/Keymoments";
import MostLikely from "@/components/MostLikely";


import Image from "next/image";

export default function Home() {
  return (
    <main >
      <Hero/>
      <CourseReps/>
      <MostLikely/>
      <Keymoments/>
      <CTA/>
      <Footer/>
    </main>
  );
}
