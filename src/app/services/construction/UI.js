import React from 'react';
import ServicePage from './ServicePage';

const UI = () => {
  const img = '/assessts/heroimg5.jpeg'
  const serviceData = {
    title: "Construction Management",
    description: "Professional construction management services ensuring quality, efficiency, and timely project completion.",
    image: img,
    details: [
      {
        title: "Project Planning",
        content: "Comprehensive project planning and scheduling to ensure efficient resource allocation and timely completion."
      },
      {
        title: "Quality Control",
        content: "Rigorous quality control measures and standards implementation throughout the construction process."
      },
      {
        title: "Cost Management",
        content: "Effective cost management and budget control to deliver projects within financial constraints without compromising quality."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default UI; 