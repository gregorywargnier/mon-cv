import React from 'react';
import Nav from "../components/Nav";
import Languages from "../components/skill/Languages";
import Experience from "../components/skill/Experience";
import OtherSkills from "../components/skill/OtherSkills";
import Hobbies from "../components/skill/Hobbies";

const Skills = () => {
    return (
        <div className="skills">
            <Nav/>
            <div className="skillsContent">
                <Languages/>
                <Experience/>
                <OtherSkills/>
                <Hobbies/>
            </div>
        </div>
    );
};

export default Skills;
