import "./StartMenu.css";

export const StarMenu = () => {
  return (
    <>
      <div className="form-card">
        <form className="form">
          <p className="form-heading">CONTROL DE INGRESOS Y GASTOS</p>

          <div className="form-field">
            <label className="input-label" htmlFor="saldo">
              Saldo:
            </label>
            <input
              required=""
              placeholder="Muestra el saldo disponible"
              className="input-field"
              type="text"
            />
          </div>
          <button className="pushBtn">Nuevo Ingreso</button>
          <button className="pushBtn">Nuevo Gasto</button>
          <button className="pushBtn">Reportes</button>
          <button className="pushBtn">Configuracion</button>
        </form>
      </div>
    </>
  );
};
