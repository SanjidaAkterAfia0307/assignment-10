import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import SideBar from '../SideBar/SideBar';

const Courses = () => {
    const courses = useLoaderData()
    console.log(courses)
    
    return (
        <div  className='flex flex-col lg:flex-row'>
            <div>

               <SideBar courses={courses}></SideBar>

            </div>
            <div className='grid grid-cols-2 lg:grid-cols-1 w-full'>
                {
                    courses.map((course)=> <CourseCard course={course} key={course.id}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default Courses;