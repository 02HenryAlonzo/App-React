import "./Category.css";

export const Category = () => {
  return (
    <>
      <div className="form-card">
        <div className="container">
          <p className="container-heading">LISTA DE CATEGORIAS</p>
          <div className="main">
            <div className="name">
            <h2 className="tituloCat">Categoria:</h2>
              <ul className="listCategories">
                <li>Categoria 1</li>
                <li>Categoria 2</li>
                <li>Categoria 3</li>
                <li>Categoria 4</li>
                <li>Categoria 5</li>
              </ul>
            </div>
            <div className="mount">
              <h2 className="tituloCat">Monto Asignado:</h2>
              <ul className="listMounts">
                <li>Monto 1</li>
                <li>Monto 2</li>
                <li>Monto 3</li>
                <li>Monto 4</li>
                <li>Monto 5</li>
              </ul>
            </div>
          </div>
          <button className="pushBtn">Añadir Categoría</button>
        </div>
      </div>
    </>
  );
};
