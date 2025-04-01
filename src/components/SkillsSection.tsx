
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const programmingSkills = [
    { name: 'C', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'JavaScript', level: 75 },
  ];

  const webSkills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'React.js', level: 75 },
    { name: 'MongoDB', level: 70 },
  ];

  const otherSkills = [
    'Computer Networks',
    'Machine Learning Algorithms',
    'Problem Solving',
    'Data Structures',
    'Team Collaboration',
    'Time Management',
    'Communication',
    'Project Management',
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">My Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
            {programmingSkills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-navy font-medium">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
            
            <h3 className="text-xl font-semibold mb-4 mt-8">Web Technologies</h3>
            {webSkills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-navy font-medium">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
          
          <div>
            <Card className="shadow-sm">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Other Skills</h3>
                <div className="flex flex-wrap">
                  {otherSkills.map((skill) => (
                    <span key={skill} className="skill-bubble">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Coding Platforms</h3>
              <Card className="shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">LeetCode</span>
                      <span className="text-purple font-semibold">144+ Problems</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">HackerRank</span>
                      <span className="text-purple font-semibold">50+ Problems</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
