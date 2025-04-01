
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple/10 to-lightblue/15"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-lightblue/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-lightblue/5 rounded-full blur-2xl"></div>
        
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple/15 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl animate-slideUp">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-navy">
            Hi, I'm <span className="text-purple">Angel Shalini</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
            Computer Science Engineer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            A dedicated developer with strong skills in web development, programming, and a
            keen interest in computer networks and machine learning.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-purple hover:bg-purple/90 text-white">
              <a href="#projects">View My Projects</a>
            </Button>
            <Button variant="outline" className="border-purple text-purple hover:bg-purple/10">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center z-10">
        <a href="#about" className="animate-bounce inline-block">
          <ArrowDown className="text-gray-600 w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
