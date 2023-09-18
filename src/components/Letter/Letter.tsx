import { AccuracyEnum } from "../../utilities/accuracy.utils";
import { StyledLetterButton } from "./Letter.Style";

interface ILetterProps {
    position: number,
    value: string,
    accuracy: AccuracyEnum
}

const Letter = (props: ILetterProps) => {
    const { position, value, accuracy } = props

    return (
        <>
            <StyledLetterButton accuracy={accuracy}>
                {value}
            </StyledLetterButton>
        </>
    )
}

export default Letter;