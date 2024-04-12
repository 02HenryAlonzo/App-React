import React from "react";
import "./InputAmount.css";

export const Amount = () => {
  return (
    <div className="ContainIput">
      <div className="container">
        <h2 className="title">Salida</h2>

        <div className="inputContainer">
          <label className="label">Monto</label>
          <input type="text" placeholder="$500" value="" className="input" />
        </div>

        <button className="pushBtn">Seleccionara Categoria</button>

        <div className="inputContainer">
          <label className="label">Descripción</label>
          <textarea value="" className="textarea" />
        </div>
      </div>
    </div>
  );
};
