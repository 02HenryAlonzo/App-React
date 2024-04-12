import './AddCategory.css'

export const AddCategory = () => {
    return (
      <>
        <div className="form-card">
          <form className="form">
            <p className="form-heading">AÑADIR NUEVA CATEGORÍA</p>
  
            <div className="form-field">
              <label className="input-label" htmlFor="nombre">
                Nombre:
              </label>
              <input
                required=""
                placeholder="Inserte Nombre de Categoria"
                className="input-field"
                type="text"
              />
              <label className="input-label" htmlFor="presupuesto">
                Presupuesto:
              </label>
              <input
                required=""
                placeholder="$ 00.00"
                className="input-field"
                type="text"
              />
              <label className="input-label" htmlFor="descripcion">
                Descripcion:
              </label>
              <textarea
                placeholder="Descripcion breve de la categoria"
                className="text-field"
                type="text"
              />
              
            </div>
            
            <button className="pushBtn">Anadir Categoria</button>
          </form>
        </div>
      </>
    );
  };