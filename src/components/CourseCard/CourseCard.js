import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    console.log(course)
    const {id,title,details,img}=course
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl grid grid-cols-4 w-3/4 h-72 mx-auto m-10">
            <figure><img className='h-full rounded-l-xl' src={img} alt="Movie" /></figure>
            <div className="card-body p-4 col-span-3">
                <h2 className="card-title text-3xl font-bold pb-3">Introduction With {title}</h2>
                <p>{
                details.length > 250 ?
                    <>{details.slice(0,250)+"..."}<Link to={`http://localhost:5000/courses/${id}`} className="text-blue-700 hover:text-sky-400">Learn More</Link></>
                    :
                    details
                }</p>
            
            </div>
        </div>
    );
};

export default CourseCard;