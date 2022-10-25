import React from 'react';
import { FaStar, FaStarHalfAlt,FaArrowRight,FaUserTie,FaUserEdit,FaBook,FaComment,FaStackExchange,FaMoneyCheckAlt,FaSmile } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';


const CourseCardDetails = () => {
    const course = useLoaderData()
    console.log(course)
    const { id, title, details, img, teacher, rating,tutorials,students,view,cost } = course
    return (
        <div className='lg:p-64 p-6 pt-36  flex flex-col lg:flex-row justify-between '>
            <div className='w-full lg:w-3/5 mb-20 lg:mb-0'>
                <h1 className='text-5xl mb-12 text-slate-600 font-bold'>Welcome to our {title} course !</h1>

                <div className='flex flex-col md:flex-row  justify-between'>
                    <div className='flex mb-6  items-center'>
                        <img className='w-16 border-2 border-white mr-3 shadow-md h-16 rounded-full' src={teacher.photo} alt="" />
                        <div>
                            <h3 className='font-bold text-base text-gray-600'>Teacher</h3>
                            <h3 className='font-bold text-lg'>{teacher.name}</h3>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <h3 className='font-bold  text-base text-gray-600'>Last Published Date</h3>
                        <h3 className='font-bold text-lg'>{teacher.lastUpdate}</h3>
                    </div>
                    
                    <div className='mb-6'>
                        <h3 className='font-bold text-base text-gray-600'>Ratings</h3>
                        <div className='flex items-center'>
                        <FaStar className='text-yellow-400'></FaStar>
                        <FaStar className='text-yellow-400'></FaStar>
                        <FaStar className='text-yellow-400'></FaStar>
                        <FaStar className='text-yellow-400'></FaStar>
                        <FaStarHalfAlt className='text-yellow-400'></FaStarHalfAlt>
                        <p className='ml-2 font-semibold'>{rating}</p>
                    </div>
                    </div>
                </div>

                <div className='py-24'>
                    <img className='rounded-2xl my-10' src={img} alt="" />
                    <h2 className='text-3xl font-semibold my-5'>Course Overview</h2>
                    <p className='text-lg text-justify'>{details}</p>
                </div>

                <div>
                    <Link className='bg-yellow-400 py-3 px-8 md:px-12  rounded-xl text-white font-medium text-xl'>Get The Premium <FaArrowRight className='inline'></FaArrowRight></Link>
                </div>
            </div>



            <div className='shadow-xl p-6 lg:p-16 rounded-2xl h-fit lg:mt-56'>
                <h3 className='md:text-3xl text-center text-xl font-semibold mb-12 text-cyan-800'>More About The Course</h3>
                <p className="font-medium"><span className='font-bold text-sky-600'><FaComment className='inline mr-2'></FaComment> Course Name :</span> {title}</p>
                <div className="divider"></div> 
                <p className="font-medium"><span className='font-bold text-sky-600'><FaMoneyCheckAlt className='inline mr-2'></FaMoneyCheckAlt> Course Purchases :</span> {cost}</p>
                <div className="divider"></div> 
                <p className="font-medium"><span className='font-bold text-sky-600'><FaUserTie className='inline mr-2'></FaUserTie> Instructor :</span>  {teacher.name}</p>
                <div className="divider"></div> 
                <p className="font-medium"><span className='font-bold text-sky-600'><FaBook className='inline mr-2'></FaBook> Lectures:</span> {tutorials}</p>
                <div className="divider"></div> 
                <p className="font-medium"><span className='font-bold text-sky-600'><FaUserEdit className='inline mr-2'></FaUserEdit> Enrolled:</span> {students}</p>
                <div className="divider"></div> 
                <p className="font-medium"><span className='font-bold text-sky-600'><FaSmile className='inline mr-2'></FaSmile> Total View:</span>  {view}</p>
                <div className="divider"></div> 
                <p className="font-medium"><span className='font-bold text-sky-600'><FaStackExchange className='inline mr-2'></FaStackExchange> Last Updated:</span>  {teacher.lastUpdate}</p>
            </div>
        </div>
    );
};

export default CourseCardDetails;