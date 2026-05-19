import { useContext } from "react"
import PokeBall from "../assets/pokeball.png"
import PokeContext from "../context/PokeContext"

const ScoreBoard = () => {

    const { scoreData } = useContext(PokeContext)


    return (
        <div className='my-6 flex items-center justify-between'>
            <h1 className="text-2xl font-bold">Score : {scoreData.score}</h1>
            <ul className="flex items-center justify-between space-x-2">
                {
                    scoreData.life === 3 ? (
                        <>
                            <li>
                                <img className="h-10" src={PokeBall} alt="" />
                            </li>
                            <li>
                                <img className="h-10" src={PokeBall} alt="" />
                            </li>
                            <li>
                                <img className="h-10" src={PokeBall} alt="" />
                            </li>
                        </>
                    ) : scoreData.life === 2 ? (
                        <>
                            <li>
                                <img className="h-10" src={PokeBall} alt="" />
                            </li>
                            <li>
                                <img className="h-10" src={PokeBall} alt="" />
                            </li>

                        </>
                    ) :
                        scoreData.life === 1 ? (
                            <>
                                <li>
                                    <img className="h-10" src={PokeBall} alt="" />
                                </li>

                            </>
                        )
                            : (
                                <li>
                                    <h1 className="text-2xl text-red-500 font-bold">Game Over!</h1>
                                </li>

                            )
                }
            </ul>

        </div>
    )
}

export default ScoreBoard
