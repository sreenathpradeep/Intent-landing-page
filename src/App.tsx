import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import FAQSection from "./components/FAQSection";
import WhyUse from "./components/WhyUse";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-800">
      <Header />
      <main>
        <Hero />
        <WhyUse />
        <HowItWorks />
        <Features />
        <FAQSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
