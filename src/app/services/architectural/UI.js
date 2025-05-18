import React from 'react';
import ServicePage from './ServicePage';

const UI = () => {
  const img = '/assessts/heroimg6.jpeg';
  const serviceData = {
    title: "Architectural Support",
    description: "we provide design concept to building and prepare structural, architectural and landscape drawings for residential, commercial, office spaces, shops, warehouses etc.",
    image: img,
    details: [
      {
        title: "Design Development",
        content: "Expert architectural design development and refinement to create functional and aesthetically pleasing structures."
      },
      {
        title: "Technical Documentation",
        content: "Detailed technical documentation and drawings ensuring accurate implementation of architectural designs."
      },
      {
        title: "Building Information Modeling",
        content: "Advanced BIM services for efficient project coordination, visualization, and construction planning."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default UI; 