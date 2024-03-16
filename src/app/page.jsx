import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import SoftSkill from "@/components/SoftSkill";

export default function Home() {
  return (
    <main className="max-w-[350px] mx-auto space-y-8 mb-10">
      <Hero />
      <Experience />
      <Education />
      <SoftSkill />
    </main>
  );
}
