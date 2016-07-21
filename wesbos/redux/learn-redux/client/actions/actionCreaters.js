// Increment Likes
export function increment(index){
  return {
    type: 'INCREMENT_LIKES',
    index

  }
}

// addComment
export function addComment(postId, author, comment){
  return {
    tyoe: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}
// removeComment
export function removeComment(postId, i){
  return{
    type: 'REMOVE_COMMENT',
    i
  }
}
