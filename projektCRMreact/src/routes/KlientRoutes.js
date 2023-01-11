import {Route, Routes} from "react-router-dom";
import DodajKlienta from "../views/DodajKlienta";
import Klienci from "../views/Klienci";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import DodajAkcje from "../views/DodajAkcje";
import KlientWidok from "../views/KlientWidok";

const KlientRoutes = (props) => {
    return(
        <Routes>
            
            <Route path="/client" element={<KlientWidok klientId={props._id}/>}></Route>
            <Route path="/adClient" element={<DodajKlienta />}></Route>
            <Route path="/addAction" element={<DodajAkcje />}></Route>
            
        </Routes>
    );
}

export default KlientRoutes;