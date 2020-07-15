import {useLocations} from "./LocationsDataProvider.js"
import {locationHTML} from "./LocationToHTML.js"

export const locationList = () => {

const contentElement = document.querySelector(".content--left")
const locations = useLocations()


let locationHTMLrep = ""
for(const location of locations){
    locationHTMLrep += locationHTML(location)
}

contentElement.innerHTML += `
    <article class="locations">
        ${locationHTMLrep}
    </article>  
    `
}