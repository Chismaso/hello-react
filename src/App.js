import logo from './logo.svg';
import './App.css';
//importamos el componente que esta en el archivo Component.jsx"
import Component from './Component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HOLA REACT.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/*llamamos al componente que esta en el archivo Component.jsx*/}
        <Component />
      </header>
    </div>
  );
}

export default App;
