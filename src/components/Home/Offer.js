import React from 'react';
import offer from '../../img/4.webp';
const Offer = () => {
    return (
        <div className='md:flex gap-8 my-24  mb-20'>
            <div >
                <img src={offer} className="pl-12 rounded-2xl " alt="" />
            </div>
            <div >
                <h3 className='text-4xl font-bold pb-6 text-primary'>Get 50% off!</h3>
                <div className='w-3/4'>
                <p className='text-lg'>Today, we are offering 50% discount on every courses.If you don't wanna miss the chance, just pick your phone and learn the skill!</p>
                </div>
                <div className='my-16'>
                    <button className='btn bg-primary border-none text-white '>Get The Offer</button>
                </div>
            </div>
        </div>
    );
};

export default Offer;