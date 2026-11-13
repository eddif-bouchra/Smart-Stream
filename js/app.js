
import { afficheChaine } from "./ui.js";
import { initRecherche } from "./search.js";
import { afficheCountrys } from "./ui.js";

export async function getChannels() {
    const response = await fetch("https://6af34a76d2377d6c3704d720.mockapi.io/channals");

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    console.log(data);
    return data;
}


async function init() {
    try {
        const chaines = await getChannels();
        const countries = [...new Set(chaines.map((e) => e.country))];
        document.getElementById("nbrChaine").textContent = chaines.length;

        afficheChaine(chaines);
        initRecherche(chaines);
        afficheCountrys(countries);
    } catch (erreur) {
        console.log("Erreur :", erreur);
    }
}

init();


