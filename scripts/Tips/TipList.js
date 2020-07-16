import { useTips } from "./TipDataProvider.js"
import {Tip} from "./TipToHTML.js"

export const TipList = () => {
    const contentElement = document.querySelector(".tip__section")
    const tips = useTips()

let tipHTMLRepresentations = ""
for (const tip of tips){
    tipHTMLRepresentations += Tip(tip)
    }


contentElement.innerHTML += 
`
<ul class="tip__list">
    ${tipHTMLRepresentations}
 </ul>
 `
}
