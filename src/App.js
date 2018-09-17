import React, { Component } from 'react';
import Header from './Router/Header';
import Rutiranje from './Router/Router';

import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Rutiranje />
        </div>
      </BrowserRouter>
    )
  }

}

export default App;