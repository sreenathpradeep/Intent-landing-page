import React from 'react';
import { Timer, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Timer className="h-6 w-6 text-primary-400 mr-2" />
              <span className="text-xl font-bold">Intent</span>
            </div>
            <p className="text-neutral-400 max-w-xs">
              The mindful browsing extension that helps you take control of your social media time.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:info@intentextension.com" className="text-neutral-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-medium text-neutral-300 mb-3">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-neutral-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Roadmap</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-neutral-300 mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#faq" className="text-neutral-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-neutral-300 mb-3">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} Intent. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;