import React from 'react';
import ServicePage from './ServicePage';


const InteriorDesignPage = () => {
  const img = '/assessts/heroimg4.jpeg';
  const serviceData = {
    title: "Interior Design Solutions",
    description: "Transform your spaces with our innovative and functional interior design solutions.",
    image: img,
    details: [
      {
        title: "Space Planning",
        content: "Expert space planning and layout design to maximize functionality and aesthetic appeal of your interiors."
      },
      {
        title: "Custom Design",
        content: "Bespoke interior design solutions tailored to your unique style, preferences, and functional requirements."
      },
      {
        title: "Material Selection",
        content: "Carefully curated selection of materials, finishes, and furnishings to create harmonious and durable spaces."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default InteriorDesignPage; 