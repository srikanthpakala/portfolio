import React from "react";


const experienceData = [
    {
        company: "Infosys pvt ltd",
        role: "Senior System Engineer",
        duration: "Oct 2024 - Present",
        description: [
            "Developed and maintained frontend applications using React.js.",
            "Implemented RESTful APIs and improved performance optimization.",
            "Collaborated with UX/UI designers to enhance user experience.",
        ],
    },
    {
        company: "Infosys pvt ltd",
        role: "System Engineer",
        duration: "Feb 2022 - Sep 2024",
        description: [
            "Built responsive web applications with HTML, CSS, JavaScript, and React.",
            "Integrated third-party APIs and optimized application performance.",
            "Worked closely with backend teams for seamless data communication.",
        ],
    },
];

const Experience = () => {
    return (
        <div className="experience-container">
            <h2 className="title">Work Experience</h2>
            <ul className="experience-list">
                {experienceData.map((exp, index) => (
                    <li key={index} className="experience-item">
                        <h3>{exp.role} at {exp.company}</h3>
                        <p className="duration">{exp.duration}</p>
                        <ul className="description-list">
                            {exp.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;
