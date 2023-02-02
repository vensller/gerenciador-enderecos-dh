import "./header.css";
import { Link } from "react-router-dom";

function Header({ title }) {
  return (
    <header>
      <h1 className="titulo">{title}</h1>
      <nav>
        <Link to="/usuarios">Usuários</Link>
        <Link to="/usuarios/cadastrar">Cadastrar usuário</Link>
        <Link to="/enderecos/cadastrar">Cadastrar endereço</Link>
      </nav>
    </header>
  );
}

export default Header;
