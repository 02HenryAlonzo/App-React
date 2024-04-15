import React from "react"
import './Reports.css'

export const Reports = () => {
    return (
        <div className="reports-container">
            <div className="reports">
                <h1 className="heading">REPORTES-S</h1>
                
                <div className="reports-field">
                    <div className="checkboxes">
                        <label htmlFor="salida"><input type="checkbox" className="cbox" id="salida"/>  Salidas</label> 
                        <label htmlFor="entrada"><input type="checkbox" className="cbox" id="entrada"/>  Entradas</label>
                    </div>

                    <label htmlFor="fecha">Rango de Fecha</label>

                    <div className="inputs">
                        <input type="date" className="input-field" />
                        <input type="date" className="input-field" />
                    </div>
                </div>

                <button className="pushBtn">Categorias</button>

                
                <div className="reports-field2">
                    <p>fecha</p>
                    <p>monto</p>
                    <p>categoria</p>
                    <p>saldo</p>
                </div>

                <footer className="footer">
                    <p>total:<span> $ 00.00</span></p>
                </footer>
            </div>
        </div>
    )
}