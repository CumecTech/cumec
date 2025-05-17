import React from 'react';
import ServicePage from './ServicePage';

const UI = () => {
const logoPath = '/assessts/MarbleCardImg.jpeg';
  const serviceData = {
    title: "Stone and Marble Solutions",
    description: "Expert craftsmanship in stone and marble solutions for your construction and design needs.",
    image: logoPath,
    details: [
      {
        title: "Premium Materials",
        content: "We source and work with the finest quality stone and marble materials from around the world, ensuring durability and aesthetic appeal for your projects."
      },
      {
        title: "Custom Solutions",
        content: "Our team of skilled craftsmen creates bespoke stone and marble solutions tailored to your specific requirements and design preferences."
      },
      {
        title: "Installation Excellence",
        content: "Professional installation services with attention to detail, ensuring perfect fit and finish for all stone and marble applications."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default UI; 