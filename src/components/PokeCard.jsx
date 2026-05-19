import React, { useContext, useEffect } from 'react'
import PokeContext from '../context/PokeContext'
import { fetchPokemon } from '../context/PokeService'

const PokeCard = () => {

    const { pokemonData, dispatch, scoreData } = useContext(PokeContext)



    const getPokemon = async () => {
        const data = await fetchPokemon()
        // Set State
        dispatch({
            type: "FETCH_POKEMON",
            payload: data
        })
    }

    useEffect(() => {
        getPokemon()
    }, [scoreData])


    if (!pokemonData) {
        return (
            <div className="rounded-full p-4 bg-gray-300">
                <img className="rounded-full" src="https://i.pinimg.com/originals/8a/4a/72/8a4a7213b43f4ec4f99db406be655f9e.gif" alt="" />
            </div>
        )
    }


    return (
        <div className="border border-gray-300 p-4 rounded-md flex items-center justify-center">
            <div className="rounded-full p-4 bg-gray-300">
                <img className='h-64' src={pokemonData.pokemonImage} alt="" />
            </div>
        </div>
    )
}

export default PokeCard
