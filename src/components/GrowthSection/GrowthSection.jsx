import styled from "styled-components"
import { BiSolidLike } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { BsStars } from "react-icons/bs";

const Section = styled.section`
    padding: 53px 40px 0px 40px;
`
const GrowthTitle = styled.p`
    color: rgb(209, 253, 10);
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 6px;
`
const GrowthPanel = styled.ul`
    margin-top: 15px;
    display: flex;
    justify-content: center;
`
const GrowthItem = styled.li`
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    padding: 0px 20px 0px 0px;

    color: rgb(255, 255, 255);
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    & p{
        padding-left: 10px;
    }
`
const LikeWrapper = styled.div`
    width: 40px;
    height: 34px;
    border-radius: 20px;
    background: linear-gradient(180.00deg, rgb(255, 152, 251),rgb(255, 231, 105) 100%),rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
`
const LocationWrapper = styled.div`
    width: 83px;
    height: 34px;
    border-radius: 20px;
    background: #FFE600;
    display: flex;
    justify-content: center;
    align-items: center;
    & span{
        color: rgb(0, 0, 0);
        font-size: 20px;
        font-weight: 700;
    }
`
const LikeIcon = styled(BiSolidLike)`
    width: 12px;
    height: 15px;
    fill: #000000;
`
const StarsWrapper = styled.div`
    width: 60px;
    height: 34px;
    border-radius: 20px;
    background: rgb(0, 255,  148);
    display: flex;
    justify-content: center;
    align-items: center;
    & span{
        color: rgb(0, 0, 0);
        font-size: 20px;
        font-weight: 700;
    }
`
const StarsIcon = styled(BsStars)`
    width: 16px;
    height: 14px;
    fill: #0D0D0E;
`
const LocationIcon = styled(MdLocationPin)`
    width: 16px;
    height: 14px;
    fill: #0D0D0E;
`

const GrowthSection = () => {
    return (
        <Section>
            <GrowthTitle>
                <svg width="16" height="16">
                    <use href="../../../public/img/icons.svg#icon-growth"></use>
                </svg>
                <p>Growth</p>
            </GrowthTitle>
            <GrowthPanel>
                <GrowthItem>
                    <LikeWrapper><LikeIcon /></LikeWrapper>
                    <p>High Trending Chance</p>
                </GrowthItem>
                <GrowthItem>
                    <StarsWrapper><StarsIcon /><span>8</span></StarsWrapper>
                    <p>Sound assessment  from our AI</p>
                </GrowthItem>
                <GrowthItem>
                    <LocationWrapper><LocationIcon /><span>25%</span></LocationWrapper>
                    <p>Geo Popularity</p>
                </GrowthItem>
            </GrowthPanel>
        </Section>
    )
}

export default GrowthSection