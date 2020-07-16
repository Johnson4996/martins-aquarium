export const quoteHTML = (quote) =>{
    return `
    <section class="quote">
    <div class="quote__text"><em> ${quote.quoteStr}</em></div>
    <div class="quote__author">-${quote.author}</div>
    </section>
    
    `
}