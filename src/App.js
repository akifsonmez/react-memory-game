import './App.css'
import React, { useState } from "react"

const cardImages = [
  { src: ".public/img/helmet-1.png" },
  { src: ".public/img/potion-1.png" },
  { src: ".public/img/ring-1.png" },
  { src: ".public/img/scroll-1.png" },
  { src: ".public/img/shield-1.png" },
  { src: ".public/img/sword-1.png" },
]


function App() {

  const [cards, setCards] = useState([])
  const [turnCount, setTurnCount] = useState(0)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => { return { ...card, id: Math.random() } })
    setCards(shuffledCards)
    setTurnCount(0)
    }

  console.log(cards, turnCount)

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App