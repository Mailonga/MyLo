import React from "react";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CadastroProdutos from "./views/cadastroProdutos.jsx";
import Home from './component/Pages/Home';
import Consulta from './component/Pages/Consulta';


function Rotas(){
    return(
      <Router>
          <Switch>
              <Route exact path = "/Home">
                  <Home/>
              </Route>
              <Route exact = {true} path = "/cadastroProdutos">
                  <CadastroProdutos/>
              </Route>
              <Route exact Path = "/Consulta">
                  <Consulta/>
              </Route>
          </Switch>
      </Router>
    );
}

export default Rotas;
