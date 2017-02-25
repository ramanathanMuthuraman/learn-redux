import React from 'react';
import ComponentManager from '../containers/ComponentManager';

const App = () => (
  <main>
    <header>
      <h1>Learn Redux</h1>
      <h2> This application is just a simple POC to understand how redux works with react </h2>
      <h6>
        <ul>
          <li>
            This application changes the views by tracking redux state without any routers
          </li>
          <li>
            The application mainly revolves around componentManager container,
        setActiveComponent action and activeComponent reducer.  </li>

            <pre>
              {`
            ComponentManger (didMount)
                      |
                      | setActiveComponent (mapDispatchToProps)
                      |
              ActiveComponent reducer
                      |
                      |  activeComponent state updated
                      |
                  Redux Store
                      |
                      |  notify View (mapStateToProps)
                      |
           ComponentManger (willReceiveProps)
           `} </pre>

          <li>
            The view can also be changed by clicking on the links
          </li>
        </ul>
      </h6>
    </header>
      <ComponentManager />
    <footer />
  </main>

);

export default App;
