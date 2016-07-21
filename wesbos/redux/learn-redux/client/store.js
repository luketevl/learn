import { createStore, compse} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Imports the root reducer
import rootReducer from './redurces/index';

// Import the data
import comments from './data/comments';
import posts from './data/posts';

// Create an Object for the default data
const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultState);

const history = syncHistoryWithStore(browserHistory, store);

export default store;
