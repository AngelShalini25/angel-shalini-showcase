
import React from 'react';

const EducationSection = () => {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Education & Experience</h2>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="ml-8">
              <h3 className="text-xl font-bold text-navy">B.E. Computer Science and Engineering</h3>
              <p className="text-gray-500 mb-2">Kongu Engineering College | 2019 - 2023</p>
              <p className="text-gray-700">CGPA: 8.06</p>
              <div className="mt-2">
                <p className="text-gray-600">
                  Completed comprehensive coursework in computer science fundamentals, 
                  algorithms, data structures, and specialized studies in computer networks.
                </p>
              </div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="ml-8">
              <h3 className="text-xl font-bold text-navy">Machine Learning Workshop</h3>
              <p className="text-gray-500 mb-2">PSG Institute of Technology and Applied Research</p>
              <div className="mt-2">
                <p className="text-gray-600">
                  Participated in an intensive workshop focusing on machine learning algorithms
                  and their applications in medical data analysis.
                </p>
              </div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="ml-8">
              <h3 className="text-xl font-bold text-navy">Ideathon Participation</h3>
              <p className="text-gray-500 mb-2">Various Tech Events</p>
              <div className="mt-2">
                <p className="text-gray-600">
                  Presented innovative ideas including "Smart Automation Agriculture" and "Specs Finder",
                  showcasing problem-solving abilities and technical creativity.
                </p>
              </div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="ml-8">
              <h3 className="text-xl font-bold text-navy">Active Member</h3>
              <p className="text-gray-500 mb-2">Cloud Users Group & Computer Society of India</p>
              <div className="mt-2">
                <p className="text-gray-600">
                  Participated in community activities, workshops, and knowledge-sharing sessions
                  to stay updated with the latest advancements in technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
