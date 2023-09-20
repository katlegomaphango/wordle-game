import { useEffect, useState } from "react"
import { Letter } from ".."
import { AccuracyEnum } from "../../utilities/accuracy.utils"
import { evaluatedWordScore } from "../../utilities/evaluation.utils"
import { retrieveAnswer } from "../../utilities/answerRetriever"



interface IWordProps {
    isWordEvaluated: boolean,
    guessWordValue: string
}

const Word = (props: IWordProps) => {
    const { isWordEvaluated, guessWordValue } = props

    const inititalAccuracyArray =[
        AccuracyEnum.none,
        AccuracyEnum.none,
        AccuracyEnum.none,
        AccuracyEnum.none,
        AccuracyEnum.none
    ]

    const [guessValue, setGuessValue] = useState('')
    const [isEvaluated, setIsEvaluated] = useState(false)
    const [evaluatedResults, setEvaluatedResults] = useState<AccuracyEnum[]>(inititalAccuracyArray)

    useEffect(() => {
        setIsEvaluated(isWordEvaluated)
    }, [isWordEvaluated])


    //original
    useEffect(() => {
        const results = evaluatedWordScore( guessValue, retrieveAnswer().toUpperCase() )

        setEvaluatedResults(results)
        setGuessValue(guessWordValue)
    }, [guessWordValue])

    

    return (
        <>
            {
                guessValue
                .toUpperCase()
                .split('')
                .map( (nextLetter, index) => (
                    <Letter 
                        key={"letter_" + index} 
                        value={nextLetter}
                        accuracy={isEvaluated ? evaluatedResults[index] : AccuracyEnum.none }
                        position={index}
                    />
                ))
            }
        </>
    )
}

export default Word