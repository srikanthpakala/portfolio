import React from "react";

const educationData = [
    {
        degree: "Bachelor of Technology",
        specialization: "Computer Science and Engineering",
        institution: "Avanthi Institute of Engineering and Technology",
        year: "2016 - 2021",
        // description: "Focused on frontend technologies, databases, and cloud computing.",
    },
    {
        degree: "Intermediate",
        specialization: "M.P.C",
        institution: "Sri Gayathri Junior College",
        year: "2014 - 2016",
        // description: "Strengthened fundamentals in Mathematics and Science.",
    },
    {
        degree: "SSC",
        institution: "Pragathi High School",
        year: "2013 - 2014",
    },
];

const Education = () => {
    return (
        <div className="education-container">
            <h2 className="title">Education</h2>
            <ul className="education-list">
                {educationData.map((edu, index) => (
                    <li key={index} className="education-item">
                        <h3 className="institution-heading">{edu.degree} {edu.specialization && `- ${edu.specialization}`}</h3>
                        <p className="institution-desc">{edu.institution} | {edu.year}</p>
                        {/* <p className="description">{edu.description}</p> */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Education;
