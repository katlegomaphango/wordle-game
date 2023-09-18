import styled from "styled-components"
import { accuracyColorMap } from ".."
import { AccuracyEnum } from "../../utilities/accuracy.utils"


export const StyledLetterButton = styled.button< { accuracy: AccuracyEnum} > `
    margin: 2px;
    width: 50px;
    height: 50px;
    border-radius: 2px;
    color: white;
    font-size: 30px;
    font-weight: bold;
    background: ${props => accuracyColorMap.get(props.accuracy)};
`