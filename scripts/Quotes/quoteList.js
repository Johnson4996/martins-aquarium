import {useQuotes} from "./quoteDataProvider.js"
import {quoteHTML} from "./quoteToHTML.js"

export const quoteList = () =>{

    const element = document.querySelector(".content--left")
    const quotes = useQuotes()


    let quoteHTMLRep = ""
    for(const quote of quotes){
        quoteHTMLRep += quoteHTML(quote)
    }

    element.innerHTML +=`
    <article class="quotes">
           ${quoteHTMLRep}
        </article> 
    `
}