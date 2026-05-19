export const PokeReducer = (state, action) => {

    switch (action.type) {

        case "FETCH_POKEMON":
            return {
                ...state,
                pokemonData: action.payload
            }

        case "INCREASE_SCORE":
            return {
                ...state,
                scoreData: { ...state.scoreData, score: state.scoreData.score + 10 }
            }

        case "DECREASE_LIFE":
            return {
                ...state,
                scoreData: { ...state.scoreData, life: state.scoreData.life - 1 }
            }


        default:
            return state
    }


}