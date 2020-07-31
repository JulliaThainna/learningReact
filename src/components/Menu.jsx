import React, { useState, useEffect } from "react";
import { Nav, Navbar, Button, Badge } from "react-bootstrap"; //{} mais de uma coisa

const Menu = (props) => {
  //aqui declara o estados
  //{} serve pra por a var
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(props.onPassChange());
  }, [value]);

  const handleClickAdd = () => {
    setValue(value + 1);
  };
  const handleClickSub = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <div className="m-4">
          <img
            className="rounded-circle mx-auto d-block"
            width="30%"
            src="https://picsum.photos/500"
          ></img>
        </div>
        <Navbar.Brand href="#home">
          <h1>JUIA TAINA</h1>
        </Navbar.Brand>
        <Badge variant={value > 10 ? "warning" : "primary"}>
          {value > 10 ? "10+" : value}
        </Badge>
        <Nav className="mr-auto"></Nav>
        <Button
          onClick={handleClickAdd}
          className="mr-2"
          variant="outline-info"
        >
          Adicionar
        </Button>
        <Button onClick={handleClickSub} variant="outline-info">
          Subtrair
        </Button>
      </Navbar>
    </>
  );
};

export default Menu;
