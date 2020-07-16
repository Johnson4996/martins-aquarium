//This renders individual fish as HTML code



export const Fish = (fish) => {
    return `
    <section class="fish">
                <div><img class="fish__image"src=${fish.image} alt="stingray"></div>
             <div class="fishInfo">
                <div class="fish__name"><b>Name:</b> ${fish.name}</div>
                <div class="fish__type"><b>Type:</b> ${fish.type}</div>
                <div class="fish__size"><b>Size:</b> ${fish.size}</div>
                <div class="fish__location"><b>Location:</b> ${fish.location}</div>
                <div class="fish__food"><b>Diet:</b> ${fish.diet}</div>
            </div>
            </section>
    `
}