
import "../../styles/home.css"
import React, { useState, useEffect } from "react";
import load_dotenv from dotenv

load_dotenv()

export function DataTable() {
  const supplier_url = process.env.BACKEND_URL + '/api/suppliers/';
  // Estado para almacenar los datos de la base de datos
  const [datos, setDatos] = useState([]);
  // Efecto para cargar los datos cuando el componente se monta
  useEffect(() => {
  // Aquí puedes realizar la llamada a la API o a la base de datos para recuperar los datos
  fetch(supplier_url)
      .then((response) => response.json())
      .then((data) => {
      // Almacena los datos recuperados en el estado
      setDatos(data);
      })
      .catch((error) => {
      console.error("Error al recuperar los datos:", error);
      });
  }, []); // El array vacío [] asegura que el efecto se ejecute solo una vez al montar el componente

    return (
    <div>
        <h2>Tabla de Datos</h2>
        <table>
            <thead>
              <tr>
                <th>Id Wopr</th>
                <th>Id G-Stock</th>
                <th>Referencia</th>
                <th>Categoria Id</th>
                <th>Subcategoria Id</th>
                <th>Nombre</th>
                <th>Nombre Registrado</th>
                <th>CIF</th>
                <th>Direccion</th>
                <th>Direccion adicional</th>
                <th>Numero</th>
                <th>Planta</th>
                <th>Letra</th>
                <th>Codigo Postal</th>
                <th>Ciudad</th>
                <th>Codigo Provincia</th>
                <th>Nombre Provincia</th>
                <th>Telefono 1</th>
                <th>Telefono 2</th>
                <th>Fax</th>
                <th>Mobile</th>
                <th>email</th>
                <th>Codigo Lenguaje</th>
                <th>Activo</th>
                <th>Fecha Creacion</th>
                <th>Fecha de Modificacion</th>
              </tr>
            </thead>
          <tbody>
          {/* Mapea sobre los datos para renderizar cada fila */}
          {datos.map((row, idWopr) => (
            <tr key={idWopr}>
              <td>{row.idWopr}</td>
              <td>{row.id}</td>
              <td>{row.reference}</td>
              <td>{row.categoryId}</td>
              <td>{row.subcategoryId}</td>
              <td>{row.name}</td>
              <td>{row.nameRegistered}</td>
              <td>{row.cif}</td>
              <td>{row.address}</td>
              <td>{row.addressAdditional}</td>
              <td>{row.addressNumber}</td>
              <td>{row.addressFloor}</td>
              <td>{row.addressLetter}</td>
              <td>{row.codePostal}</td>
              <td>{row.cityCode}</td>
              <td>{row.cityName}</td>
              <td>{row.provinceCode}</td>
              <td>{row.provinceName}</td>
              <td>{row.phone1}</td>
              <td>{row.phone2}</td>
              <td>{row.fax}</td>
              <td>{row.mobile}</td>
              <td>{row.email}</td>
              <td>{row.languageCode}</td>
              <td>{row.active}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}