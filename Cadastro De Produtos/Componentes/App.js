import './App.css';
import  'bootswatch/dist/lux/bootstrap.min.css';
import './components/Navbar';
import React from 'react';


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


export default App;
