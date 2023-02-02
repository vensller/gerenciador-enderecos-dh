import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRegisterScene from "./scenes/UserRegisterScene";
import UsersScene from "./scenes/UsersScene";
import Login from "./scenes/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/usuarios" exact={true} element={<UsersScene />} />
        <Route
          path="/usuarios/cadastrar"
          exact={true}
          element={<UserRegisterScene />}
        />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
