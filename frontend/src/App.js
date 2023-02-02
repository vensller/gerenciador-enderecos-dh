import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserRegisterScene from "./scenes/UserRegisterScene";
import UsersScene from "./scenes/UsersScene";
import Login from "./scenes/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/usuarios",
      element: <UsersScene />,
    },
    {
      path: "/usuarios/cadastrar",
      element: <UserRegisterScene />,
    },
    {
      path: "/",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
