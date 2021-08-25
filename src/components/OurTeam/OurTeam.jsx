import React, { useEffect } from 'react'
import Button from '../Button/Button'

const OurTeam = () => {
    useEffect(() => {
        console.log('Rodei');
    }, [])

    return (
        <div>
            <Button texto="Turma 6" />
        </div>
    )
}

export default OurTeam
