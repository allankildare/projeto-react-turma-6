import React, { useState, useEffect } from 'react'

const Drinks = () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    const [reqDrinks, setReqDrinks] = useState([])

    useEffect(() => {
        fetch(url)
            .then(resposta => resposta.json())
            .then(json => {
                console.log(json.drinks)
                return setReqDrinks(json.drinks)
            })
    }, [])

    console.log(reqDrinks.length)
    return (
        <div style={{ margin: '0 auto' }}>
            <h1>Drinks</h1>
            <ul>
                {reqDrinks.length < 1 ?
                    'Carregando...' : 
                    reqDrinks.map((item) => {
                    return <li key={item.idDrink}>
                        <img src={item.strDrinkThumb} alt={`Imagem do drink ${item.strDrink}`} width="100px" />
                        <h5>{item.strDrink}</h5>
                        <p>Categoria: {item.strCategory}</p>
                        <p>ID: {item.idDrink}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Drinks
