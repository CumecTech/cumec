'use client';
import ServicePage from './ServicePage';;

const UI = () => {
  const img = '/assessts/heroimg2.jpeg';
  const serviceData = {
    title: "Civil Planning Solutions",
    description: "Comprehensive civil planning and infrastructure development services for modern cities and communities.",
    image: img,
    details: [
      {
        title: "Urban Development",
        content: "Expert planning and design of urban spaces, ensuring sustainable growth and efficient land use for future generations."
      },
      {
        title: "Infrastructure Design",
        content: "State-of-the-art infrastructure planning including roads, bridges, and public utilities with a focus on sustainability and resilience."
      },
      {
        title: "Environmental Integration",
        content: "Eco-friendly civil planning solutions that harmonize development with natural surroundings and minimize environmental impact."
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default UI; 