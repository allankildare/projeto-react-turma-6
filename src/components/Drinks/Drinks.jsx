import React, { useState, useEffect } from 'react'

const Drinks = () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    const [reqDrinks, setReqDrinks] = useState([])

    useEffect(() => {
        fetch(url)
            .then(resposta => resposta.json())
            .then(json => {
                return setReqDrinks(json.drinks)
            })
    }, [])

    return (
        <div style={{ margin: '0 auto', textAlign: 'center' }}>
            <h1>Drinks</h1>
                {reqDrinks.length < 1 ?
                    'Carregando...' : 
                    reqDrinks.map((item) => {
                    return <div key={item.idDrink}>
                        <img src={item.strDrinkThumb} alt={`Imagem do drink ${item.strDrink}`} width="100px" />
                        <h5>{item.strDrink}</h5>
                        <p>Categoria: {item.strCategory}</p>
                        <p>ID: {item.idDrink}</p>
                    </div>
                })}
        </div>
    )
}

export default Drinks
