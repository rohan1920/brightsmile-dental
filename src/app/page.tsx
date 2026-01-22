import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { StatsHighlights } from "@/components/sections/StatsHighlights";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Doctors } from "@/components/sections/Doctors";
import { Appointment } from "@/components/sections/Appointment";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { ChatbotWidget } from "@/components/widgets/ChatbotWidget";

export default function Home() {
  return (
    <div id="top" className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <StatsHighlights />
        <About />
        <Services />
        <Doctors />
        <Appointment />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
