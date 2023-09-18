import { AccuracyEnum } from "../../utilities/accuracy.utils";

interface ILetterProps {
    position: number,
    value: string,
    accuracy: AccuracyEnum
}

const Letter = (props: ILetterProps) => {
    const { position, value, accuracy } = props

    return (
        <>
            <button style={{ width: '50px', height: '50px' }}>
                {value}
            </button>
        </>
    )
}

export default Letter;