import React from 'react';

export default (props) => {
    let title
    let text
    let imgUrl
    let styles
    let gitUrl
    let projectUrl 
    let technologies = []

    if (props.item === 1){
        technologies = ["HTML5", "CSS3", "JavaScript"]
        gitUrl = "#"
        projectUrl = "#"
        styles = "project1 Project"
        title = "Re-Cycle"
        imgUrl = require("../images/biker.png")
        text = "This is one of my most recent school projects. The task was to create a simple website for an imaginary company named Re-Cycle that offered guided cycling tours in and around a town of choice."
    } else if (props.item === 2){
        technologies = ["HTML5", "CSS3"]
        gitUrl = "#"
        projectUrl = "#"
        styles = "project2 Project"
        title = "Nice Cream"
        imgUrl = require("../images/ice-cream.png")
        text = "This is one of my recent school projects. The task was to make a simple website for an imaginary ice cream company named Nice Cream with Home and Order as the only pages."
    } else if (props.item === 3){
        technologies = ["HTML5", "CSS3", "JavaScript"]
        gitUrl = "#"
        projectUrl = "#"
        styles = "project3 Project"
        title = "UN-Students"
        imgUrl = require("../images/peace.png")
        text = "This is the project I'm currently working on as my semester project. The task is to create a new website for the UN-Students Oslo to attract more students to their cause."
    }

  return (
    <div className={styles}>
        <div className="project-text">
            <h2>{title}</h2>
            <p>{text}</p>
            <ul>
                {technologies.map((tech) =>{
                    return tech ? <li key={tech} className="project-tech">{tech}</li> : undefined
                })}
            </ul>
            <button
                className={props.ctaStyle}
            >
                <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                ><i class="far fa-eye"></i>View Project</a>
            </button>
            <button
                className={props.ctaStyle}
            >
                <a
                    href={gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                ><i class="fab fa-github"></i>View Code
                </a>
            </button>
        </div>
        <div className="project-img-container">
            <img src={imgUrl} alt="Project"/>
        </div>
    </div>
  );
}