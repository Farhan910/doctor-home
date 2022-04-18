import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import banner from "../../../../src/components/Images/banner.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div >
      <Banner />
      <h2 className="main-text container">Services</h2>

      <div className="banner-container container ">
        <div className="service-first-part text-service-first">
          <h3 className="text-service">
            Our services for <br /> dear patients
          </h3>
          <h4 className="mt-3">Our service is running for 24/7</h4>
          <p>
            {" "}
            Great experience! Made a same day appointment on Jatrabari clinic and
            got in right away. <br /> The front desk staff and the medical
            assistant were very nice and helpful. <br /> Dr. Muhammad Ibrahim was great,
            gave realistic expectations and timelines.
          </p>
        </div>
        <div className="service-first-image">
          <img className="  image-container" src={banner} alt="banner" />
        </div>
      </div>
      <div className="home-service">
        <Services />
      </div>
    </div>
  );
};

export default Home;
