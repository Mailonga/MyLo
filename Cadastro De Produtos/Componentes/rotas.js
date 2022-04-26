import React from "react";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CadastroProdutos from "./views/cadastroProdutos.jsx";

import Home from "./views/home";

function Rotas(){
    return(
      <Router>
          <Switch>
              <Route exact path = "/">
               <Home/>
              </Route>
              <Route exact = {true} path = "/cadastro-produtos">
                  <CadastroProdutos/>
              </Route>
          </Switch>
      </Router>
    );
}

export default Rotas;