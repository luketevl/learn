// A redurces take in two things

// 1. The action (info abaout what happened)
// 2. Copy of current state

function posts(state = [], action){
  console.log('The post will change');
  console.log(state, action);
  return state;
}

export default posts;
