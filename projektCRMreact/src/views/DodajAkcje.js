import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function DodajAkcje(props) {
  const { id } = useParams(); //hook rootera
  let myRef = React.createRef();
  let addActionApi = (rodzaj, opis, klientId) => {
    axios
      .post("http://localhost:8080/api/action/add", {
        data: new Date(),
        rodzaj: rodzaj,
        opis: opis,
        klientId: id,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  let sendForm = (event) => {
    event.preventDefault();
    addActionApi(myRef.current.rodzaj.value, myRef.current.opis.value, id);
  };

  return (
    <div>
      <form onSubmit={sendForm} ref={myRef}>
        <label htmlFor="rodzaj">Rodzaj: </label>
        <select id="rodzaj">
          <option value="telefon">Telefon</option>
          <option value="spotkanie">Spotkanie</option>
          <option value="inne">Inne</option>
        </select>
        <br />
        <label htmlFor="opis">Opis: </label>
        <input type="text" id="opis"></input>
        <input type="submit" value="Dodaj"></input>
      </form>
      <Link to="/clients">powrot</Link>
    </div>
  );
}
export default DodajAkcje;
