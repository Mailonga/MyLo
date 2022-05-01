import './App.css';
import  'bootswatch/dist/lux/bootstrap.min.css';
import './component/Navbar';
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

function App1() {
  return (
    <div className="App1">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );

  }


export default App;
