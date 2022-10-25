import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../components/Home/Home"
import Courses from "../../components/Courses/Courses"
import Blog from "../../components/Blog/Blog";
import LogIn from "../../components/LogIn/LogIn";
import Register from "../../components/Register/Register";
import CourseCardDetails from "../../components/CourseCardDetails/CourseCardDetails";


export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/courses",
                element:<Courses></Courses>,
                loader:()=>fetch(`http://localhost:5000/courses`)
            },
            {
                path:"/courses/:id",
                element:<CourseCardDetails></CourseCardDetails>,
                loader:({params})=>fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"/login",
                element:<LogIn></LogIn>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
        ]
    }
])