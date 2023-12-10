import React from "react";    /* Importando Modulos */
import ReactDOM from "react-dom";        /* Importando Modulos */
import App from "/src/App.jsx";    /* Importamos la funcion */
import "./styles/global.css"; /* incorporamos estilos via global */

ReactDOM.render(       
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);

