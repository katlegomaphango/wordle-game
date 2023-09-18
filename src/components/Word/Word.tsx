import { useEffect, useState } from "react"
import { Letter } from ".."
import { AccuracyEnum } from "../../utilities/accuracy.utils"

interface IWordProps {
    isWordEvaluated: boolean,
    guessWordValue: string
}

const Word = (props: IWordProps) => {
    const { isWordEvaluated, guessWordValue } = props

    const [guessValue, setGuessValue] = useState('')
    const [isEvaluated, setIsEvaluated] = useState(false)

    useEffect(() => {
        setGuessValue(guessWordValue)
    }, [guessWordValue])

    useEffect(() => {
        setIsEvaluated(isWordEvaluated)
    }, [isWordEvaluated])

    return (
        <>
            {
                guessValue
                .toUpperCase()
                .split('-')
                .map( (nextLetter, index) => (
                    <Letter 
                        key={"letter_" + index} 
                        value={nextLetter}
                        accuracy={AccuracyEnum.none}
                        position={index}
                    />
                ))
            }
        </>
    )
}

export default Word