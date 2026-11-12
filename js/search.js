import { afficheChaine } from "./ui.js";

const recherche = document.getElementById("searchInput");
const liste= document.getElementById("channelsList");
export function initRecherche(chaines){
recherche.addEventListener("input",()=>{
    const valeurChercher = recherche.value.toLowerCase().trim();
    const chainFiltrer = chaines.filter((chaine) => {
        return chaine.name.toLowerCase().includes(valeurChercher) || chaine.channelNumber.toString().includes(valeurChercher);
    });
    afficheChaine(chainFiltrer);

})}