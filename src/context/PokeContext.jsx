import { createContext, useReducer } from "react";
import { PokeReducer } from "./PokeReducer";

const PokeContext = createContext()

export const PokeProvider = ({ children }) => {

    const initialState = {
        pokemonData: null,
        scoreData: {
            life: 3,
            score: 0
        }
    }


    const [state, dispatch] = useReducer(PokeReducer, initialState)


    return (
        <PokeContext.Provider value={{ ...state, dispatch }}>
            {children}
        </PokeContext.Provider>
    )
}


export default PokeContext