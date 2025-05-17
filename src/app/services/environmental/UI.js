import React from 'react';
import ServicePage from './ServicePage';


const UI = () => {
  const img = '/assessts/heroimg3.jpeg';
  const serviceData = {
    title: "Environmental Solutions",
    description: "Innovative environmental solutions for sustainable development and ecological preservation.",
    image: img,
    details: [
      {
        title: "Environmental Impact Assessment",
        content: "Comprehensive assessment and analysis of environmental impacts for construction and development projects."
      },
      {
        title: "Sustainable Development",
        content: "Implementation of eco-friendly practices and technologies to minimize environmental footprint while maximizing efficiency."
      },
      {
        title: "Waste Management",
        content: "Advanced waste management solutions including recycling, treatment, and sustainable disposal methods."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default UI; 