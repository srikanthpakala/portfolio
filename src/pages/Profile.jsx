import React, { useState } from "react";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Contact from "../pages/Contact";

const Profile = () => {
    const [tab, setTab] = useState("about");

    return (
        <div className="profile-container">
            <h1 className="profile-title">Srikanth Pakala</h1>

            <ul className="profile-tabs">
                <li>
                    <button className={tab === "about" ? "active" : ""} onClick={() => setTab("about")}>About</button>
                </li>
                <li>
                    <button className={tab === "skills" ? "active" : ""} onClick={() => setTab("skills")}>Skills</button>
                </li>
                <li>
                    <button className={tab === "projects" ? "active" : ""} onClick={() => setTab("projects")}>Projects</button>
                </li>
                <li>
                    <button className={tab === "experience" ? "active" : ""} onClick={() => setTab("experience")}>Experience</button>
                </li>
                <li>
                    <button className={tab === "education" ? "active" : ""} onClick={() => setTab("education")}>Education</button>
                </li>
                <li>
                    <button className={tab === "contact" ? "active" : ""} onClick={() => setTab("contact")}>Contact</button>
                </li>
            </ul>

            <div className="profile-content">
                {tab === "about" && <About />}
                {tab === "skills" && <Skills />}
                {tab === "projects" && <Projects />}
                {tab === "experience" && <Experience />}
                {tab === "education" && <Education />}
                {tab === "contact" && <Contact />}
            </div>
        </div>
    );
};

export default Profile;
