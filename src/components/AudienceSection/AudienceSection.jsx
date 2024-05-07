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

const AudienceSection = () => {
    return (
        <Section>
            <Title>
                <svg width="25" height="25">
                    <use href="../../../public/img/icons.svg#icon-audience"></use>
                </svg>
                <p>Sound Audience</p>
            </Title>
        </Section>
    )
}

export default AudienceSection