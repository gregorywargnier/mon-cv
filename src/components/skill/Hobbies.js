import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDesktop, faGlobeEurope, faFutbol} from "@fortawesome/free-solid-svg-icons";
const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérèts</h3>
            <ul>
                <li className="hobby">
                    <FontAwesomeIcon icon={faFutbol} />
                    <span>Badminton</span>
                </li>
                <li className="hobby">
                    <FontAwesomeIcon icon={faGlobeEurope} />
                    <span>Voyages</span>
                </li>
                <li className="hobby">
                    <FontAwesomeIcon icon={faDesktop} />
                    <span>Veille informatique</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;
