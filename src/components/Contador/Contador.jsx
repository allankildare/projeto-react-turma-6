import React, { useState } from 'react'

const Contador = () => {
    const [contador, setContador] = useState(0)
    const atualizaEstado = () => {
        setContador(contador+1)
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Vamos contar!</h1>
            <h2>{contador}</h2>
            <button onClick={atualizaEstado}>
                Mais um!
            </button>
        </div>
    )
}

export default Contador