import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
// import { Gallery } from "@/components/Gallery";
import { Services } from "@/components/Services";
import { Memberships } from "@/components/Memberships";
import { Achievements } from "@/components/Achievements";
import { Skills } from "@/components/Skills";
import { Extracurriculars } from "@/components/Extracurriculars";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      {/* <Gallery /> */}
      <Services />
      <Memberships />
      <Achievements />
      <Skills />
      <Extracurriculars />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
