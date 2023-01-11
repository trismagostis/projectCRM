import {Route, Routes} from "react-router-dom";
import DodajKlienta from "../views/DodajKlienta";
import Klienci from "../views/Klienci";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import DodajAkcje from "../views/DodajAkcje";
import KlientWidok from "../views/KlientWidok";

import axios from "axios";
import React, { useState, useEffect } from "react";
const AppRoutes = (props) => {
    const [logged, setLogged] = useState(true);
    axios
      .get("http://localhost:8080/api/client/all")
      .then(()=>{setLogged(true);})
      .catch((error) => {
        if (error.message === "Request failed with status code 403") {
          setLogged(false);
        } else {
          console.log(error);
        }
      });
      
    return(
        <Routes>
            <Route path="/clients" element={<Klienci user={props.user} logged={logged}/>}></Route>
            <Route path="/" element={<Login user={props.user} setUser={props.setUser}/>}></Route>
            <Route path="/signup" element={<SignUp user={props.user}/>}></Route>
            <Route path="/client/:id" element={<KlientWidok />}></Route>
            <Route path="/addAction/:id" element={<DodajAkcje />}></Route>
            <Route path="/addClient" element={<DodajKlienta />}></Route>
        </Routes>
    );
}

export default AppRoutes;