import React, { useState, useEffect } from 'react';

const ScrollingPanel = ({ data }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scrolling-panel">
      {data.map((item, index) => (
        <div
          key={index}
          className={`panel-item ${index === 0 ? 'visible' : ''}`}
          style={{
            opacity: 1 - Math.abs(scrollPosition - index * window.innerHeight) / window.innerHeight,
          }}
        >
          {/* Render your content here, for example: */}
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ScrollingPanel;
