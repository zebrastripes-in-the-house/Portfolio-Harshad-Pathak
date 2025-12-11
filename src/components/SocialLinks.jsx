import React from 'react';
import BentoItem from './BentoItem';

const SocialLinks = () => {
  const links = [
    { name: 'Instagram', url: '#', color: '#E1306C' },
    { name: 'Github', url: '#', color: '#333' },
    { name: 'LinkedIn', url: '#', color: '#0077B5' },
    { name: 'Behance', url: '#', color: '#1769FF' },
  ];

  return (
    <>
      {links.map((link) => (
        <BentoItem key={link.name} colSpan={1} rowSpan={1} className="social-link">
          <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            {/* We can add icons here later */}
            <span style={{ fontWeight: 'bold' }}>{link.name}</span>
          </a>
        </BentoItem>
      ))}
    </>
  );
};

export default SocialLinks;
