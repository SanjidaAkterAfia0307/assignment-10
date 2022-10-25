import React from 'react';
import { useLocation } from 'react-router-dom';
import background1 from "../../img/background1.jpg"
const Home = () => {


    const styles = {
        background: {
            backgroundImage: `url(${background1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
            minHeight: "350px"
        }
    }
    return (
        <div style={styles.background}>


        </div>
    );
};

export default Home;