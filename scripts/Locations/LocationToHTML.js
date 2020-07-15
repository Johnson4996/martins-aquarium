export const locationHTML = (location) =>{
    return `
    <section class="location">
                <div><img class="location__image" src="${location.image}"></div>
                <div class="location__name">${location.name}</div>
                <div class="location__link">${location.link}</div>
                <div class="location__info">${location.desc}</div>
    </section>
    `
}