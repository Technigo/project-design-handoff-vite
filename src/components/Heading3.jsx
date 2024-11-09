import React from 'react';

const Heading3 = ({ children }) => {
  const style = {
    color: '#1C7D79',
    textAlign: 'center',
    fontFamily: 'Schoolbell, sans-serif',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '32px', // 88.889%
    letterSpacing: '-0.72px',
    padding: '0 16px'
  };

  return <h3 style={style}>{children}</h3>;
};

export default Heading3;
