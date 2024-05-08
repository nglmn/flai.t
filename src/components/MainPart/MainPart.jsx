import styled from "styled-components";
import Header from "../Header/Header";
import InfoSection from "../InfoSection/InfoSection";
import GrowthSection from "../GrowthSection/GrowthSection";
import AudienceSection from "../AudienceSection/AudienceSection";
import RelatedSection from "../RelatedSection/RelatedSection";
import RecomendationSection from "../RecomendationSection/RecomendationSection";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #0D0D0E;
`
const MainPart = () => {
    return (
        <MainContainer>
            <Header />
            <InfoSection />
            <GrowthSection />
            <AudienceSection />
            <RelatedSection />
            <RecomendationSection />
        </MainContainer>
    )
}

export default MainPart