import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const { data } = await api.post("/usuarios/login", {
        email,
        password,
      });
      const { token } = data;
      localStorage.setItem("token", token);
      navigate("/usuarios");
    } catch (error) {
      if (error.response?.data) {
        alert(error.response.data.error);
      } else alert("Não foi possível se autenticar");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
