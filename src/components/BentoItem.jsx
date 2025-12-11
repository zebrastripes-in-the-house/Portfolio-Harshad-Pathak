import React from 'react';

const BentoItem = ({ children, className = '', colSpan = 1, rowSpan = 1, src, alt = '', href }) => {
  const spanClasses = `col-span-${colSpan} row-span-${rowSpan}`;
  const combinedClasses = `bento-item ${spanClasses} ${className}`;

  const content = src ? (
    <img src={src} alt={alt} loading="lazy" />
  ) : (
    children
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <div className={combinedClasses}>
      {content}
    </div>
  );
};

export default BentoItem;
