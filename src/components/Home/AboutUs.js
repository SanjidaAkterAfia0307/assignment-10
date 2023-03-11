import React from 'react';
import { GiBookshelf } from "react-icons/gi";
const AboutUs = () => {
    return (
        <div className='text-center my-24 rounded-xl w-full '>
                <div className='flex items-center justify-center'>
                    
                        <GiBookshelf className="w-32 h-32  text-primary"></GiBookshelf>
                    
                    <h2 className='text-5xl ml-5 font-bold'>About Us</h2>
                </div>
                <div className='lg:w-1/2 mx-auto my-8 text-justify'>
                    <p className='text-xl  '>Welcome to our website,learners! We are providing you with the top most skills that rulling the world.Here is the change to restart your career once again with new resolutions.Our team is dedicated to build up your career with your preferable skills.</p>
                </div>
            </div>
    );
};

export default AboutUs;