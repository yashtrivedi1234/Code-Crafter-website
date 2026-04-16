import React from "react";
import Hero from "./components/Hero";
import WebServicesPage from "./components/WebServicesPage";
import LogoFlipGrid from "./components/LogoFlipGrid";
import DigitalSolutions from "./components/DigitalSolutions";
import TeamSection from "./components/TeamSection";
import TestimonialSection from "./components/TestimonialSection";
import TechStack from "./components/TechStack";
import ProcessFlow from "./components/ProcessFlow";
import ContactUs from "./components/ContactUs";
import BlogSection from "./components/BlogSection";
import CaseStudies from "./components/CaseStudies";
import CodeCrafterLanding from "./components/CodeCrafterLanding";
import FAQ from "./components/FAQ";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <WebServicesPage /> */}
      <LogoFlipGrid />
      <DigitalSolutions />
      <TeamSection />
      <TestimonialSection />
      <TechStack/>
      <ProcessFlow />
      
      <BlogSection />
      <CaseStudies />
      
      {/* <Code CrafterLanding /> */}
      <CodeCrafterLanding />
      <ContactUs />
      <FAQ />
    </>
  );
};

export default Home;
