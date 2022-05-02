import React from "react";
import Navbar from "../Navbar";
import './index.css';
import 'bootswatch/dist/lux/bootstrap.min.css';

function Cadastro(){
  <Navbar/>
  <form>
  <fieldset>
    <legend className="form-group "><strong>Cadastro De Produtos</strong></legend>
    <div className="form-group">
        <div className="row">
           <div className="col-md-4">
           <label for="nome" className="form-label mt-4">Nome</label>
           <input type="text" className="form-control" id="nome" placeholder="Nome Completo"/>
           </div>
           <div className="col-md-4">
           <label for="sku" className="form-label mt-4">SKU</label>
           <input type="text" className="form-control" id="sku"/>
           </div>
        </div>
    </div>
    <div className="form-group col-md-8">
      <label for="descricao" className="form-label mt-4">Descrição</label>
      <textarea className="form-control" id="descricao" rows="5"></textarea>
    </div>
  <div className="row">
    <div className="col-md-4">
      <div className="form-group input-group mb-3">
        <span className="input-group-text">R$</span>
        <input type="text" id = "preco" className="form-control" aria-label="Amount"/>
      </div>
    </div>
    <div className="col-md-4">
      <div className="form-group">
        <label for="fornecedor" className="form-label mt-4">Fornecedor</label>
        <input type="text" className="form-control" id="fornecedor"/>
      </div>
    </div>
  </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </fieldset>
</form>

}

export default Cadastro;
