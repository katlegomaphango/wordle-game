import { useRef, useState } from "react"
import { StyledEvaluateButton, StyledWordEntry, StyledWordEntryContainer } from "./WordEntry.Style"


interface IWordEntryProps {
    onGuessEntered(guess: string): void,
    onGuessComplete(): void
}

const WordEntry = ({ onGuessEntered, onGuessComplete } : IWordEntryProps) => {

    const [value, setValue] = useState('')
    const wordEntryRef = useRef<HTMLInputElement>(null);

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

    const handleEnterPressed = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(value.length < 5) return
        if (e.key === "Enter") {
            handleGuessComplete()
        }
    }

    const handleGuessComplete = () => {
        // clear and set focus to word entry
        setValue('')
        wordEntryRef?.current?.focus()
        onGuessComplete()
    }

    return (
        <>
            <StyledWordEntryContainer>
                <StyledWordEntry
                    autoFocus
                    placeholder='Enter your guess...' 
                    value={value}
                    maxLength={5}
                    onChange={(e) => handleLetterEntry(e)}
                    ref = {wordEntryRef}
                    onKeyPress = {e => handleEnterPressed(e)}
                />

                {
                    (value.length !== 5) ? '' :
                        <StyledEvaluateButton onClick={handleGuessComplete} >
                            Guess
                        </StyledEvaluateButton>
                }
            </StyledWordEntryContainer>
            
        </>
    )
}

export default WordEntry