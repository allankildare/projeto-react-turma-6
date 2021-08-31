import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Drinks = () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    const [reqDrinks, setReqDrinks] = useState([])
    const [trocaDrink, setTrocaDrink] = useState(false)

    // useEffect que roda na montagem do componente, fazendo a request
    useEffect(() => {
        fetch(url)
            .then(resposta => resposta.json())
            .then(json => {
                return setReqDrinks(json.drinks)
            })
    }, [])

    // useEffect que roda no clique do botao
    useEffect(() => {
        // valida se o estado trocaDrink eh true
        if(trocaDrink) {
            // faz a mesma request
            fetch(url)
                .then(resposta => resposta.json())
                .then(json => {
                    return setReqDrinks(json.drinks)
                })
        }
        return () => {
            // na limpeza ele eh responsavel por devolver false como valor booleano
            setTrocaDrink(false)
        }
    }, [trocaDrink])

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
            <button onClick={() => {
                setTrocaDrink(true)
                }}>
                Trocar drink!
            </button>
            <br />
            
            <div style={{ marginTop: '1rem'}}>
            <Link to="/drinks/populares">
                <button style={{ marginRight: '.3rem'}}>Drinks Populares</button>
            </Link>
            <Link to="/drinks/busca">
                <button>Busca de drinks</button>
            </Link>
            </div>
        </div>
    )
}

export default Drinks
