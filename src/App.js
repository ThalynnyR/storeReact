import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';

import Rodape from './componentes/rodape'
import Cabecalho from './componentes/cabecalho'
import Inicio from './componentes/inicio'
import Servicos from './componentes/servicos'
// import logo from './logo.svg';
// import Site from './Site'
// import Ecommerce from './componentes/ecommece'

class App extends Component {
  render() {
    return (
      // Administrar as rotas
      <BrowserRouter> 
      <div className="App">
        <Cabecalho />
        <Route path='/' exact component={Inicio} />
        {/* <Inicio /> */}
        <Route path='/servicos' component={Servicos} />
        {/* <Servicos /> */}
        
        {/* <Ecommerce /> */}
        <Rodape />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
