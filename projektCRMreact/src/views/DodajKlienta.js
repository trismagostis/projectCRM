import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DodajKlienta(props) {
  let myRef = React.createRef();

  let addClientApi = (nazwa, adres, nip) => {
    axios
      .post("http://localhost:8080/api/client/add", {
        nazwa: nazwa,
        adres: adres,
        nip: nip,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  let sendForm = (event) => {
    event.preventDefault();
    addClientApi(
      myRef.current.nazwa.value,
      myRef.current.adres.value,
      myRef.current.nip.value
    );
  };
  return (
    <div>
      <form onSubmit={sendForm} ref={myRef}>
        <label for="nazwa">Nazwa: </label>
        <input type="text" id="nazwa"></input>
        <br />
        <label for="adres">Adres: </label>
        <input type="text" id="adres"></input>
        <br />
        <label for="nip">NIP: </label>
        <input type="text" id="nip"></input>
        <br />
        <input type="submit" value="Wyślij"></input>
      </form>
      <br />
      <Link to="/clients">powrot</Link>
    </div>
  );
}

export default DodajKlienta;
