import Navbar from "../components/homepage/Navbar";
import Hero from "../components/homepage/Hero";
import ImpactStats from "../components/homepage/ImpactStats";
import About from "../components/homepage/About";
import Features from "../components/homepage/Features";
import HowItWorks from "../components/homepage/HowItWorks";
import FounderStory from "../components/homepage/FounderStory";
import DashboardPreview from "../components/homepage/DashboardPreview";
import Footer from "../components/homepage/Footer";

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
      <DashboardPreview />
      <Footer />
    </>
  );
}