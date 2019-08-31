// TODO: Create action creators as defined in tests
export const ADD_QUOTE = 'ADD_QUOTE';

// const addQuote = () => {
//     return {
//         type: 'ADD_QUOTE'
//     }
// }

export function addQuote(quote) {
    return {
        type: ADD_QUOTE,
        quote
    }
}
export const REMOVE_QUOTE = 'REMOVE_QUOTE';

export function removeQuote(quoteId){
    return {
        type: REMOVE_QUOTE, 
        quoteId
    }
}

export const UPVOTE_QUOTE = 'UPVOTE_QUOTE';

export function upvoteQuote(quoteId){
    return {
        type: UPVOTE_QUOTE, 
        quoteId
    }
}

export const DOWNVOTE_QUOTE = 'DOWNVOTE_QUOTE';

export function downvoteQuote(quoteId){
    return {
        type: DOWNVOTE_QUOTE,
        quoteId
    }
}