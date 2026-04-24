
import { Toaster } from "@/components/ui/sonner";
import { Hero, About, TechStack, Projects, Experience, Education, Contact } from "./components";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Education />
      <Contact />
      <Toaster position="top-right" />
    </div>
  );
}
