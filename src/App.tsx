import './App.css'
import { Letter } from './components'
import { AccuracyEnum } from './utilities/accuracy.utils'

function App() {

  return (
    <>
      <Letter accuracy={AccuracyEnum.correct} position={0} value='H' />
    </>
  )
}

export default App
