import React, { Component } from 'react';
import './App.css';

import route from './route';
import { HashRouter } from 'react-router-dom';
import store from './ducks/store'
import { Provider } from 'react-redux';

// COMPONENTS 
import Header from './components/Header/Header'


class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <div>
              <Header />
              {route}
            </div>
          </div>
        </HashRouter>
      </Provider>

    );
  }
}

export default App;
