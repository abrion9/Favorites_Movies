import React from 'react'

export default function 
h1() {

    let navigate = userNavigate();

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
