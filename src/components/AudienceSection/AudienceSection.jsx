import { useQuery } from "@tanstack/react-query"
import { getAudienceData } from "../../api"
import styled from "styled-components"

const Section = styled.section`
    padding: 53px 40px 0px 40px;
`
const Title = styled.div`
    color: "#ffffff";
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 6px;
`
const Bar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
`
const ProgressTitle = styled.div`
    display: flex;
    gap: 9px;
    align-items: center;
    & svg{
        fill: "#ffffff";
        width: 17px;
        height: 17px;
    }
    & p{
        color: rgb(255, 255, 255);
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
    }
`
const ProgressContainer = styled.div`
    position: relative;
    overflow: hidden;
    width: 425px;
    height: 8px;
    background: rgb(33, 33, 34);
`
const ProgressBar = styled.div`
    height: 4px;
    position: absolute;
    top: 50%;
    left: 2px;
    transform: translateY(-50%);
    width: ${(props) => `${props.filled}%`};
    background: rgb(209, 253, 10);
`
const ProgressInfo = styled.div`
    width: 425px;
    display: flex;
    justify-content: space-between;
    & p{
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
    }
`
const Container = styled.div`
    height: 215px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: end;
    margin-top: 31px;
`

const AudienceSection = () => {
    const { data, isLoading, isError } = useQuery({ queryKey: ['audience'], queryFn: () => getAudienceData().then(data => data) })
    if (isLoading) {
        return <p>loading...</p>
    }
    if (isError) {
        return <p>Error</p>
    }
    if (!data) {
        return <p>no data</p>
    }

    return (
        <Section>
            <Title>
                <svg width="25" height="25">
                    <use href="/img/icons.svg#icon-audience"></use>
                </svg>
                <p>Sound Audience</p>
            </Title>
            <Container>
                {data.map(({ name, ratio: filled }, i) => (
                    <Bar key={i}>
                        <ProgressInfo>
                            <ProgressTitle>
                                <svg width="17" height="18">
                                    <use href={`/img/icons.svg#icon-${name.toLowerCase()}`}></use>
                                </svg>
                                <p>{name}</p>
                            </ProgressTitle>
                            <p>{`${filled}%`}</p>
                        </ProgressInfo>
                        <ProgressContainer>
                            <ProgressBar filled={filled}></ProgressBar>
                        </ProgressContainer>
                    </Bar>
                ))
                }
            </Container>
        </Section >
    )
}

export default AudienceSection