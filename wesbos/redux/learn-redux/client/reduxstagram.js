// IMPORT THE REACT
import React from 'react';

// Import methods
  import { render } from 'react-dom';
  // Routers DEPS
  import { Router, Route, IndexRoute, browserHistory } from 'react-router';
  import { Provider } from 'react-redux';

import store, { history } from './store';

// Import CSS
import css from './styles/style.styl';


// Import Compenents
import App       from    './components/App';
import Single     from    './components/Single';
import Photogrid  from    './components/Photogrid';

// Routers

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Photogrid}></IndexRoute>
        <Route path="/view/:posId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
