import React from 'react';
import logo from './logo.svg';
import './assets/css/App.css';

// Importar mi componente
import './components/micomponente/micomponente';
import MiComponente from './components/micomponente/micomponente';

function App() {
  function crearNombre(nombre, apellido) {
    return (
      <div className="hola">
        <p>{nombre}</p>
        <p>{apellido}</p>
      </div>
    );
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola aqui estoy</p>
         {crearNombre('Juan', 15)}
        <section className="componentes">
          <MiComponente />
        </section>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
