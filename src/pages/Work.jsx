import React from 'react';
import BentoGrid from '../components/BentoGrid';
import BentoItem from '../components/BentoItem';
import '../App.css';

// Placeholder images - using img11/img12 etc for variety, or just one
import placeholderImg from '../assets/01.png'; 

const Work = () => {
  // Generate 9 case study items
  const caseStudies = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: `Case Study ${i + 1}`,
    description: "A brief description of the project goes here.",
    image: placeholderImg,
    behanceLink: "#",
    comingSoon: true
  }));

  return (
    <div className="app-container">
      <BentoGrid>
        {caseStudies.map((study) => (
          <BentoItem 
            key={study.id} 
            colSpan={1} 
            rowSpan={1} 
            className="work-item"
          >
            <div className="work-card">
              <img src={study.image} alt={study.title} className="work-image" />
              <div className="work-overlay">
                <div className="work-buttons">
                  <a href={study.behanceLink} className="btn btn-behance">Behance -&gt;</a>
                  <span className="btn btn-coming-soon">Coming Soon</span>
                </div>
              </div>
            </div>
          </BentoItem>
        ))}
      </BentoGrid>
    </div>
  );
};

export default Work;
