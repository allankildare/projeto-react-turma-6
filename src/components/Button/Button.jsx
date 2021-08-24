import React, { useState } from 'react'
import style from './Button.module.css'

function Button(props) {
    const { texto } = props
    
    const [isButtonDisabled, setButtonDisabled] = useState({ disabled: false })

    function meuClique() {
        setButtonDisabled({ disabled: true })
        
        setTimeout(() => {
            setButtonDisabled({ disabled: false })
        }, 3000)
    }

    return (
        <button disabled={isButtonDisabled.disabled}
            className={style.btn}
            onClick={meuClique}>
                {texto}
        </button>
    )
}

export default Button
