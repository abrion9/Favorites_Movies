import React from 'react'
import { useNavigate } from "react-router-dom";

export default function () {

  let navigate = useNavigate();

    const voltar = () => {
        navigate('/');
    }

  return (
    <div>
        <h1>Pagina Não Encontrada</h1>

        <button onClick={voltar}></button>

    </div>
  )
}
