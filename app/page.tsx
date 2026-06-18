import { LandingHero } from "./_template/components/landing-hero";
import { LearnMore } from "./_template/components/learn-more";
import { Footer } from "./_template/components/footer";
import { CARDS } from "./_template/content/cards";
import { HomeCompo } from "./_template/components/landing-her";
import { Navbar } from "./dashboard/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HomeCompo />
      {/* <LandingHero />
      <LearnMore cards={CARDS} /> */}
      <Footer />
    </>
  );
}
