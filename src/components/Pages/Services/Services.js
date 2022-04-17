import React from "react";
import useServices from "../../Hooks/Hooks";
import ServicesCard from "../../ServicesCard/ServicesCard";
import banner from "../../../../src/components/Images/banner.png";
import "./Services.css";

const Services = () => {
  const [services] = useServices();
  return (
    <div >
      <div className="banner-container container">
        <div>
            
          <h3 className="text-service ">Our services for <br /> dear patients</h3>
          <h4 className="mt-3">Our service is running for 24/7</h4>
          <p> Great experience! Made a same day appointment on (Clinic name) and got in right away. <br/> The front desk staff and the medical assistant were very nice and helpful. <br/> Dr. (Name) was great, gave realistic expectations and timelines.</p>
        </div>
        <div>
          <img className="w-100 image-container" src={banner} alt="banner" />
        </div>
      </div>
      <div className="services card-container container gap-5 ">
        {services.map((service) => (
          <ServicesCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
