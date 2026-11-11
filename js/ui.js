const channelsList = document.getElementById("channelsList");
export function afficheChaine(chaines){
    chaines.forEach((e) => {
        const channelElement = document.createElement("div");
        channelElement.className = "grid grid-cols-[32px_38px_minmax(0,1fr)] items-center gap-2 rounded-lg bg-[#9333EA] p-3 text-white";
        channelElement.innerHTML = `<img src="${e.logo}" alt="${e.name}" class="h-8 w-8 object-contain">
                                    <span>${e.channelNumber}</span>
                                    <div class ="min-w-0">
                                    <p class="truncate text-sm">${e.name}</p>
                                    <p class = "whitespace-nowrap text-[10px]">${e.category}</p>
                                    </div>`;
        channelsList.appendChild(channelElement);
    });
}
