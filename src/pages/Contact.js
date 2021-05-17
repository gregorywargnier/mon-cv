import React from 'react';
import Nav from "../components/Nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt, faMobileAlt, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
import {faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";



const handleTelClick= () => alert("téléphone copiée !");
const handleMailClick = () => alert("email copié !")

const Contact = () => {
    return (
        <div className="contact">
            <Nav/>
                <div className="contactContent">
                    <div className="contactBox">
                        <h1>Contactez-moi</h1>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <span>Lille</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faMobileAlt} />
                                <CopyToClipboard text="0675656510" >
                                    <span className="clickInput" onClick={handleTelClick}>
                                        06 75 65 65 10
                                    </span>
                                </CopyToClipboard>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <CopyToClipboard text="greg@exemple.com" >
                                    <span className="clickInput" onClick={handleMailClick}>
                                        greg@exemple.com
                                    </span>
                                </CopyToClipboard>
                            </li>
                        </ul>
                    </div>
                   <div className="socialNetwork">
                       <ul>
                           <li>
                               <a href="https://fr.linkedin.com" target="_blank" rel="noopener noreferrer">
                                   <h4>Linkedin</h4>
                                   <FontAwesomeIcon icon={faLinkedin} />
                               </a>
                           </li>
                           <li>
                               <a href="https://fr.linkedin.com" target="_blank" rel="noopener noreferrer">
                                   <h4>Github</h4>
                                   <FontAwesomeIcon icon={faGithub} />
                               </a>
                           </li>
                           <li>
                               <a href="https://fr.linkedin.com" target="_blank" rel="noopener noreferrer">
                                   <h4>Twitter</h4>
                                   <FontAwesomeIcon icon={faTwitter} />
                               </a>
                           </li>
                       </ul>
                   </div>
                </div>
        </div>
    );
};

export default Contact;
