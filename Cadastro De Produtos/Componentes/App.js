import './App.css';
import  'bootswatch/dist/lux/bootstrap.min.css';
import './component/Navbar';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Rotas from './Rotas';

class App extends React.Component{
 
  state = {
   cid: ''
  
  }

  modName = (Event) =>{
      let cid = Event.target.value;

      this.setState({
        cid: cid
      })
  } 
    
  

  render(){
    return(
   
        <input type = "text" value ={this.state.cid} onChange ={this.modName}/>
         
    )}

}

function App1() {
  return (
    <BrowserRouter>
       <Rotas/>  
    </BrowserRouter>
  );

  }


export default App;
