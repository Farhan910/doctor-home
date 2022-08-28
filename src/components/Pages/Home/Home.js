import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import banner from "../../../../src/components/Images/banner.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner />
      <h2 className="main-text container">Services</h2>
      <aside class="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center bg-gray-50">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="">
           
            <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Our services for <br /> dear patients
          </h3>

            <p>
              {" "}
              Great experience! Made a same day appointment on Jatrabari clinic
              and got in right away.The front desk staff and the medical
              assistant were very nice and helpful.  Dr. Muhammad Ibrahim
              was great, gave realistic expectations and timelines.
            </p>

            <div class="mt-4 md:mt-8">
              <a
                href="#"
                class="inline-block px-12 py-3 text-sm font-medium text-white transition rounded bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>

        <img
          alt="#"
          src={banner}
          class="object-cover w-full h-full sm:h-[calc(100%_-_2rem)] md:h-[calc(100%_-_4rem)] sm:rounded-tl-[30px] md:rounded-tl-[60px] sm:self-end"
        />
      </aside>
        <div className="home-service">
        <Services />
      </div>

      {/* <div className="banner-container container ">
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
      </div> */}
    </div>
  );
};

export default Home;
