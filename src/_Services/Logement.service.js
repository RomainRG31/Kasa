/** Import des modules nécessaires */
import ListeLogements from "@/Assets/Api/logements.json";

// fonction récuperation de tous les logements.
let GetAllLogement = () => {
    return ListeLogements;
}

// fonction recupération d'un logement.
let GetOneLogement = async (id) => {
    const OneLogement = await ListeLogements.find(logement => logement.id === id);
    console.log(OneLogement)
    return OneLogement;
}

// export des fonctions pour les réutiliser dans les pages.
export const LogementService = {
    GetAllLogement,
    GetOneLogement
}


export default LogementService