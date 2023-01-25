import "./App.css";
import Header from "./components/Header";

function App() {
  function handleSubmit(event) {
    event.preventDefault();

    // Vamos chamar o backend feito na aula de quinta-feira para cadastrar o usuário
    // Ao chamar o backend, vamos passar o NAME, EMAIL, PASSWORD
  }

  return (
    <>
      <Header />
      <main>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Digite o nome completo" />
          <input type="email" placeholder="Digite o email" />
          <input type="password" placeholder="Digite a senha" />
          <button type="submit">Salvar</button>
        </form>
      </main>
    </>
  );
}

export default App;
