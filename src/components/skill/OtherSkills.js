import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheckSquare} from "@fortawesome/free-solid-svg-icons";

const OtherSkills = () => {
    return (
        <div className="otherSkills">
            <h3>Autres compétences</h3>
            <div className="list">
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faCheckSquare} />
                        <span>Anglais</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheckSquare} />
                        <span>Github</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheckSquare} />
                       <span> Methodes Agiles</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheckSquare} />
                        <span>UI/UX design</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheckSquare} />
                        <span>Opquast</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default OtherSkills;
