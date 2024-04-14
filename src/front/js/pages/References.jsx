import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import "../../styles/index.css";
import { Spiner } from "../component/Spiner.jsx";
import "../../styles/paginacion.css";

export const References = () => {
  const { store, actions } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15); // Cambia este valor según la cantidad de elementos que desees mostrar por página
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  // Cargar todas las referencias al inicio
  useEffect(() => {
    setSearchResult(store.references);
  }, [store.references]);

  // Función para manejar la búsqueda
  useEffect(() => {
    const filteredItems = store.references.filter((row) => {
      return row.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResult(filteredItems);
    setCurrentPage(1);
  }, [searchTerm]);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(searchResult.length / itemsPerPage);

  // Calcular el índice del primer y último elemento de la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResult.slice(indexOfFirstItem, indexOfLastItem);

  // Cambiar a una página específica
  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generar la lista de números de página
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return store.references.length === 0 ? (
    <Spiner />
  ) : (
    <div id="page-top">
      {!store.isLogin ? (
        <h1>FORBIDEN</h1>
      ) : (
        <div className="container-fluid">
          <h1 className="h3 mb-2 text-gray-800">
            Referencias <i className="fa-solid fa-magnifying-glass"></i>{" "}
          </h1>
          <p className="mb-4">
            Tabla con las referencias actualizadas importadas de Gstock,
            recuerde que WOPR solo muestra las referenias que existen en Gstock,
            si quiere modificar, eliminar o dar de alta es necesario hacerlo
            desde la app de Gstock.
          </p>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Lista de Referencias
              </h6>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar Ingrediente"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing="0"
                >
                  <thead>
                    <tr>
                      <th>Id Wopr</th>
                      <th>Id Gstock</th>
                      <th>Nombre</th>
                      <th>Id Categoria</th>
                      <th>Id Familia</th>
                      <th>Id Tipo</th>
                      <th>Id Subtipo</th>
                      <th>Id Unidad Medida</th>
                      <th>Precio Ultima Compra</th>
                      <th>Precio Promedio</th>
                      <th>Id Unidad Mostrada</th>
                      <th>Equivalencia entre compra y mostrada</th>
                      <th>Activa</th>
                      <th>Fecha Creacion</th>
                      <th>Fecha modificacion</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Id Wopr</th>
                      <th>Id Gstock</th>
                      <th>Nombre</th>
                      <th>Id Categoria</th>
                      <th>Id Familia</th>
                      <th>Id Tipo</th>
                      <th>Id Subtipo</th>
                      <th>Id Unidad Medida</th>
                      <th>Precio Ultima Compra</th>
                      <th>Precio Promedio</th>
                      <th>Id Unidad Mostrada</th>
                      <th>Equivalencia entre compra y mostrada</th>
                      <th>Activa</th>
                      <th>Fecha Creacion</th>
                      <th>Fecha modificacion</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {currentItems.map((row, idWopr) => (
                      <tr key={idWopr}>
                        <td>{row.idWopr}</td>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.categoryId}</td>
                        <td>{row.familyId}</td>
                        <td>{row.typeId}</td>
                        <td>{row.subtypeId}</td>
                        <td>{row.measureUnitId}</td>
                        <td>{row.measurePriceLastPurchase}</td>
                        <td>{row.measurePriceAverage}</td>
                        <td>{row.displayUnitId}</td>
                        <td>{row.equivalenceBetweeenMeasureAndDisplay}</td>
                        <td>{row.active}</td>
                        <td>{row.creationDate}</td>
                        <td>{row.modificationDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                {pageNumbers.map((pageNumber) => (
                  <button
                    key={pageNumber}
                    className={`pageButton ${
                      pageNumber === currentPage ? "active" : ""
                    }`}
                    onClick={() => handleChangePage(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
