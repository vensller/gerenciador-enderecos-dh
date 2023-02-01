import "./header.css";

function Header({ title }) {
  return (
    <header>
      <h1 className="titulo">{title}</h1>
      <nav>
        <a href="#">Usuários</a>
        <a href="#">Cadastrar usuário</a>
        <a href="#">Cadastrar endereço</a>
      </nav>
    </header>
  );
}

export default Header;
