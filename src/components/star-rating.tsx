import React from 'react';

const StarRating: React.FC<{ maxRating?: number }> = ({ maxRating = 10 }) => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  };

  const starContainerStyle = {
    display: 'flex',
    gap: '4px',
  };

  const textStyle = {
    lineHeight: '1',
    margin: '0',
  };
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>1</p>
    </div>
  );
};

export default StarRating;
