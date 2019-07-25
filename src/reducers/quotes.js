export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
    console.log(action.quote)
    debugger
     return [...state, action.quote];
    case 'UPVOTE_QUOTE':
      //
    case 'REMOVE_QUOTE':
      //
    case 'DOWNVOTE_QUOTE':
      //
    default:
      return state;
  }
}
