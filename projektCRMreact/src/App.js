import axios from "axios";
import { useState } from "react";
import "./App.css";
import AppNav from "./components/AppNav";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));//odswieza sie po uzyciu setUser w komponentach pochodnych

  axios.defaults.headers.common["x-auth-token"] = user ? user.jwt : "";

  return (
    <div className="App">
      <AppNav user={user} setUser={setUser} />
      <AppRoutes user={user} setUser={setUser} />
    </div>
  );
}

export default App;
