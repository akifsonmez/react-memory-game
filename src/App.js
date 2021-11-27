import './App.css'
import React, { useEffect, useState } from "react"
import SingleCard from './components/SingleCard'

const cardImages = [
  { src: "./img/helmet-1.png" },
  { src: "./img/potion-1.png" },
  { src: "./img/ring-1.png" },
  { src: "./img/scroll-1.png" },
  { src: "./img/shield-1.png" },
  { src: "./img/sword-1.png" },
]


function App() {

  const [cards, setCards] = useState([])
  const [turnCount, setTurnCount] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log("cards matched")
      }
      else {
        console.log("cards did not match")
      }
      resetTurn()
    }
  }, [choiceOne, choiceTwo])

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => { return { ...card, id: Math.random() } })
    setCards(shuffledCards)
    setTurnCount(0)
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurnCount(prevCount => prevCount + 1)
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard
            card={card}
            key={card.id}
            handleCoice={handleChoice}
          />))}
      </div>
    </div>
  );
}

export default App