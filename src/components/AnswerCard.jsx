import React, { useContext } from 'react'
import PokeContext from '../context/PokeContext'

const AnswerCard = () => {

    const { pokemonData, dispatch } = useContext(PokeContext)

    const submitAnswer = (e) => {

        if (pokemonData.pokemonName === e.target.value) {

            // Increase Score
            dispatch({
                type: "INCREASE_SCORE",
            })

        } else {
            // Decrease Life
            dispatch({
                type: "DECREASE_LIFE",
            })

        }


    }


    return (
        <div className="p-4 rounded-md border border-gray-300 grid grid-cols-2 md:grid-cols-4 gap-4">
            {
                pokemonData?.pokemonNames.map((pokemon, index) => {
                    return (
                        <button onClick={(e) => submitAnswer(e)} key={index} value={pokemon} className='bg-black hover:bg-blue-500 cursor-pointer text-lg font-bold active:bg-green-500 text-white p-2 rounded-lg'>{pokemon.toUpperCase()}</button>
                    )
                })
            }
        </div>
    )
}

export default AnswerCard
