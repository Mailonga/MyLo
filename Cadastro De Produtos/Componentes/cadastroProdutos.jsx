import React from "react";

class CadastroProdutos extends React.Component{

    state = {
        nome: '',
        sku: '',
        descricao: '',
        preco: 0 ,
        fornecedor: ''
    }

    onChange = (Event) =>{
        const valor = Event.target.valeu
        constnomeDoCampo = Event.target.name 
        this.setState({
            [nomeDoCampo]: valor
        })
    }

    onSubmit = (Event) => {
        console.log(this.state)
    }

    limp = (Event) =>{
        console.log(this.state = '')
    }

    render(){
        return(
            <>
            <div className="card">
                <div className="card-header">
                    Cadastro de Produto
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome: *</label>
                                <input type="text"
                                value ={this.state.nome}
                                name = "nome"
                                onChange ={this.onChange}
                                className ="form-control"
                                />
                                </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU: *</label>
                                <input type = "text"
                                value = {this.state.sku}
                                name = "sku"
                                onChange ={this.onChange}
                                className ="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Descrição: *</label>
                                <textarea rows = {5} type = "text"
                                value = {this.state.descricao}
                                name = "descricao"
                                onChange ={this.onChange}
                                className ="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Preço: *</label>
                                <input type = "number"
                                value = {this.state.preco}
                                name = "preco"
                                onChange ={this.onChange}
                                className ="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Fornecedor: *</label>
                                <input type = "text"
                                value = {this.state.fornecedor}
                                name = "fornecedor"
                                onChange ={this.onChange}
                                className ="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-md-1">
                            <button onClick ={this.onSubmit} className="btn btn-success">Salvar</button>
                        </div>
                        <div className="col-md-1">
                            <button onClick ={this.limp} className="btn btn-success">Limpar</button>
                        </div>
                    </div>

                </div>
            </div>
            </>
        )
    }
}

export default CadastroProdutos;