const channelsList = document.getElementById("channelsList");
const channelNumber = document.getElementById("channelNumber");
const channelCategory = document.getElementById("channelCategory");
const previewImage = document.getElementById("previewImage");
const channelTitle = document.getElementById("channelTitle");
const countrySelect = document.getElementById("countrySelect");

export function afficheChaine(chaines){
    channelsList.innerHTML = "";
    chaines.forEach((e) => {
        const channelElement = document.createElement("div");
        channelElement.className = "grid grid-cols-[32px_38px_minmax(0,1fr)] items-center gap-2 rounded-lg bg-white p-3 text-slate-900";
        channelElement.innerHTML = `<img src="${e.logo}" alt="${e.name}" class="h-8 w-8 object-contain">
                                    <span>${e.channelNumber}</span>
                                    <div class ="min-w-0">
                                    <p class="truncate text-sm">${e.name}</p>
                                    <p class = "whitespace-nowrap text-[10px]">${e.category}</p>
                                    </div>`;
        channelElement.addEventListener("click",function(){
            channelNumber.textContent=e.channelNumber;
            channelTitle.textContent=e.name;
            channelCategory.textContent=e.category;
            previewImage.src=e.previewImage;
            previewImage.classList.remove("hidden");
            document.querySelectorAll(".channel-active").forEach((element) => {
                element.classList.remove("channel-active" , "bg-purple-600","text-white");
                element.classList.add("bg-white" ,"text-slate-900");
            });
            channelElement.classList.remove("bg-white","text-slate-900");
            channelElement.classList.add("channel-active","bg-purple-600","text-white");
        })
        channelsList.appendChild(channelElement);
    });
};
const names = {
    FR: "France",
    MA: "Maroc",
    ES: "Espagne",
    GB: "Royaume-Uni"
};
console.log("Fonction afficheCountrys appelée");
export function afficheCountrys(country){
    countrySelect.innerHTML ="";
    const alloption =document.createElement("option");
    alloption.value = "All";
    alloption.textContent = "Tous les pays";
    countrySelect.appendChild(alloption);
    country.forEach((rajae) => {
        const optionElement = document.createElement("option");
        optionElement.value = rajae;
        optionElement.textContent=names[rajae] || rajae;
        countrySelect.appendChild(optionElement);
    });
     countrySelect.addEventListener("change",function() {
        countrySelect.value
         console.log(countrySelect.value)
        })
   
}