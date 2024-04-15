import React from "react";
import { useState } from "react";
import "./InputAmount.css";

export const Input = () => {
  const [monto, setMonto] = useState("");
  const [descripcion, setDescription] = useState("");

  const handleMontoChange = (e) => {
    setMonto(e.target.value);
  };

  const handleDescripcionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="ContainIput">
      <div className="container">
        <div className="headDiv">
          <span class="material-symbols-outlined back">arrow_back</span>{" "}
          <span class="material-symbols-outlined back">settings</span>
        </div>
        <h2 className="title">Entrada</h2>
        <div className="inputContainer">
          <label className="label">Monto</label>
          <input
            type="text"
            placeholder="$500"
            value={monto}
            onChange={handleMontoChange}
            className="input"
          />
        </div>
        <div className="inputContainer">
          <label className="label">Descripción</label>
          <textarea
            value={descripcion}
            onChange={handleDescripcionChange}
            className="textarea"
          />
        </div>
        <button className="pushBtn">Confirmar monto</button>
      </div>
    </div>
  );
};
