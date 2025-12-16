import React from 'react';
import './Heading.css';

const Heading = ({ title }) => {
  return (
    <div className='heading-section'>
      <h2 data-title={title}> {title} </h2>     
    </div>
  );
};

export default Heading;