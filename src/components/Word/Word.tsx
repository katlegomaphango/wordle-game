

interface IWordProps {
    isWordEvaluated: boolean,
    guessWordValue: string
}

const Word = (props: IWordProps) => {
    const { isWordEvaluated, guessWordValue } = props
    
    return (
        <div>Word</div>
    )
}

export default Word