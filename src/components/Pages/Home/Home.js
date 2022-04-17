import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <Banner />
            <h2 className="main-text">Services</h2>
            <div className="home-service">
                <Services />
            </div>
            
           
        </div>
    );
};

export default Home;