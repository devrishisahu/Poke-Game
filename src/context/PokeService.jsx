const pokemonList = [
    "Pikachu",
    "Charizard",
    "Bulbasaur",
    "Squirtle",
    "Jigglypuff",
    "Gengar",
    "Eevee",
    "Snorlax",
    "Mewtwo",
    "Mew",
    "Chikorita",
    "Cyndaquil",
    "Totodile",
    "Lugia",
    "Ho-Oh",
    "Tyranitar",
    "Umbreon",
    "Espeon",
    "Scizor",
    "Heracross",
    "Treecko",
    "Torchic",
    "Mudkip",
    "Rayquaza",
    "Groudon",
    "Kyogre",
    "Blaziken",
    "Gardevoir",
    "Metagross",
    "Salamence",
    "Turtwig",
    "Chimchar",
    "Piplup",
    "Lucario",
    "Garchomp",
    "Darkrai",
    "Infernape",
    "Empoleon",
    "Leafeon",
    "Glaceon",
    "Snivy",
    "Tepig",
    "Oshawott",
    "Zoroark",
    "Reshiram",
    "Zekrom",
    "Hydreigon",
    "Volcarona",
    "Haxorus",
    "Greninja",
    "Chespin",
    "Fennekin",
    "Froakie",
    "Xerneas",
    "Yveltal",
    "Sylveon",
    "Noivern",
    "Aegislash",
    "Rowlet",
    "Litten",
    "Popplio",
    "Solgaleo",
    "Lunala",
    "Incineroar",
    "Mimikyu",
    "Grookey",
    "Scorbunny",
    "Sobble",
    "Zacian",
    "Zamazenta",
    "Dragapult",
    "Sprigatito",
    "Fuecoco",
    "Quaxly",
    "Koraidon",
    "Miraidon",
    "Pikachu",
    "Charizard",
    "Bulbasaur",
    "Squirtle",
    "Jigglypuff",
    "Gengar",
    "Eevee",
    "Snorlax",
    "Mewtwo",
    "Mew",
    "Chikorita",
    "Cyndaquil",
    "Totodile",
    "Lugia",
    "Ho-Oh",
    "Tyranitar",
    "Umbreon",
    "Espeon",
    "Scizor",
    "Heracross",
    "Treecko",
    "Torchic",
    "Mudkip",
    "Rayquaza",
    "Groudon",
    "Kyogre",
    "Blaziken",
    "Gardevoir",
    "Metagross",
    "Salamence",
    "Turtwig",
    "Chimchar",
    "Piplup",
    "Lucario",
    "Garchomp",
    "Darkrai",
    "Infernape",
    "Empoleon",
    "Leafeon",
    "Glaceon",
    "Snivy",
    "Tepig",
    "Oshawott",
    "Zoroark",
    "Reshiram",
    "Zekrom",
    "Hydreigon",
    "Volcarona",
    "Haxorus",
    "Greninja",
    "Chespin",
    "Fennekin",
    "Froakie",
    "Xerneas",
    "Yveltal",
    "Sylveon",
    "Noivern",
    "Aegislash",
    "Rowlet",
    "Litten",
    "Popplio",
    "Solgaleo",
    "Lunala",
    "Incineroar",
    "Mimikyu",
    "Grookey",
    "Scorbunny",
    "Sobble",
    "Zacian",
    "Zamazenta",
    "Dragapult",
    "Sprigatito",
    "Fuecoco",
    "Quaxly",
    "Koraidon",
    "Miraidon"
];


const generateRandomNum = () => {
    return Math.floor(Math.random() * 123)
}



export const fetchPokemon = async () => {

    const num = generateRandomNum()

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + num)
    const data = await response.json()

    let firstOption = pokemonList[Math.floor(Math.random() * 99)]
    let secondOption = pokemonList[Math.floor(Math.random() * 99)]
    let thirdOption = pokemonList[Math.floor(Math.random() * 99)]
    let fourthOption = pokemonList[Math.floor(Math.random() * 99)]

    const pokemonNames = [firstOption, secondOption, thirdOption, fourthOption]

    pokemonNames[Math.floor(Math.random() * 3)] = data.name

    const pokeData = {
        pokemonName: data.name,
        pokemonImage: data.sprites.other.dream_world.front_default,
        pokemonNames: pokemonNames
    }



    return pokeData

}





// const generateRandomNum = () => {
//     return Math.floor(Math.random() * 123 + 1)
// }
// const generateRandomIndexUnderFour = () => {
//     return Math.floor(Math.random() * 4)
// }



// export const fetchPokemon = async () => {
//     let num = generateRandomNum()
//     let randomIndex = generateRandomIndexUnderFour()
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
//     const data = await response.json()
//     const pokemonData = { name: data.name, pokemonImage: data.sprites.other.dream_world.front_default, pokemonNames: [1, 2, 3, 4] }

//     pokemonData.pokemonNames[0] = pokemonList[Math.floor(Math.random() * 99)]
//     pokemonData.pokemonNames[1] = pokemonList[Math.floor(Math.random() * 99)]
//     pokemonData.pokemonNames[2] = pokemonList[Math.floor(Math.random() * 99)]
//     pokemonData.pokemonNames[3] = pokemonList[Math.floor(Math.random() * 99)]

//     pokemonData.pokemonNames[randomIndex] = pokemonData.name
//     return pokemonData

// }