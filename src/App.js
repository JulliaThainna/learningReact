import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Person from "./components/Person";

function App() {
  //tudo que esta dentro de uma function e da export é um componente
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="primary">Juia</Button>
      </header>
    </div>
  ); */
  const [chatNumber, setChatNumber] = useState(1);
  useEffect(() => {
    console.log(chatNumber);
  }, [chatNumber]);
  const handleChange = (read) => {
    if (read === false) {
      setChatNumber(chatNumber - 1);
    }
    if (read === true) {
      setChatNumber(chatNumber + 1);
    }
  };

  const handlePassChange = () => {
    return chatNumber;
  };
  return (
    <div style={{ backgroundColor: "#d3d3d3", minHeight: 1080 }}>
      <Menu onPassChange={handlePassChange} />
      <div className="container">
        <Person
          name="Juia Taina"
          mensage="Esquizofrenia ou so evolucao espiritual?"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
