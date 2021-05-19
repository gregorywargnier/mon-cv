import React from 'react';
import {NavLink} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faMountain, faAddressBook} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter, faGithub} from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className= "profil">
                    <img src="./img/gregProfil.jpeg" alt="profil"/>
                        <h3>greg Wargnier</h3>
                </div>
            </div>
            <div className="link">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <FontAwesomeIcon icon={faHome} />
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Skills" activeClassName="navActive">
                            <FontAwesomeIcon icon={faMountain} />
                            <span>compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Contact" activeClassName="navActive">
                            <FontAwesomeIcon icon={faAddressBook} />
                            <span>contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://fr.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a href="https://fr.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li>
                        <a href="https://fr.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="copy">
                <p>from greg wargnier - 2020</p>
            </div>
        </div>
    );
};

export default Nav;
