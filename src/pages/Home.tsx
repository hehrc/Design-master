import { Hero } from "../components/sections/Hero";
import { Proof } from "../components/sections/Proof";
import { Steps } from "../components/sections/Steps";
import { Work } from "../components/sections/Work";
import { Testimonials } from "../components/sections/Testimonials";
import { Framework } from "../components/sections/Framework";
import { Pricing } from "../components/sections/Pricing";
import { Process } from "../components/sections/Process";
import { Showcase } from "../components/sections/Showcase";
import { Contact } from "../components/sections/Contact";
import { Reviews } from "../components/sections/Reviews";
import { Faq } from "../components/sections/Faq";

export function Home() {
  return (
    <>
      <Hero />
      <Proof />
      <Steps />
      <Work />
      <Testimonials />
      <Framework />
      <Pricing />
      <Process />
      <Showcase />
      <Contact />
      <Reviews />
      <Faq />
    </>
  );
}
