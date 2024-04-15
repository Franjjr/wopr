import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import "../../styles/index.css";
import { Link, useNavigate } from "react-router-dom";
import { Spiner } from "../component/Spiner.jsx";
import "../../styles/paginacion.css"

export const Recipes = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar las recetas según el término de búsqueda
  const filteredRecipes = store.recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calcular el número total de páginas
  const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);

  // Calcular el índice del primer y último elemento de la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRecipes.slice(indexOfFirstItem, indexOfLastItem);

  // Cambiar a una página específica
  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generar la lista de números de página
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // mandar la información del row al localStorage
  const editBtn = (row) => {
    actions.selectRecipesEdit(row);
    navigate("/edit-recipes");
  } 
  const viewBtn = (row) => {
    // 1. Tengo que mandar row al store
    actions.selectRecipes(row);
    // 2. Ir al componente viewRecipes
    navigate("/view-recipes");
  } 
  const delBtn = (row) => {
    actions.selectRecipesEdit(row);
    actions.getLineRecipes();
    navigate("/del-recipes")
  }
  
  // Función para manejar el cambio en el campo de búsqueda
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Regresar a la primera página al realizar una búsqueda
  };

  return store.recipes.length === 0 ? (
    <Spiner />
  ) : (
    <div id="page-top">
      {!store.isLogin ? (
        <h1>FORBIDEN</h1>
      ) : (
        <div className="container-fluid">
          <h1 className="h3 mb-2 text-gray-800">
            Recetas <i className="fa-solid fa-plate-wheat"></i>{" "}
          </h1>
          <div className="text-right">
            <Link to="/new-recipes">
              <button type="button" className="btn btn-primary">
                Crear receta
              </button>
            </Link>
          </div>
          <p className="mb-4"></p>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Recetas disponibles:
              </h6>
            </div>
            <div className="card-body">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar Receta..."
                  value={searchTerm}
                  onChange={handleSearch}
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
                      <th>Id</th>
                      <th>Nombre</th>
                      <th>Is Active</th>
                      <th>Cantidad</th>
                      <th>Coste</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  
                  <tfoot>
                    <tr>
                      <th>Id</th>
                      <th>Nombre</th>
                      <th>Is Active</th>
                      <th>Cantidad</th>
                      <th>Coste</th>
                      <th>Acciones</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {/* Mapea sobre los datos para renderizar cada fila */}
                    {currentItems.map((row, id) => (
                      <tr key={id}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.is_active}</td>
                        <td>{row.meals}</td>
                        <td>{row.cost_meals}</td>
                        <td><i className="fa-solid fa-pen-to-square" onClick={() => editBtn(row)}></i>&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-trash" onClick={() => delBtn(row)}></i> <i class="fa-regular fa-eye" onClick ={()=>viewBtn(row)}></i></td>
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
