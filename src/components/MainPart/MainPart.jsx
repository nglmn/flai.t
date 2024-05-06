import Header from "../Header/Header";
import InfoSection from "../InfoSection/InfoSection";
import GrowthSection from "../GrowthSection/GrowthSection";
import css from "./MainPart.module.css";

const MainPart = () => {
    return (
        <div className={css.mainContainer}>
            <Header />
            <InfoSection />
            <GrowthSection />
        </div>
    )
}

export default MainPart