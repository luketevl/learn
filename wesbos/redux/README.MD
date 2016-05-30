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
