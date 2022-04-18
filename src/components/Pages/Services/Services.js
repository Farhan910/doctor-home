import React from "react";
import useServices from "../../Hooks/Hooks";
import ServicesCard from "../../ServicesCard/ServicesCard";
import "./Services.css";

const Services = () => {
  const [services] = useServices();
  return (
    <div >
      <div className="services card-container container gap-5 ">
        {services.map((service) => (
          <ServicesCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
