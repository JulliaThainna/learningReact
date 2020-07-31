import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Person = (props) => {
  const [read, setRead] = useState(false);

  //aqui
  const handleClickAsReaded = () => {
    if (read === false) {
      setRead(true);
      props.onChange(true);
    }
  };
  const handleClickAsNotReaded = () => {
    if (read === true) {
      setRead(false);
      props.onChange(false);
    }
  };

  return (
    <div
      className="row mt-3 rounded"
      style={{
        backgroundColor: "#fff",
        boxShadow: "1px 3px 10px #9E9E9E",
      }}
    >
      <div className="col-3">
        <div className="m-4">
          <img
            className="rounded-circle mx-auto d-block"
            width="50%"
            src="https://picsum.photos/500"
          ></img>
        </div>
      </div>
      <div className="col-9">
        <div className="m-4">
          <h3
            className={read === true ? "text-primary" : "text-danger"}
            style={{ fontWeight: "bold" }}
          >
            {props.name}
          </h3>
          <h5 style={{ color: "#999" }}>{props.mensage}</h5>
          <div className="d-flex justify-content-end">
            <Button
              className="mr-2"
              variant="primary"
              onClick={handleClickAsReaded}
            >
              Danger
            </Button>
            <Button variant="danger" onClick={handleClickAsNotReaded}>
              Danger
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
