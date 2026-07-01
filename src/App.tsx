import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import FutureVision from "./components/FutureVision";
import Mission2030 from "./components/Mission2030";
import ConnectSection from "./components/ConnectSection";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      <main className={`bg-bg text-text-primary min-h-screen ${loading ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar />
        <Hero />
        <AboutSection />
        <StatsSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <FutureVision />
        <Mission2030 />
        <ConnectSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
