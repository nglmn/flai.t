import styled from "styled-components";
import bell from "../../../public/img/MainPanel/bell.png";

const Section = styled.section`
    padding: 53px 40px 0px 40px;
`
const Title = styled.div`
    color: rgb(209, 253, 10);
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 6px;
    & p{
        color: rgb(255, 255, 255);
        & span{
            color: rgb(209, 253, 10);
        }
    }
`
const Box = styled.div`
    margin-top: 17px;
    backdrop-filter: blur(100px);
    background: rgb(33, 33, 34);
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Content = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    & div{
        width: 62px;
    }
    & p{
        color: rgb(255, 255, 255);
        font-size: 12px;
        font-weight: 600;
        line-height: 15px;
    }
    & button{
        border-radius: 20px;
        background: rgb(209, 253, 10);
        padding: 3px 20px;
        width: fit-content;
        height: fit-content;
        border: none;
        font-size: 12px;
        font-weight: 700;
    }
`

const RelatedSection = () => {
    return (
        <Section>
            <Title>
                <svg width="25" height="25">
                    <use href="/img/icons.svg#icon-related"></use>
                </svg>
                <p><span>Related</span> Sounds</p>
            </Title>
            <Box>
                <Content>
                    <div>
                        <img src={bell} alt="bell" />
                    </div>
                    <p>Notify me when these features start working</p>
                    <button type="button">Notify Me</button>
                </Content>
            </Box>
        </Section>
    )
}

export default RelatedSection