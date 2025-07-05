import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import FAQSection from "./components/FAQSection";
import WhyUse from "./components/WhyUse";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import PrivacyPolicy from "./components/PrivacyPolicy";

function HomePage() {
  return (
    <>
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
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-neutral-800">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
