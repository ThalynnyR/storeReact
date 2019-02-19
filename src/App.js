import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Site from './Site'
import Rodape from './componentes/rodape'
// import Ecommerce from './componentes/ecommece'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Site />
       <Rodape />
       {/* <Ecommerce /> */}
      </div>
    );
  }
}

export default App;
