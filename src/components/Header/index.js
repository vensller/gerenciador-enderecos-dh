import "./header.css";

function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
      <a href="#">Usuários</a>
      <a href="#">Cadastrar usuário</a>
      <a href="#">Cadastrar endereço</a>
    </header>
  );
}

export default Header;
