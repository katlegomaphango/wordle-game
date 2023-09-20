import { useState } from 'react'
import './App.css'
import { Word, WordEntry } from './components'
//import { AccuracyEnum } from './utilities/accuracy.utils'

function App() {
  const [wordGuess, setWordGuess] = useState('')

  const handleGuessCompletion = (guess: string): void => {

  } 

  return (
    <>
      <div>
        <WordEntry
          onGuessEntered={(guess) => setWordGuess(guess)} 
          onGuessComplete={() => handleGuessCompletion(wordGuess)}
        />
        <Word guessWordValue={wordGuess} isWordEvaluated={false} />
      </div>
    </>
  )
}

export default App
