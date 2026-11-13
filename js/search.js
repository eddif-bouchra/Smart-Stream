import { afficheChaine } from "./ui.js";

const recherche = document.getElementById("searchInput");
const countrySelect = document.getElementById("countrySelect");
export function initRecherche(chaines){

    function filtrerChaines(){
    const valeurChercher = recherche.value.toLowerCase().trim();
    const chainFiltrer = chaines.filter((chaine) => {

        const rechercheOk = chaine.name.toLowerCase().includes(valeurChercher) || chaine.channelNumber.toString().includes(valeurChercher);
        const paysOk = countrySelect.value === "All" || chaine.country === countrySelect.value;
        return rechercheOk && paysOk;
    });
    afficheChaine(chainFiltrer);
    }
    recherche.addEventListener("input",filtrerChaines);
    countrySelect.addEventListener("change", filtrerChaines);

}