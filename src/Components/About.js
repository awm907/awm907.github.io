import React from "react";
import './Page.css';
import image from "../bg.jpg";


function About(){
    return (
        
        <div style={{backgroundImage: 'url('+image+')', backgroundSize:"cover", height: "100vh"}} className="page">
            <div className="header"><b>About Me</b></div>

        <div className="text">
           <p>I am a senior at Lehman College and doing B.S in Computer Science along with a minor in Mathematics.
            I am passionate about Web Development, Data Analyses and Computer Networking. I believe programming languages
            are as important as other languages in the world, to communicate with technology so to Develop this World. 
            It has been a great experience learning from my CMP 464 class instructed by Professor Cameron Flowers. <a href="https://www.ayocamo.com/" className='col'>Check Him Out</a>! 
            I was introduced to  new softwares and tools which really help in Web Development. I plan to work more on what I have learned and improvise my skills.</p>

        </div>      
        <div className="bottom">
            <b>Click to<a href="Resume -1" download="Abdul's Resume" className="col"> Download Resume</a></b>
       
        </div>  


         
         
        </div>

    )
}

export default About;
