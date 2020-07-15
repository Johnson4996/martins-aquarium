const quoteList = [
    {
        quoteStr:'"If people concentrated on the really important things in life, there\'d be a shortage of fishing poles"',
        author: "Doug Larson"
    },
    {
        quoteStr:'"Fishing is much more than fish. It is the great occasion when we may return to the fine simplicity of our forefathers"',
        author: "Herbert Hoover"
    }

]

export const useQuotes = () =>{
    return quoteList.slice()
}