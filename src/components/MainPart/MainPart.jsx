import Header from "../Header/Header";
import InfoSection from "../InfoSection/InfoSection";
import GrowthSection from "../GrowthSection/GrowthSection";
import AudienceSection from "../AudienceSection/AudienceSection";
import RelatedSection from "../RelatedSection/RelatedSection";
import RecomendationSection from "../RecomendationSection/RecomendationSection";

import css from "./MainPart.module.css";

const MainPart = () => {
    return (
        <div className={css.mainContainer}>
            <Header />
            <InfoSection />
            <GrowthSection />
            <AudienceSection />
            <RelatedSection />
            <RecomendationSection />
        </div>
    )
}

export default MainPart