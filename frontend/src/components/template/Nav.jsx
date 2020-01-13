import React from "react";

import "./Nav.css";

export default props => (
  <nav className="menu-area">
    {/* CRIAR COMPONENTES E REFATORAR CODIGO VALE LEMBRAR DE USAR O LINK TO DO REACT ROUTER */}
    <nav className="menu">
      <a href="#/">
        <i className="fa fa-home"></i> Início
      </a>
      <a href="#/users">
        <i className="fa fa-users"></i>Usuários
      </a>
    </nav>
  </nav>
);
