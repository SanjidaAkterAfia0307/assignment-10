import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import background1 from "../../img/main.jpg"
const Home = () => {


  
    return (
        <div className='lg:flex text-center lg:text-left justify-around pt-36 items-center '>
            <img className=' w-fit lg:pl-20' src={background1} alt="" />
            <div className='w-2/4 mx-auto lg:w-full'>
                <h2 className='text-3xl font-bold p-3'>Welcome To Our Quick Jump !</h2>
                <p className='font-serif p-3 my-3'>We are here to guide you to a quick tour of programming learning.Let's learn and jump over an another chapter of life</p>
                <Link to="/courses" className='bg-indigo-600 text-white px-10 py-3 rounded-2xl m-3'>Get Started </Link>
            </div>

        </div>
    );
};

export default Home;