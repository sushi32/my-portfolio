import React from 'react';
import '../components/css/Skills.css'; 
import { ReactComponent as CodingIcon } from '../components/icons/codingnew.svg';
import { ReactComponent as ProjectIcon } from '../components/icons/project.svg';
import { ReactComponent as CourseIcon } from '../components/icons/course.svg';
import { ReactComponent as ToolsIcon } from '../components/icons/tools.svg';
import { ReactComponent as CoresIcon } from '../components/icons/cores.svg';
import { ReactComponent as DevIcon } from '../components/icons/dev.svg';


const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        'Python/R', 'Java', 'C', 'JavaScript', 'TypeScript','Bash', 'Solidity', 'C++',
        'Oracle PL/SQL', 'HTML/CSS/JS', 'JSON',
      ],
      icon: <CodingIcon />, 
    },
    {
        title: 'Tools',
        skills: [
            'PySpark', 'AWS', 'Azure', 'BigData', 'Tableau', 
            'Angular', 'React', 'Node.js',  'Hadoop', 'Flutter', 'Figma', 'RESTful API',
        ],
        icon: <ToolsIcon />, 
    },
    {
        title: 'Core Competencies',
        skills: [
            'Statistical Modelling', 'Data Visualization', 'A/B Testing','Debugging',  'SDLC', 'Agile Working', 'Object Oriented Design',
             'Quality Assurance', 'Full Stack' ,
        ],
        icon: <CoresIcon />, 
    },
    {
        title: 'Project Management',
            skills: [
                'SCRUM', 'Maven', 'GitLab/GitHub', 'Jupyter Notebooks', 'Kanban', 'Presentation Skills',
                 'Team Leadership/Management', 'Cross-Team Communication', 'Great Sense of Humor'
            ],
            icon: <ProjectIcon />, 
    },
    {
        title: 'Development',
            skills: [
                'Linux','Windows', 'Virtual Machines', 'Kubernetes', 'Docker', 
                'Bootstrap', 'JSON', 'Generative AI', 'GPT', 'Blockchain', 
            ],
            icon: <DevIcon />, 
    },
    {
        title: 'Relevant Coursework',
            skills: [
                'Data Structures','Software Engineering in C++', 'Object Oriented Design','Computer Organization',
                'Systems Security','Machine Learning','Artificial Intelligence','Algorithms',
                'Data Mining','Blockchain',
            ],
            icon: <CourseIcon />, 
    },
  ];

  return (
    <div className="skills-container">
      {skillCategories.map((category, index) => (
        <div key={index} className="skill-card">
          <div className="skill-icon">{category.icon}</div>
          <div className="skill-content">
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
