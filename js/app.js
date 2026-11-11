import { afficheChaine } from "./ui.js";
export  async function getChannels(){
    const response = await fetch('https://6af34a76d2377d6c3704d720.mockapi.io/channals');
    
    if(!response.ok){
        throw new Error('Failed to fetch data')
    }
    const data = await response.json();
    return data[0].channels;
}
async function init() {
    const chaines = await getChannels();
    document.getElementById("nbrChaine").textContent = chaines.length;
    afficheChaine(chaines);
}

init();