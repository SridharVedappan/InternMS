import React from "react";
import "../Components-LandingPage/LandingPage.css";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import StatsRow from "./StatsRow";
import Features from "./Features";
import Stakeholder from "./Stackeholder";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatsRow />
      <Features />
      <Stakeholder />
      <Footer />
    </div>
  );
}
