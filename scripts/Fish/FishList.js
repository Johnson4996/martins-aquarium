import { useFish } from "./FishDataProvider.js"
import {Fish} from "./Fish.js"

export const FishList = () => {

    //Get refrence to the "content left" element
    const contentElement = document.querySelector(".content--left")
    const fishes = useFish()


    let fishHTMLRepresentations = ""
    for(const fish of fishes){
        fishHTMLRepresentations +=  Fish(fish)
    }
 
    //Add to the existing HTML in the "content left" element

    contentElement.innerHTML += `
    <article class="fishList">
        ${fishHTMLRepresentations}
    </article>  
    `

}
