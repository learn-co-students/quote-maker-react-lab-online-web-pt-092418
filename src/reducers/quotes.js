export default (state = [], action) => {
  switch(action.type) {

    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      return state.filter(quote => action.quoteId !== quote.id)

    case 'UPVOTE_QUOTE':
      let index = state.findIndex(quote => action.quoteId === quote.id)
      let quote = state[index]
      return [...state.slice(0, index), {...quote, votes: (quote.votes + 1)}, ...state.slice(index+1)]

    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => action.quoteId === quote.id)
      quote = state[index]

      if (quote.votes === 0) {
        return state;
      } else {

        return [...state.slice(0, index), {...quote, votes: (quote.votes - 1)}, ...state.slice(index+1)]

      }

    default:
      return state;
  }
}
