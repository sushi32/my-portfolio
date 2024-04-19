import React, { useRef } from 'react';
// import useSmoothScroll from '../components/useSmoothScroll';
import '../components/css/AboutPage.css';

export default function AboutPage() {
  // const myRef = useRef(null);
  // useSmoothScroll(myRef); 
  return (
    <div className="about-container">
      <section className="education">
        <h2>Education</h2>
        <p>University at Buffalo (Aug 2022 - Jan 2024) - Masters in Computer Science with specialization in Artificial Intelligence and Machine Learning</p>
        <p>National Institute of Technology, Patna (July 2016 - May 2020) - Bachelor's in Information Technology</p>
      </section>

      <section className="achievements">
        <h2>Achievements</h2>
        
          <p>Volunteered to teach Maths, Physics and Chemistry for underprivilaged children at a local summer camp.</p>
          
        
      </section>

    </div>
  );
};