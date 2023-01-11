import "./UsersList.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

import { Link, Navigate } from "react-router-dom";

function Klienci(props) {
  const [data, setData] = useState([]);
  let updateData = () => {
    let token = "";
    if (props.user) {
      token = props.user.jwt;
    }

    axios
      .get("http://localhost:8080/api/client/all")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => updateData(), []);

  let deleteApi = (id) => {
    axios
      .delete("http://localhost:8080/api/client/delete/" + id)
      .then((res) => {
        updateData();
      });
  };

  let clientElements = data.map((elem, index) => {
    return (
      <tr key={index}>
        <td>{elem.nazwa}</td>
        <td>{elem.adres}</td>
        <td>{elem.nip}</td>
        <td>
          <button onClick={() => deleteApi(elem._id)}>Usuń</button>
        </td>
        <td>
          <Link to={"/client/" + elem._id}>Pokaż</Link>
        </td>
      </tr>
    );
  });

  return (
    <div>
      {!props.logged ? (
        <div>
          <h1>Zaloguj się</h1>
        </div>
      ) : (
        <div>
          <table border="1" className="list">
            <thead>
              <tr>
                <th>Nazwa</th>
                <th>Adres</th>
                <th>NIP</th>
                <th>Usuń</th>
                <th>Pokaż</th>
              </tr>
            </thead>
            <tbody>{clientElements}</tbody>
          </table>
          <Link to="/addClient">Dodaj klienta</Link>
        </div>
      )}
    </div>
  );
}

export default Klienci;
