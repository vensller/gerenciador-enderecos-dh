import { useState } from "react";
import "./userRegisterScene.css";
import Header from "../../components/Header";
import api from "../../services/api";

function UserRegisterScene() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSubmit(event) {
    event.preventDefault();

    // Vamos chamar o backend feito na aula de quinta-feira para cadastrar o usuário
    // Ao chamar o backend, vamos passar o NAME, EMAIL, PASSWORD
    await api.post("/usuarios", {
      nome: name,
      email,
      senha: password,
    });
    setName("");
    setEmail("");
    setPassword("");
    alert("Usuário cadastrado");
  }

  return (
    <>
      <Header title="Cadastro de usuários" />
      <main>
        <form className="cadastro" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite o nome completo"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="email"
            placeholder="Digite o email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Digite a senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Salvar</button>
        </form>
      </main>
    </>
  );
}

export default UserRegisterScene;
