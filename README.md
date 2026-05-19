# Poke Game 🎮⚡

A fun Pokémon guessing game built with React and Vite. The app fetches random Pokémon data from the PokeAPI and challenges the player to guess the correct Pokémon from multiple options.

## 🚀 Features

- Random Pokémon quiz gameplay
- Pokémon image fetched from PokeAPI
- Multiple-choice answer options
- Score system
- Life system with 3 chances
- Winner screen when score reaches 100
- Game over screen when lives reach 0
- Confetti celebration on winning
- Clean UI built with Tailwind CSS

## 🛠️ Tech Stack

- React
- Vite
- Tailwind CSS
- Context API
- PokeAPI
- React Confetti

## 📁 Project Structure

```bash
Poke-Game/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AnswerCard.jsx
│   │   ├── LoserCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── PokeCard.jsx
│   │   ├── ScoreBoard.jsx
│   │   └── WinnerCard.jsx
│   ├── context/
│   │   ├── PokeContext.jsx
│   │   ├── PokeReducer.jsx
│   │   └── PokeService.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js
