import React from "react";
import './Page.css';
import image from "../abdul-wahab.png";
import bg from "../bg.jpg"

function Home(){
    return (
        <div style={{backgroundImage: 'url('+bg+')', backgroundSize:"cover", height: "100vh"}} className="page">
            
            <img src={image} className= "pic"/>
            <div className='head1'>Abdul Wahab Malik</div>
            <div className="zoom">Welcome to My Portfolio!</div>
        </div>
    )
}

export default Home;
