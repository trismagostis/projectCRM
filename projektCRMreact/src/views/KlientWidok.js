import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function KlientWidok(props) {
  const [klient, setKlient] = useState({ nazwa: "", adres: "", nip: "" });
  const [data, setData] = useState([]);
  const { id } = useParams(); //hook rootera
  let getKlientApi = () => {
    axios
      .get("http://localhost:8080/api/client/" + id) //id
      .then((res) => {
        setKlient(res.data);
      });
  };

  useEffect(() => getKlientApi(), []);

  let updateData = () => {
    axios.get("http://localhost:8080/api/action/all").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  useEffect(() => updateData(), []);

  let deleteActionApi = (id) => {
    axios
      .delete("http://localhost:8080/api/action/delete/" + id)
      .then((res) => {
        console.log(res.data);
        updateData();
      });
  };

  let deleteApi = (id) => {
    deleteActionApi(id);
  };

  let akcje = data.map((elem, index) => {
    if (elem.klientId == id) {
      return (
        <tr key={index}>
          <td>{elem.data}</td>
          <td>{elem.rodzaj}</td>
          <td>{elem.opis}</td>
          <td>
            <button onClick={() => deleteApi(elem._id)}>Usuń</button>
          </td>
        </tr>
      );
    }
  });

  let dodajAkcjeBtn = () => {
    props.setWidok(3);
  };

  let powrot = () => {
    props.setWidok(0);
  };

  return (
    <div>
      <p>Nazwa: {klient.nazwa}</p>
      <p>Adres: {klient.adres}</p>
      <p>Nip: {klient.nip}</p>
      <h2>Akcje</h2>
      <table border="1">
        <tbody>{akcje}</tbody>
      </table>
      <p>
        <Link to={"/addAction/" + id}>Dodaj akcję</Link>
      </p>
      <Link to="/clients">powrot</Link>
    </div>
  );
}
export default KlientWidok;
