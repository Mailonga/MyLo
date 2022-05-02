import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import 'bootswatch/dist/lux/bootstrap.min.css';
import Navbar from './component/Navbar';
import Home from './component/Pages/Home';
import Consulta from './component/Pages/Consulta';
import Cadastro from './component/Pages/Cadastro';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <App/>
    <Cadastro/>
    <Home/>
    <Consulta/>
    <cadastroProdutos/>
  </React.StrictMode>
);

export default index;
