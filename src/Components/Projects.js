import React from "react";
import './Page.css';
import image from '../bg.jpg'


function Projects(){
    return (
        <div style={{backgroundImage: 'url('+image+')', backgroundSize:"cover", height: "100vh"}} className="page">
            Testing Projects Page!!!
        </div>
    )
}

export default Projects;
