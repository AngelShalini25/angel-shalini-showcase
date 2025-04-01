
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-purple/5">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
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
            A passionate developer with expertise in web development, programming, and a
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
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <a href="#about" className="animate-bounce inline-block">
          <ArrowDown className="text-gray-600 w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
