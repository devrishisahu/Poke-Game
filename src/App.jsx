import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import ScoreBoard from './components/ScoreBoard'
import PokeCard from './components/PokeCard'
import AnswerCard from './components/AnswerCard'
import PokeContext from './context/PokeContext'
import WinnerCard from './components/WinnerCard'
import LoserCard from './components/LoserCard'

const App = () => {

  const { scoreData } = useContext(PokeContext)


  return (
    < div className='bg-blue-400 h-screen '>
      <Navbar />
      <div className="p-8">
        <ScoreBoard />
        {
          scoreData.score === 100 ? (
            <>
              <WinnerCard />
            </>
          ) : scoreData.life <= 0 ? (
            <>
              <LoserCard />
            </>
          ) : (
            <>
              <PokeCard />
              <h1 className="text-center my-4 text-4xl font-bold">Guess Pokemon?</h1>
              <AnswerCard />
            </>
          )
        }
      </div>


    </div>
  )
}

export default App
