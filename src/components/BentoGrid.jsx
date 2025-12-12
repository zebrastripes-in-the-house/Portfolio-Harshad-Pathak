import React, { useEffect, useRef } from 'react';
import GlobalSpotlight from './GlobalSpotlight';
import './BentoGrid.css';

const BentoGrid = ({ children }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    const updateRowHeight = () => {
      if (gridRef.current) {
        // Get the computed style of the grid to find the column width
        const gridComputedStyle = window.getComputedStyle(gridRef.current);
        const gridTemplateColumns = gridComputedStyle.getPropertyValue('grid-template-columns');
        
        // grid-template-columns returns a string like "300px 300px 300px 300px"
        // We just need the width of the first column
        const firstColumnWidth = parseFloat(gridTemplateColumns.split(' ')[0]);

        if (!isNaN(firstColumnWidth)) {
          // Set the row height to match the column width (1:1 ratio)
          gridRef.current.style.setProperty('--bento-row-height', `${firstColumnWidth}px`);
        }
      }
    };

    // Initial calculation
    updateRowHeight();

    // Recalculate on resize
    window.addEventListener('resize', updateRowHeight);
    
    return () => {
      window.removeEventListener('resize', updateRowHeight);
    };
  }, []);

  return (
    <>
      <GlobalSpotlight gridRef={gridRef} />
      <div className="bento-grid bento-section" ref={gridRef}>
        {children}
      </div>
    </>
  );
};

export default BentoGrid;
