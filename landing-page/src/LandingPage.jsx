import React from "react";
import "./LandingPage.css";
import { Navbar } from "./Components-LandingPage/Navbar";
import { HeroSection } from "./Components-LandingPage/HeroSection";
import { StatsRow } from "./Components-LandingPage/StatsRow";
import { Features } from "./Components-LandingPage/Features";
import { Stackholder } from "./Components-LandingPage/Stackholder";
import { Footer } from "./Components-LandingPage/Footer";

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatsRow />
      <Features />
      <Stackholder />
      <Footer />
    </div>
  );
};
