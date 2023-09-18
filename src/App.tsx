import './App.css'
import { Letter, Word } from './components'
import { AccuracyEnum } from './utilities/accuracy.utils'

function App() {

  return (
    <>
      <Word isWordEvaluated={false} guessWordValue='TESTS' />
    </>
  )
}

export default App
