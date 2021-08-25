import React, { useState } from 'react'

const InputState = () => {
    const [strAtual, setStrAtual] = useState('')

    // target sendo desestruturado de props
    const lidaComInput = ({ target }) => {
        setStrAtual(target.value)
    }

    /* nesse retorno se faz o uso do Fragment,
    vale a pena lembrar suas 3 formas de declarar: 
    * <> -> tag sem nome
    * <Fragment> - forma que deve ser destruturada
    * <React.Fragment> - acessivel apenas com o import do React
    */
    return (
        <>
            <input onChange={lidaComInput} type="text" />
            <h3>{strAtual}</h3>
        </>
    )
}

export default InputState