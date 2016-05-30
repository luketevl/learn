// A redurces take in two things

// 1. The action (info abaout what happened)
// 2. Copy of current state

function comments(state = [], action){
  console.log(state, action);
  return state;
}

export default comments;
