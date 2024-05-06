import styled from "styled-components";
import { DarkText } from "../InfoSection/InfoSection";


const Wrapper = styled.div`
    align-items: center;
    margin-top: 13px;
    display: flex;
    gap: 10px;
`
const KeywordsList = styled.div`
    display: flex;
    gap: 5px;
`
const KeyWord = styled.p`
    height: fit-content;
    width: fit-content;
    border-radius: 20px;
    background: rgb(33, 33, 34);
    padding: 8px 10px;

    color: rgb(255, 255, 255);
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0%;
`

const KeywordsComponent = ({ keywords }) => {
    return (
        <Wrapper>
            <DarkText>Keywords: </DarkText>
            <KeywordsList>
                {keywords.map((word, i) => {
                    return <KeyWord key={i}>{word}</KeyWord>
                })}
            </KeywordsList>
        </Wrapper>
    )
}

export default KeywordsComponent