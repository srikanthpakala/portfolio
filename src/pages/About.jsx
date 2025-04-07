import React from "react";

const About = () => {
    const aboutDetails = [
        "I have expertise in frontend technologies like HTML, CSS, Bootstrap, JavaScript, and React.js.",
        "I have basic knowledge of ServiceNow technologies.",
        "I'm familiar with MongoDB and SQL.",
        "I have total 3.3 years of experience in Infosys.",
        "When I’m not coding, I enjoy going to the gym, watching movies and exploring new technology trends.",
    ];

    return (
        <div className="about-container">
            <h2 className="title">About Me</h2>
            <ul>
                {aboutDetails.map((detail, index) => (
                    <li key={index} style={{ "--delay": `${index * 0.3}s` }}>
                        {detail}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default About;
