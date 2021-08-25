import React, { useState, useEffect } from 'react'

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
        console.log('efeitooo rodou!');
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
            console.log('limpeza rodou')
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
        </div>
    )
}

export default Drinks
