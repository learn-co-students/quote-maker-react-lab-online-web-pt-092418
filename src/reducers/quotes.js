import uuid from 'uuid';
import { ADD_QUOTE, REMOVE_QUOTE, UPVOTE_QUOTE, DOWNVOTE_QUOTE } from '../actions/quotes';
import { WSAVERNOTSUPPORTED } from 'constants';
const id = uuid();
console.log(id) // '1fd3234'

export default function manageQuotes(state = [], action) {
  switch (action.type){
    case ADD_QUOTE:
      return [...state, action.quote];
    case REMOVE_QUOTE:
      return state.filter(quote => quote.id !== action.quoteId);
    case UPVOTE_QUOTE:
      return state.map(quote => {
        if (quote.id === action.quoteId) {
          return {
            ...quote,
            votes: quote.votes + 1
          };
        } else {
          return quote;
        }
      });
    case DOWNVOTE_QUOTE:
        return state.map(quote => {
          if (quote.id === action.quoteId && quote.votes > 0) {
            return {
              ...quote,
              votes: quote.votes - 1
            };
          } else {
            return quote;
          }
        });
    default:
      return state;
  }
}
