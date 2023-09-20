import { useState } from "react"


interface IWordEntryProps {
    onGuessEntered(guess: string): void
}

const WordEntry = ({ onGuessEntered } : IWordEntryProps) => {

    const [value, setValue] = useState('')

    const getValidWordleString = (rawString: string) => {

        const upperCaseString = rawString.toUpperCase()

        const validWordleString = rawString.replace(/[^a-z]/gi, '')
        return validWordleString?.toUpperCase()
    }

    const handleLetterEntry = (e:any) => {
        const validString:string = getValidWordleString(e.target.value)
        onGuessEntered(validString)
        setValue(validString)
    }

    return (
        <div>WordEntry</div>
    )
}

export default WordEntry