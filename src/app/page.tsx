import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Countdown from "@/components/Countdown";
import Timeline from "@/components/Timeline";
import Ceremony from "@/components/Ceremony";
import Party from "@/components/Party";
import DressCode from "@/components/DressCode";
import RSVP from "@/components/RSVP";
import Gifts from "@/components/Gifts";
import Music from "@/components/Music";
import Footer from "@/components/Footer";
import FloralDivider from "@/components/ui/FloralDivider";
import FloatingCTA from "@/components/ui/FloatingCTA";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <FloatingCTA />
      <MusicPlayer />
      <Hero />
      <OurStory />
      <FloralDivider />
      <Countdown />
      <FloralDivider variant="light" />
      <Timeline />
      <FloralDivider />
      <Ceremony />
      <Party />
      <FloralDivider />
      <DressCode />
      <FloralDivider variant="light" />
      <RSVP />
      <FloralDivider />
      <Gifts />
      <Music />
      <Footer />
    </main>
  );
}
