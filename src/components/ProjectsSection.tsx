
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Time Tracker',
      description: 'A comprehensive time tracking application to help users monitor and manage their time efficiently across various activities and projects.',
      technologies: ['React.js', 'JavaScript', 'CSS', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop',
      links: {
        github: '#',
        live: '#',
      },
    },
    {
      title: 'CPU Scheduling Algorithm',
      description: 'Implementation of various CPU scheduling algorithms to optimize process management in operating systems. Interactive visualization of scheduling techniques.',
      technologies: ['Java', 'Data Structures', 'Algorithm Design'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=500&auto=format&fit=crop',
      links: {
        github: '#',
        live: '#',
      },
    },
    {
      title: 'Smart Automation Agriculture',
      description: 'An IoT-based system designed for agricultural automation, featuring sensors for monitoring environmental conditions and automated irrigation.',
      technologies: ['IoT', 'Machine Learning', 'Data Analysis'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=500&auto=format&fit=crop',
      links: {
        github: '#',
      },
    },
    {
      title: 'Specs Finder',
      description: 'An innovative application that uses computer vision to help users find spectacles that match their face shape and personal style preferences.',
      technologies: ['Computer Vision', 'React.js', 'Machine Learning'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&auto=format&fit=crop',
      links: {
        github: '#',
        live: '#',
      },
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2 text-navy">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="bg-muted/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-end space-x-4">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple transition-colors">
                    <Github size={20} />
                    <span className="sr-only">GitHub Repository</span>
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple transition-colors">
                    <ExternalLink size={20} />
                    <span className="sr-only">Live Demo</span>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
