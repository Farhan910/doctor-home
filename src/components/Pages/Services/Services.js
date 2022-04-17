import React from "react";
import useServices from "../../Hooks/Hooks";
import ServicesCard from "../../ServicesCard/ServicesCard";

const Services = () => {
    const [services] = useServices();
  return (
    <div>

<div className="services card-container container">
      {services.map((service) => (
       <ServicesCard key={service.id} service={service}/> 
      ))}
    </div>
      
    </div>
  );
};

export default Services;
