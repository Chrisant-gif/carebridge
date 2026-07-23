import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ImpactStats from "../components/ImpactStats";
import About from "../components/About";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import FounderStory from "../components/FounderStory";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ImpactStats />
      <About />
      <Features />
      <HowItWorks />
      <FounderStory />
    </>
  );
}