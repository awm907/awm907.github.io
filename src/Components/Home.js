import React from "react";
import './Page.css';
import image from "../abdul-wahab.png";

function Home(){
    return (
        <div className="page">
            
            <img src={image} className= "pic"/>
            <div className='head1'>Abdul Wahab Malik</div>
        </div>
    )
}

export default Home;
