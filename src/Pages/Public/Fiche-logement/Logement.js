// import des modules necessaires
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import LogementService from "@/_Services/Logement.service.js"

import "@/Pages/Public/Fiche-logement/Logement.css";

import DropDown from "@/Components/DropDown/DropDown";
import Gallery from "@/Components/Gallery/Gallery";
import Profil from "@/Components/Profil/Profil";
import Tag from "@/Components/Tag/Tag";
import Stars from "@/Components/Stars/Stars";
// fonction de la page Logement
const Logement = () => {


    const [logement, setLogement] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    let { id } = useParams();


    useEffect(() => {

        getInfo();

    }, [])

    const getInfo = async () => {
        await LogementService.GetOneLogement(id)
            .then((data) => {
                setLogement(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const displayTags = (tags) => {
        if (tags) {
            return (
                <div className="tags_container">
                    {tags.map((tag, index) => {

                        return (
                            <Tag tag={tag} key={index} />
                        )
                    })}
                </div>
            )
        }

    }

    const displayEquipments = (equipments) => {
        if (equipments) {
            return (
                <ul>
                    {equipments.map((equipement, index) => {

                        return (
                            <li key={index}>
                                {equipement}
                            </li>
                        )
                    })}
                </ul>
            )
        }
    }


    if (isLoading) return (<h3>Chargement...</h3>)
    return (

        <section className="logement">
            <Gallery pictures={logement.pictures} />
            <div className="details_container">
                <div className="details_title_container">
                    <article className="title_container">
                        <h2 className="about_title">{logement.title}</h2>
                        <h3 className="about_subtitle">{logement.location}</h3>
                    </article>
                    {displayTags(logement.tags)}
                </div>
                <div className="details_profil_container">
                    <Profil host={logement.host} />
                    <Stars rating={logement.rating} />
                </div>
            </div>
            <div className="accordeon_container">
                <DropDown title={"Description"} description={logement.description}></DropDown>
                <DropDown title={"Équipements"} description={displayEquipments(logement.equipments)}></DropDown>
            </div>
        </section>

    );
};

// export de la page Logement pour l'appeler dans le router 

export default Logement;
