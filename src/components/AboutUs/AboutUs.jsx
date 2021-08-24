import React, { useState } from 'react'
import Button from '../Button/Button'

export default function AboutUs() {
    const [contador, setContador] = useState(0)
    const [strAtual, setStrAtual] = useState('')

    const atualizaEstado = () => {
        setContador(contador+1)
    }

    const lidaComInput = ({ target }) => {
        setStrAtual(target.value)
    }
    
    return (
        <div style={{ margin: '0 auto' }}>
            <h1>Vamos contar!</h1>
            <h2>{contador}</h2>
            <button onClick={atualizaEstado}>Atualiza estado!</button>
            <input onChange={lidaComInput} type="text" />
            <h3>{strAtual}</h3>
            <Button texto="Turma 6" />
        </div>
    )
}
