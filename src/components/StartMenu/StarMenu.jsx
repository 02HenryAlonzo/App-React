import React, { useState } from "react";
import "./StartMenu.css";

export const StarMenu = ({ onNavigate }) => {
  return (
    <>
      <div className="form-card">
        <form className="form">
          <div class="loader">
            <div class="box1"></div>
            <div class="box2"></div>
            <div class="box3"></div>
          </div>{" "}
          <p className="form-heading">CONTROL DE INGRESOS Y GASTOS</p>
          <div className="form-field">
            <label className="input-label" htmlFor="saldo">
              Saldo:
            </label>
            <input
              required=""
              placeholder="$ 3,500.00"
              className="input-field"
              type="text"
            />
          </div>
          <button className="pushBtn" onClick={() => onNavigate("input")}>
            Nuevo Ingreso
          </button>
          <button className="pushBtn" onClick={() => onNavigate("amount")}>
            Nuevo Gasto
          </button>
          <button className="pushBtn">Reportes</button>
          <button className="pushBtn" onClick={() => onNavigate("category")}>
            Configuracion
          </button>
        </form>
      </div>
    </>
  );
};
