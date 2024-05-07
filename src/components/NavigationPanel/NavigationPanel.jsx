
import styled from "styled-components";
import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import userPic from "../../../public/img/leftPanel/animoji.png";
import { useState } from "react";

const Navigation = styled.nav`
    height: 860px;
    backdrop-filter: blur(100px);
    background-color: rgba(49, 50, 52, 0.25);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
const BurgerBtn = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgb(33, 33, 34);
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    & svg{
        width: 20px;
        height: 14px;
    }
`
const BtnsWrapper = styled.div`
    display: flex;
    gap: 39px;
    flex-direction: column;
    margin-bottom: 23px;
`
const NavBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
`
const IconRing = styled(FaBell)`
    height: 26px;
    width: 26px;
    fill: ${props => props.hovered ? '#3C6DFF' : '#8D9095'};
    transition: fill 0.3s ease;
`
const IconSettings = styled(IoMdSettings)`
    height: 26px;
    width: 26px;
    fill: ${props => props.hovered ? '#3C6DFF' : '#8D9095'};
    transition: fill 0.3s ease;
`
const Avatar = styled.div`
    width: 50px;
    height: 50px;
    & img{
        border-radius: 50%;
    }
`

const NavigationPanel = () => {
    const [isRingHover, setIsRingHover] = useState(null);
    const [isSettHover, setIsSettHover] = useState(null);
    return (
        <Navigation>
            <BurgerBtn type="button">
                <svg>
                    <use href="/public/img/icons.svg#burger"></use>
                </svg>
            </BurgerBtn>
            <div>
                <BtnsWrapper>
                    <NavBtn type="button"
                        onMouseEnter={() => setIsRingHover('true')}
                        onMouseLeave={() => setIsRingHover(null)}>
                        <IconRing hovered={isRingHover} />
                    </NavBtn>
                    <NavBtn type="button"
                        onMouseEnter={() => setIsSettHover('true')}
                        onMouseLeave={() => setIsSettHover(null)}>
                        <IconSettings hovered={isSettHover} />
                    </NavBtn>
                </BtnsWrapper>
                <Avatar>
                    <img src={userPic} alt="userPic" />
                </Avatar>
            </div>
        </Navigation>
    )
}

export default NavigationPanel