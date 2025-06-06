import { HeroSectionOne } from "@/components/Hero";
import { NavbarComponent } from "@/components/Navbar";

export default function Home() {
  return (
   <main className="landing-page">
   <div className="navbar">
    <NavbarComponent/>
   </div>
   <div className="hero-section">
    <HeroSectionOne/>
   </div>
   </main>
  );
}
