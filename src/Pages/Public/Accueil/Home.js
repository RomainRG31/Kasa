// import des modules necessaires
import React from 'react';
import { NavLink } from 'react-router-dom';

import "@/Pages/Public/Accueil/Home.css";

import LogementService from "@/_Services/Logement.service.js"

import Hero from "@/Components/Hero/Hero";
import Card from "@/Components/Card/Card";

import HeroImg from "@/Assets/Images/Pages/Home/HeroAccueil.png";

// fonction de la page home
const Home = () => {

    return (
        <section className="home">
            <Hero image={HeroImg} texte="Chez vous, partout et ailleurs" />
            <ul className="liste-logements">
                {
                    LogementService.GetAllLogement().map((logement) =>
                        <NavLink key={logement.id} to={"/logement/" + logement.id + "/#"}>
                            <Card key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} />
                        </NavLink>
                    )
                }
            </ul>
        </section>
    );
};

// export de la page home pour l'appeler dans le router 
export default Home;
