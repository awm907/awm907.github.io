import React from "react";
import './Page.css';
import image from '../bg.jpg'

function Contact(){
    return (
        <div style={{backgroundImage: 'url('+image+')', backgroundSize:"cover", height: "100vh"}} className="page">
            <div className="header"> I am Available At </div>
            <div className="sz">awm907@gmail.com</div>
            <div className="text">
            <a className="con" href="https://www.linkedin.com/in/abdul-wahab-malik-8bb67621b/">LinkedIn</a>
            </div>
            <a className="con" href="https://github.com/awm907">Github</a>
   
        </div>
  
    )
}

export default Contact;
