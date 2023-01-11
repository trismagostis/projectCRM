import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loginMessage, setLoginMessage] = useState("");

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/login", {
        username: formData.username,
        password: formData.password,
      })

      .then((res) => {
        console.log(res);
        if (res.data.error) {
          setLoginMessage(res.data.error);
        }
        if (!res.data.success) {
          setLoginMessage(res.data.message);
        } else {
          setLoginMessage("");
          props.setUser(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="login">
      {/* {props.user && <Navigate to="/" />} */}
      <form onSubmit={handleSubmit}>
        {loginMessage && <h2>{loginMessage}</h2>}
        <input
          type="text"
          name="username"
          placeholder="User Name"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
