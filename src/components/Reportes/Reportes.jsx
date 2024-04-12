import { useState } from "react";
import "./Reportes.css";

export const Reportes = ({ onClose }) => {
    const [showSalidas, setShowSalidas] = useState(false);
    const [showEntradas, setShowEntradas] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [reportData, setReportData] = useState([]);
  
    const handleSalidasChange = () => {
      setShowSalidas(!showSalidas);
      setShowEntradas(false);
    };
    
    const handleEntradasChange = () => {
      setShowEntradas(!showEntradas);
      setShowSalidas(false);
    };
  
    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    };
  
    const generateReport = () => {
          const mockData = [
        { fecha: "2024-04-01", monto: 100, tipo: "Salida", categoria: "Comida", saldo: 900 },
        { fecha: "2024-04-05", monto: 50, tipo: "Salida", categoria: "Transporte", saldo: 850 },
        { fecha: "2024-04-10", monto: 200, tipo: "Entrada", categoria: "Salario", saldo: 1050 },
           ];
  

      let filteredData = mockData.filter(item => {
        const itemDate = new Date(item.fecha);
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);
  
        return itemDate >= startDateObj && itemDate <= endDateObj &&
          (!selectedCategory || item.categoria === selectedCategory);
      });
  
      if (showSalidas) {
        filteredData = filteredData.filter(item => item.tipo === "Salida");
      } else if (showEntradas) {
        filteredData = filteredData.filter(item => item.tipo === "Entrada");
      }
  
      setReportData(filteredData);
    };
  
    React.useEffect(() => {
      generateReport();
    }, [showSalidas, showEntradas, startDate, endDate, selectedCategory]);
  
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <div>
            <label>
              <input
                type="checkbox"
                checked={showSalidas}
                onChange={handleSalidasChange}
              />
              Salidas
            </label>
            <label>
              <input
                type="checkbox"
                checked={showEntradas}
                onChange={handleEntradasChange}
              />
              Entradas
            </label>
          </div>
          <span>Rango de Fecha:</span>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <div>
            <span>Categorías de Gastos:</span>
            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="">Seleccionar categoría</option>
              <option value="Comida">Comida</option>
              <option value="Transporte">Transporte</option>
              <option value="Salario">Salario</option>
            </select>
          </div>
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Monto</th>
                <th>Tipo</th>
                <th>{showSalidas ? "Categoría" : ""}</th>
                <th>Saldo</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((item, index) => (
                <tr key={index}>
                  <td>{item.fecha}</td>
                  <td>{item.monto}</td>
                  <td>{item.tipo}</td>
                  <td>{showSalidas ? item.categoria : ""}</td>
                  <td>{item.saldo}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <span>Total: $ {reportData.reduce((acc, curr) => acc + curr.monto, 0)}</span>
        </div>
      </div>
    );
  };