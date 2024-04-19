import React from "react";
import resume from './resume.pdf';
import '../components/css/HomePage.css'

export default function HomePage() {
    return(
        
        <>
        <div className="home-page-container">
            <p className="resume-paragraph">
              <h2>Little more about me!!</h2>
                As a Software Developer, Front-End Web Developer, and an aspiring Data Analyst, 
                my professional trajectory has been diverse. Beyond the world of zeros and ones, 
                I love to draw. Music and dance keep my world happy :)

                When I'm not grooving to a beat or getting lost in a melody, 
                you'll find me experimenting with vibrant vegan flavors in my kitchen or 
                sketching my next masterpiece :D
              <br></br>
              Feel free to download my resume to see my professional work or contact me to chat more.
            </p>
            <br></br>
            <a href={resume} className="download-btn" download="Sushanth_Grandhi_Resume.pdf">
                Download Resume
            </a>
        </div>
        </>
    )
} 