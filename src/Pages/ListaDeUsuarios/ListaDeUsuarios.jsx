import { useEffect, useState } from "react";
import CardUsuario from "../../Components/CardUsuario/CardUsuario";
import axios from "axios";

function ListaDeUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    BuscarUsuarios();
  }, []);

  async function BuscarUsuarios() {
    const response = await axios.get(
      "https://localhost:44317/api/usuarios/listar"
    );

    if (response.status !== 200) {
      alert("Erro ao listar usuários");
      return;
    }
    console.log(response);
    setUsuarios(response.data);
  }

  return (
    <div>
      {usuarios.map((usuario) => (
        <CardUsuario nome={usuario.nome} email={usuario.email}></CardUsuario>
      ))}
    </div>
  );
}

export default ListaDeUsuarios;
