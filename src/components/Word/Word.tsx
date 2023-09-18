import { useEffect, useState } from "react"

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
        <div>Word</div>
    )
}

export default Word