import { useState, useEffect } from "react";
import "./usersScene.css";
import Header from "../../components/Header";
import UserCard from "../../components/UserCard";
import api from "../../services/api";

function UsersScene() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    async function getUsersList() {
      const response = await api.get("/usuarios");
      setUsersList(response.data);
    }

    getUsersList();
  }, []);

  return (
    <>
      <Header title="Usuários cadastrados" />
      <main>
        <section className="info-usuario">
          {usersList.map((user) => (
            <UserCard id={user.idUsuario} name={user.nome} email={user.email} />
          ))}
        </section>
      </main>
    </>
  );
}

export default UsersScene;
