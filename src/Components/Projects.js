import React from "react";
import './Page.css';
import image from '../bg.jpg'


function Projects(){
    return (
        <div style={{backgroundImage: 'url('+image+')', backgroundSize:"cover", height: "100vh"}} className="page">
            <div className="header">My Projects!</div>
            
            <div className="text">
                <a href="https://sites.google.com/view/datasetanalysis/home" className="con">Dataset Analysis</a>
            
                <div>This project analyses the leading cause of Deaths in NYC since 2007. Cause of death 
                    is derived from the NYC death certificate which is issued for every death occurs in NYC.
                    I used Rstudio in the implementaion of this Project. </div>
            </div>
            <div className="text">
                <a href="https://github.com/awm907/CPU_Scheduler" className='con'>CPU Scheduler</a>
                <div>It is a process scheduling alogrithm which uses FCFS and RR Alogrithms. It is compiled in Java.</div>
            </div>
            
            <div className="text">
                <a href="https://github.com/EricBuddy/design-pad" className="con">Design Pad</a>
                <div>Group Project: This project contains a design pad which can be used for designing by help 
                    of different colors and gifs. It was created using the React App.</div>
            </div>        
        </div>

    )
}

export default Projects;
