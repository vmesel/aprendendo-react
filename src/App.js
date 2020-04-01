import './styles.css';

import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './pages/main';


class App extends Component {
  render(){
    return (
      <React.StrictMode>
        <Header />
        <Main />
      </React.StrictMode>
    );
  }
}

export default App;
