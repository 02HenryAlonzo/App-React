import "./Category.css";

export const Category = () => {
  return (
    <>
      <div className="form-card">
        <div className="cont">
        <div className="headDiv">
          <span class="material-symbols-outlined back">arrow_back</span>{" "}
          <span class="material-symbols-outlined back">settings</span>
        </div>

          <p className="cont-heading">LISTA DE CATEGORIAS</p>
          <table className="main">
            <thead className="tableHead">
              <tr>
                <th className="tituloCat">Categoría</th>
                <th className="tituloCat">Monto</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              <tr>
                <td>
                  <ul className="listCategories">
                    <li>Facturas Movil</li>
                    <li>Energia</li>
                    <li>Salida</li>
                    <li>Categoria 4</li>
                    <li>Categoria 5</li>
                  </ul>
                </td>
                <td>
                  <ul className="listMounts">
                    <li>$ 100.50</li>
                    <li>$ 58.50</li>
                    <li>Monto 3</li>
                    <li>Monto 4</li>
                    <li>Monto 5</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="pushBtn">Añadir Nueva Categoría</button>
        </div>
      </div>
    </>
  );
};
