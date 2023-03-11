import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import background1 from "../../img/main.jpg"
import AboutUs from './AboutUs';
import Contact from './Contact';
import HomeBanner from './HomeBanner';
import Offer from './Offer';
const Home = () => {


  
    return (
        <div className='px-16'>
           <HomeBanner/>
            <AboutUs/>
            <Offer/>
            <Contact/>
        </div>
    );
};

export default Home;