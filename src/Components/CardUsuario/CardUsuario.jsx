import React from "react";
import style from "./CardUsuario.module.css"

function CardUsuario({nome, email}){
    return (
        <div className={style.card}>
            <p>Nome: {nome}</p>
            <p>Email: {email}</p>
        </div>
    )
}

export default CardUsuario;