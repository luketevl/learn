import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreaters from '../actions/actionCreaters';

import Main from './Main';


function mapStateToProps(state){
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispachToProps(dispatch){
  return bindActionCreators(actionCreaters, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
