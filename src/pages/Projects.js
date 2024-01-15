import React, { useState } from 'react';
import gitHubIcon from'../assets/github1.png';
import starIcon from'../assets/starIcon.png'

const ProjectDetails = ({ project }) => (
    <div className="project-details">
        <h4 id="projectName">{project.name}</h4>
        <a id="RepoIcons" href={project.repoLink} target="_blank">
            <img src={gitHubIcon} alt="GitHub Icon"/>GitHub Repo
        </a>
        <a id="RepoIcons" href={project.appLink} target="_blank">
            <img src={starIcon} alt="Star Icon"/>Deployed App
        </a>
        <p id="projectDescription">
            <strong>Purpose:</strong> {project.description}
        </p>
        <p id="techStack">
          <strong>Tech Stack:</strong> {project.techStack}
        </p>
    </div>
);

const Projects = () => {
    const projectDetails = [
        {
            name: "RatieMate: Movie Rater",
            description: "RatieMate is your go-to movie searching app, enabling easy exploration and rating of your favorite films. Sign in to curate your personalized list of beloved movies, allowing others to see your ratings and recommendations. Efficiently discover new must-watch movies while effortlessly keeping track of ones you've seen and loved. With RatieMate, finding and organizing your cinematic preferences has never been more enjoyable and accessible.",
            repoLink: "https://github.com/RatieMateCapstone",
            appLink: "https://frontend-ratiemate.onrender.com/",
            techStack: "React, Ruby on Rails, HTML, CSS, Yarn, Render",
        },
        {
            name: "Tic Tac Toe Game",
            description: "Tic-tac-toe is a simple, two-player game played on a 3x3 grid. Players take turns marking either an 'X' or an 'O' in empty squares. The goal is to get three of your marks in a row, either horizontally, vertically, or diagonally, before your opponent does.",
            repoLink: "https//github.com/tori-calkins/Tic-Tac-Toe",
            appLink: "https://tic-tac-toe-blnf.onrender.com/",
            techStack: "React, HTML, CSS, Yarn, Render",
        },
        {
            name: "Pig Latin: Translator",
            description: "Pig Latin is a language game where words are altered according to a set of rules. In Pig Latin, to translate a word into Pig Latin, you typically move the first consonant or consonant cluster of a word to the end of the word and add 'ay.' If a word starts with a vowel, you simply add 'way' or 'ay' at the end.",
            repoLink: "https://github.com/learn-academy-2023-foxtrot/pig-latin-the-crying-pigs",
            appLink: "https://pig-latin-crying-pigs.onrender.com/",
            techStack: "React, HTML, CSS, Yarn, Render",
        },
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="projects-container">
            <div className="sidenav">
                <h3 className="title">Choose a Project: </h3>
                {projectDetails.map((project, index) => (
                    <h4
                        key={index}
                        className="projects"
                        onClick={() => setSelectedProject(project)}
                    >
                        {project.name}
                    </h4>
                ))}
            </div>
            {selectedProject && (<ProjectDetails project={selectedProject} />
            )}
        </div>
    );
};

export default Projects;


