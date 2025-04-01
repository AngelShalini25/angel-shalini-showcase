
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Code, BookOpen } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Card className="shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-white/70 to-purple/10 backdrop-blur-sm border border-white/20">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-purple/20 rounded-full">
                  <Code className="h-8 w-8 text-purple" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Developer</h3>
              <p className="text-gray-600 text-center">
                Skilled in HTML, CSS, JavaScript, React.js, and MongoDB with a strong foundation in C and Java.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-white/70 to-lightblue/10 backdrop-blur-sm border border-white/20">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-lightblue/20 rounded-full">
                  <BookOpen className="h-8 w-8 text-lightblue" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Learner</h3>
              <p className="text-gray-600 text-center">
                Committed to continuous learning with interests in computer networks and machine learning algorithms.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-white/70 to-purple/10 backdrop-blur-sm border border-white/20">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-purple/20 rounded-full">
                  <Briefcase className="h-8 w-8 text-purple" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Collaborator</h3>
              <p className="text-gray-600 text-center">
                Strong communication and teamwork skills with active participation in Cloud Users Group and CSI.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12">
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            I am a dedicated and motivated Computer Science Engineer with a strong foundation in programming and web development.
            Throughout my academic journey at Kongu Engineering College, I have actively participated in paper presentations and ideathons,
            showcasing innovative ideas. I enjoy solving complex problems and have completed 144+ challenges on LeetCode and 50+ on HackerRank.
            Outside of tech, I enjoy drawing and gardening, which fuel my creativity and patience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
