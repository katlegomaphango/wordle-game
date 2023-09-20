import { useState } from "react"
import { StyledWordEntry } from "./WordEntry.Style"


interface IWordEntryProps {
    onGuessEntered(guess: string): void
}

const WordEntry = ({ onGuessEntered } : IWordEntryProps) => {

    const [value, setValue] = useState('')

    const getValidWordleString = (rawString: string) => {

        //const upperCaseString = rawString.toUpperCase()

        const validWordleString = rawString.replace(/[^a-z]/gi, '')
        return validWordleString?.toUpperCase()
    }

    const handleLetterEntry = (e: React.ChangeEvent<HTMLInputElement>) => {
        const validString:string = getValidWordleString(e.target.value)
        onGuessEntered(validString)
        setValue(validString)
    }

    return (
        <>
            <StyledWordEntry
                autoFocus
                placeholder='Enter your guess...' 
                value={value}
                maxLength={5}
                onChange={(e) => handleLetterEntry(e)}
            />
        </>
    )
}

export default WordEntry