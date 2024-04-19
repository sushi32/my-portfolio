import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../components/css/Hero.css';

export default function Hero() {
  const phrases = [
    'Machine Learning Enthusiast',
    'Full Stack Web Developer',
    'Software Engineer',
  ];

  const [index, setIndex] = useState(0); // Current phrase index
  const [subIndex, setSubIndex] = useState(0); // Current letter index within the phrase
  const [reverse, setReverse] = useState(false); // State to manage reverse typing for deleting
  const [blink, setBlink] = useState(true); //for the typing effect

  
  useEffect(() => {
    if (index >= phrases.length) {
      return; 
    }

    
    if (subIndex === phrases[index].length + 1 && !reverse) {
      // Start deleting after a pause
      setTimeout(() => setReverse(true), 1000);
    } else if (subIndex === 0 && reverse) {
      // Move to the next phrase after deleting
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
    }

    // Typing effect interval
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, phrases.length]);

  let navigate = useNavigate();

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink(prev => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <div className="hero-container">
      <h1>Hey, I'm Sushanth Grandhi</h1>
      <p> It's all about making things scalable, responsive and user-friendly!
           <br></br>
           <br></br>
           <br></br>
        I'm a <span className="typed-text">{`${phrases[index].substring(0, subIndex)}${blink ? "|" : " "}`}</span><span className="cursor"></span>
      </p>
      <button className="btn-primary" onClick={() => navigate('/contact')}>Get in touch</button>
    </div>
  );
}