 "use client"


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "@/components/common/NavBar";
import AboutSection from "@/components/sections/AboutSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServiceSection from "@/components/sections/ServiceSection";
import HeroSection from "@/components/sections/HeroSection";
import FaqSection from "@/components/sections/FaqSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import LargeTextSection from "@/components/sections/LargeTextSection";
import FooterSection from "@/components/sections/FooterSection";

function Home() {
  return (
    <Router>
      <main className="bg-background">
        <NavBar />
        <div className="pt-[10rem] lg:pt-0">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <div className="px-4 md:px-[6rem] flex flex-col gap-[5rem] md:gap-[12.5rem] mt-[5rem] md:mt-[12.5rem]">
                    <AboutSection />
                    <ServiceSection />
                    <PortfolioSection />
                    <FaqSection />
                    <TestimonialSection />
                  </div>
                  <LargeTextSection />
                </>
              }
            />
            <Route 
              path="/about" 
              element={
                <div className="px-4 md:px-[6rem] mt-[5rem]">
                  <AboutSection />
                </div>
              } 
            />
            <Route 
              path="/portfolio" 
              element={
                <div className="px-4 md:px-[6rem] mt-[5rem]">
                  <PortfolioSection />
                </div>
              } 
            />
            <Route 
              path="/services" 
              element={
                <div className="px-4 md:px-[6rem] mt-[5rem]">
                  <ServiceSection />
                </div>
              } 
            />
          </Routes>
          <FooterSection />
        </div>
      </main>
    </Router>
  );
}

export default Home;