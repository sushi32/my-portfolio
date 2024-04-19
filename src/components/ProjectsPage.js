import React from 'react';
import '../components/css/ProjectsPage.css'; 

export default function ProjectsPage() {
    function handleClick(url){
        window.open(url, '_blank');
    }

    const Projects = [
        {
            title: 'Language Translator',
            description: 'Deep learning based project that translates text from one language to another using NLP Techniques', 
            link: 'https://github.com/SanjanaPrasad13/cse676_lang_translator',
        },
        {
            title: 'Telecom Customer Churn Data Product',
            description: 'It predicts whether the customer is willing to stay in the telecom service or not. Developed using mL Model', 
            // link: 'https://github.com/SanjanaPrasad13/chatbotv1',
            link: ' #',
        },
        {
            title: 'RAG Chatbot',
            description: 'It generates resume of the person based on the input fields and can be customized. Developed using React ', 
            link: '#', 
        },
    ];

    return (
        <div className='projects-container'>
            {Projects.map((project, index) => (
                <div key={index} className='project-card'>
                    <div className='project-content'>
                        <a href={project.link} target="_blank" className='project-title'>{project.title}</a>
                        <p>{project.description}</p>
                        <br></br>
                    </div>
                </div>
            ))}
        </div>
    );
}
