import React from "react";

const skillsData = {
    frontend: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js"],
    backend: ["ServiceNow (Basic)", "C# (Basic)", "Asp .NET (Basic)"],
    database: ["MongoDB", "SQL"],
    tools: ["Git", "VS Code", "Sql Server", "ServiceNow", "Jira"],
};

const Skills = () => {
    return (
        <div className="skills-container">
            <h2 className="title">Skills</h2>
            <div className="skills-list">
                {Object.entries(skillsData).map(([category, skills]) => (
                    <div key={category} className="skills-category">
                        <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                        <ul>
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
