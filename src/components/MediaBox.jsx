import React from 'react';
import BentoItem from './BentoItem';

const MediaBox = ({ type = 'image', src, title, colSpan = 1, rowSpan = 1 }) => {
  return (
    <BentoItem colSpan={colSpan} rowSpan={rowSpan} className="media-box">
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#333' }}>
        {/* Placeholder content */}
        <span>{title || 'Media Content'}</span>
      </div>
    </BentoItem>
  );
};

export default MediaBox;
