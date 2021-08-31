import React from 'react'
import { useParams } from 'react-router-dom'
import Drinks from './Drinks'
import { DrinksPopulares, BuscaDrinks } from './partials'

const SubDrinks = () => {
  // aqui chamamos o hooks useParams para poder pegar o parametro da rota, no caso o nome da própria subrota
  const { subpagina } = useParams()
  return (
    <>
      {subpagina === 'populares' && <DrinksPopulares />}
      {subpagina === 'busca' && <BuscaDrinks />}
      {subpagina !== 'busca' && subpagina !== 'populares' && <Drinks />}
    </>
  )
}

export default SubDrinks
