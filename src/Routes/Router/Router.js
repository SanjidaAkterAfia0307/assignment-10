import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../components/Home/Home"
import Courses from "../../components/Courses/Courses"
import Blog from "../../components/Blog/Blog";
import LogIn from "../../components/LogIn/LogIn";
import Register from "../../components/Register/Register";
import CourseCardDetails from "../../components/CourseCardDetails/CourseCardDetails";
import Checkout from "../../components/Checkout/Checkout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import FAQ from "../../components/FAQ/FAQ";


export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/courses",
                element:<Courses></Courses>,
                loader:()=>fetch(`https://assignment-10-server-sanjidaakterafia0307.vercel.app/courses`)
            },
            {
                path:"/courses/:id",
                element:<CourseCardDetails></CourseCardDetails>,
                loader:({params})=>fetch(`https://assignment-10-server-sanjidaakterafia0307.vercel.app/courses/${params.id}`)
            },
            {
                path:"/courses/checkout/:id",
                element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader:({params})=>fetch(`https://assignment-10-server-sanjidaakterafia0307.vercel.app/courses/checkout/${params.id}`)
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"/faq",
                element:<FAQ></FAQ>
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