import React from 'react';
import Nav from "../components/Nav";

const Home = () => {
    return (
        <div className="home">
            <Nav/>
            <div className="homeContent">
                <div className="content">
                    <h1> Gregory Wargnier</h1>
                    <h2>Développeur front-end</h2>
                    <div className="pdf">
                        <a href="./cv/cvGreg.pdf" target="_blank">Télécharger le cv</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
