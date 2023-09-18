

interface IWordEntryProps {
    onGuessEntered(guess: string): void
}

const WordEntry = ({ onGuessEntered } : IWordEntryProps) => {
    return (
        <div>WordEntry</div>
    )
}

export default WordEntry