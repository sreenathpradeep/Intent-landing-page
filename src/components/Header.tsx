import React, { useState, useEffect } from "react";
import { Timer, Menu, X } from "lucide-react";
import DownloadButton from "./DownloadButton";
import { useFacebookPixel } from "../hooks/useFacebookPixel";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { trackEvent } = useFacebookPixel();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Timer
              className="h-8 w-8 text-primary-600 mr-2"
              strokeWidth={2.5}
            />
            <span className="text-xl font-bold text-neutral-900">Intent</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#why-use"
              className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() =>
                trackEvent("ViewContent", {
                  content_name: "Why Use Intent Navigation",
                  content_category: "Navigation Click",
                  value: 1,
                  currency: "USD",
                })
              }
            >
              Why Use Intent
            </a>
            <a
              href="#how-it-works"
              className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() =>
                trackEvent("ViewContent", {
                  content_name: "How It Works Navigation",
                  content_category: "Navigation Click",
                  value: 1,
                  currency: "USD",
                })
              }
            >
              How It Works
            </a>
            <a
              href="#features"
              className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() =>
                trackEvent("ViewContent", {
                  content_name: "Features Navigation",
                  content_category: "Navigation Click",
                  value: 1,
                  currency: "USD",
                })
              }
            >
              Features
            </a>
            <a
              href="#faq"
              className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
              onClick={() =>
                trackEvent("ViewContent", {
                  content_name: "FAQ Navigation",
                  content_category: "Navigation Click",
                  value: 1,
                  currency: "USD",
                })
              }
            >
              FAQ
            </a>
            <DownloadButton size="small" />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-700 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#why-use"
              className="text-neutral-700 hover:text-primary-600 transition-colors py-2 font-medium"
              onClick={toggleMobileMenu}
            >
              Why Use Intent
            </a>
            <a
              href="#how-it-works"
              className="text-neutral-700 hover:text-primary-600 transition-colors py-2 font-medium"
              onClick={toggleMobileMenu}
            >
              How It Works
            </a>
            <a
              href="#features"
              className="text-neutral-700 hover:text-primary-600 transition-colors py-2 font-medium"
              onClick={toggleMobileMenu}
            >
              Features
            </a>
            <a
              href="#faq"
              className="text-neutral-700 hover:text-primary-600 transition-colors py-2 font-medium"
              onClick={toggleMobileMenu}
            >
              FAQ
            </a>
            <div className="pt-2">
              <DownloadButton size="full" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
