//This renders individual fish as HTML code



export const Fish = (fish) => {
    return `
    <section class="fish_card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.type}</div>
            <div class="fish__length">${fish.size}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.diet}</div>
        </section>
    `
}