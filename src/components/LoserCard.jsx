import React from 'react'

const LoserCard = () => {
    const reloadGame = () => {
        window.location.href = "/"
    }


    return (
        <div className='p-4 border border-gray-300 rounded-md flex flex-col items-center justify-center'>
            <img className='h-52 rounded-md' src="https://media.tenor.com/qVyPGfLoA54AAAAC/pikachu-sad.gif" alt="" />
            <h1 className='text-red-500 font-bold text-4xl my-4'>You lose the Pokemon league</h1>
            <button onClick={reloadGame} className='bg-red-500 hover:bg-red-600 text-white font-bold p-2 rounded-md w-full cursor-pointer'>Play Again</button>
        </div>
    )
}

export default LoserCard
