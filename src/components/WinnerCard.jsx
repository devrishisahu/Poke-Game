import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import { useEffect } from 'react'

const WinnerCard = () => {

    const { width, height } = useWindowSize()

    const reloadGame = () => {
        window.location.href = "/"
    }


    useEffect(() => {

        // setTimeout(() => {
        //     reloadGame()
        // }, 5000)

    }, [])


    return (
        <>
            <Confetti
                width={width}
                height={height}
            />
            <div className='p-4 border border-gray-300 rounded-md flex flex-col items-center justify-center'>
                <img src="https://media.tenor.com/Q_vC16cDYPcAAAAj/test.gif" alt="" />
                <h1 className='text-green-500 font-bold text-4xl my-4'>You Are Winner!</h1>
                <button onClick={reloadGame} className='bg-red-500 hover:bg-red-600 text-white font-bold p-2 rounded-md w-full cursor-pointer'>Play Again</button>
            </div>
        </>
    )
}

export default WinnerCard
