import React from "react";

const projectsData = [
    {
        title: "Portfolio Website",
        description: [
            "A personal portfolio website built with React.",
            "Showcases my skills and projects interactively.",
            "Includes GitHub and live demo links."
        ],
        roles: [
            "Designed UI/UX with a responsive layout.",
            "Developed using React, JavaScript, and CSS.",
            "Integrated GitHub projects dynamically."
        ],
        technologies: ["React", "JavaScript", "CSS", "HTML"],
        github: "https://srikanthpakala.github.io/portfolio",
    },
    {
        title: "Vendor Managed Inventory",
        description: [
            "Developed a dynamic Incident Form in ServiceNow to allow users to order products using Ship From Store (SFS) and Buy Online, Pick Up In Store (BOPIS) options.",
            "Automated the product ordering process through workflows for assignment, categorization, and priority handling.",
            "Enabled real- time email notifications to users upon successful form submission and database updates.",
            "Improved efficiency by reducing manual steps and streamlining request management."
        ],
        roles: [
            "Worked on the use case to automate enabling/disabling SFS and BOPIS options based on user input.",
            "Integrated logic to update the database with selected user preferences.",
            "then Update the Database with user preferences.",
            "Configured automated success email notifications after data processing.",
        ],
        technologies: ["JavaScript", "ServiceNow"],
    },
    {
        title: "Optima Enhancement",
        description: [
            "Automated application of planograms to target stores.",
            "Migrated space planning applications from Windows Server 2012 to 2016."
        ],
        roles: [
            "Developed Windows Service using .NET Framework 4.6.",
            "Created stored procedures and optimized database queries.",
            "Troubleshot application issues and provided fixes.",
            "Led testing in UAT and production, and prepared documentation.",
            "Deployed applications on Windows Server 2016."
        ],
        technologies: ["C#", ".NET Framework 4.6", "SQL", "Windows Services", "UAT Testing"],
    },
];


const Projects = () => {
    return (
        <div className="projects-container">
            <h2 className="title">Projects</h2>
            <div className="projects-list">
                {projectsData.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3 className="project-title">{project.title}</h3>

                        <p className="section-heading description">Description:</p>
                        <ul className="bullet-list">
                            {(Array.isArray(project.description) ? project.description : [project.description]).map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>


                        <p className="section-heading roles">Roles & Responsibilities:</p>
                        <ul className="bullet-list">
                            {project.roles.map((role, i) => (
                                <li key={i}>{role}</li>
                            ))}
                        </ul>

                        <p className="section-heading skills">Technologies:</p>
                        {/* <p className="project-tech"></p> */}
                        <ul className="bullet-list">
                            <li>{project.technologies.join(", ")}</li>
                        </ul>

                        <div className="project-links">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    GitHub Repo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
