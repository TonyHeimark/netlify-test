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
        technologies = ["React", "CSS3", "JavaScript", "Create-React-App"]
        gitUrl = "https://github.com/TonyHeimark/SpaceX-Microsite"
        projectUrl = "https://spacex-microsite.netlify.com/"
        styles = "project1 Project"
        title = "SpaceX Microsite"
        imgUrl = require("../images/x.png")
        text = "The task was to make a microsite for either SpaceX or NASA using their API. I chose to go with SpaceX and make a site for people to learn more about each individual launch. This is my first React project."
    } else if (props.item === 2){
        technologies = ["HTML5", "CSS3", "JavaScript"]
        gitUrl = "https://github.com/TonyHeimark/Workflow-Noroff-Frontend-Page"
        projectUrl = "https://tonyheimark-noroff-frontend-redesign.netlify.com/"
        styles = "project2 Project"
        title = "Front End Page"
        imgUrl = require("../images/noroff-logo.png")
        text = "This is one of my recent school projects. The task was to redesign the current Front-end page at the Noroff site. This was a group project where we put together a small agile team, worked in sprints and made good use of Git."
    } else if (props.item === 3){
        technologies = ["HTML5", "CSS3", "JavaScript"]
        gitUrl = "https://github.com/TonyHeimark/Semester-Project-UN-Students"
        projectUrl = "https://tonyheimark-semester-project.netlify.com/"
        styles = "project3 Project"
        title = "UN-Students"
        imgUrl = require("../images/peace.png")
        text = "This was my semester project for the first semester, Media was provided by UN-Students The task was to create a new website for the UN-Students Oslo to attract more students to their cause."
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