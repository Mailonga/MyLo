import React from "react";

function Navbar(){
  return(
    <div>
     <body>
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">HouseMe</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="./Home.js">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./Cadastro.js">Cadastro</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./Consulta.js">Consulta</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</body>
</div>
  )
  
}

export default Navbar;
