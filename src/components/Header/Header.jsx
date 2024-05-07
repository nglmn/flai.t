import styled from "styled-components";
import { RiLoopRightFill } from "react-icons/ri";
import { GoDownload } from "react-icons/go";
import { useState } from "react";

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 13px 40px;
    background-color: rgb(0, 0, 0);
`
const Logo = styled.p`
    color: rgb(64, 64, 68);
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0%;
    display: flex;
    align-items: center;
`
const InfoAndBtnsWrapper = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
`
const TextInfo = styled.p`
    color: rgb(55, 55, 58);
    font-size: 10px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: right;
`
const BtnsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
`
const HeaderBtn = styled.button`
    width: fit-content;
    height: fit-content;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    gap: 6px;
    align-items: center;
    border: none;

    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;
    color: #8D9095;
    cursor: pointer;
    transition: 250ms all ease;

    &:hover{
        color: #3C6DFF;
    }
`
const IconReload = styled(RiLoopRightFill)`
    width: 20px;
    height: 20px;
    fill: ${props => props.hovered ? '#3C6DFF' : '#8D9095'};
    transition: fill 0.3s ease;
`
const IconDownload = styled(GoDownload)`
    width: 20px;
    height: 20px;
    fill: ${props => props.hovered ? '#3C6DFF' : '#8D9095'};
    transition: fill 0.3s ease;
`

const Header = () => {
    const [isReloadHover, setIsReloadHover] = useState(null);
    const [isDownloadHover, setIsDownloadHover] = useState(null);
    return (
        <HeaderWrapper>
            <Logo>AI Prediction</Logo>
            <InfoAndBtnsWrapper>
                <div>
                    <TextInfo>Last update: 13.03.2024</TextInfo>
                    <TextInfo>Date added to the platform: 17.12.2023</TextInfo>
                </div>
                <BtnsContainer>
                    <HeaderBtn type="button"
                        onMouseEnter={() => setIsReloadHover("true")}
                        onMouseLeave={() => setIsReloadHover(null)} >
                        <IconReload hovered={isReloadHover} />
                        Update
                    </HeaderBtn>
                    <HeaderBtn type="button"
                        onMouseEnter={() => setIsDownloadHover("true")}
                        onMouseLeave={() => setIsDownloadHover(null)} >
                        <IconDownload hovered={isDownloadHover} />
                        Download
                    </HeaderBtn>
                </BtnsContainer>
            </InfoAndBtnsWrapper>
        </HeaderWrapper >
    )
}

export default Header
