= https://github.com/wesbos/Learn-Redux-Starter-Files

== Step 1

  - Import the *react*
    ```react
      import React from 'react';
    ```

  - Import the *RENDER* method from *react-dom*
    - Render is a method that takes input data and return what to display
    ```react
      import { render } from 'react-dom';
    ```

    - Import the CSS
      - Go to a css paste
    ```react
      import css from 'caminho.styl'
    ```

== Step 2

  - Create a paste to your components
    - *components*
  - Import the *react*
    ```react
      import React from 'react';
    ```

  - Import the *Link* method from *react-router*
    - Link is a method equal <a> of HTML
    ```react
      import { Link } from 'react-router';
    ```
  - Create the component
  ```react
    const Main = React.createClass({
      render({
        return (
          <div>
            <h1>
              <Link to="/">Reduxstragram</Link>
            </h1>
          </div>
          )
        })
      });
    export default Main;
  ```
  - Import the *Router*, *Route*, *IndexRoute*, *browserHistory* methods from *react-router*
    - browserHistory = Maybe we need back history of navegation
  ```react
    import { Router, Route, IndexRoute, browserHistory } from 'react-router';
  ```
  - Create the routers
    - <Route> = It is the single Route, you can have any multiply routes in route
    - <Router> = It is the all Routes
    - attrs
      - path = Path of component
      - component = Name of component
    ```react
      const router = (
        <Router history={browserHistory}>
          <Route path="/" component={componentName}>
            <IndexRoute component="{indexComponent}"></IndexRoute>
            <Route path="/view/:postId" component="{chieldComponent}" />
          </Route>
        </Router>
        );
    ```
  - Call method render passing the router
  ```react
    render(router, selector);
  ```

== Step 3

  - Create file with *store*, *producers* and *actions* _REDUX_
    - Import the *createStore*, *compose*, *synHistoryWithStore*, *browserHistory* method from *redux*, *react-router-redux*, *react-router*
    ```react
      import { createStore, compse} from 'redux';
      import { syncHistoryWithStore } from 'react-router-redux';
      import { browserHistory } from 'react-router';
    ```
    - Import the *rootReducer*
    ```react
      import rootReducer from './reducers/index';
    ```
    - Import the content *comments* and *posts*
    ```react
      import comments from './data/comments';
      import posts from './data/posts';
    ```
    - Create the _store_
    ```react
      const store = createStore(rootReducer, defaultState);
    ```
    - Create the _history_
    ```react
      const history = synHistoryWithStore(browserHistory, store);
    ```

== Step 4

  - Crate folder for the *actions*
    - Create file for _actionCreaters_
    ```react
      export function nameFunction(param){
        return {
          type: NAME,
          param
        }
      }
    ```
  - Create folder for the *reducers*
    - Create file for _redurce_
    ```react
      function nameFunction(state = [], action){
        return state;
      }
    ```
    - Create file index into folder _reducers_
      - Import the *combineReducers*, *routerReducer* method from *redux*, *react-router-redux*
    ```react
      import { combineReducers } from 'redux';
      import { routerReducer } from 'react-router-redux';
    ```
      - Import the reducers
      ```react
        import posts from './posts';
        import comments from './comments';
      ```
      - Create var for combineReducers
      ```react
        const rootReducer = combineReducers({posts, comments, routing: routerReducer});
        export default rootReducer;
      ```

== Step 5

  - Import the *Provider* method from *react-redux*
  ```react
    import { Provider } from 'react-redux';
  ```
  - Import the *store* and *history* method from *store*
  ```react
    import store, { history } from './store';
  ```



  >
    - Crate copy of React Element with different props from those of the original element, *key* and *ref* from original element will be preserved
      - React.cloneElement(el, el2)
