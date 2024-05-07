import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { DarkText } from "../InfoSection/InfoSection";
import { useStore } from "../../store";
import styled from "styled-components";


const BottomPart = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 23px;
`
const DropdownWrapper = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`
const Dropdown = styled.div`
  position: relative;
  height: fit-content;
`;

const DropdownButton = styled.button`
    display: flex;
    gap: 10px;
    align-items: center;
    border-radius: 20px;
    background: rgb(33, 33, 34);
    color: rgb(255, 255, 255);
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;
    padding: 12px 15px;
    border: none;       
    cursor: pointer;
`;

const DropdownContent = styled.div`
  display: ${({ isOpen }) => (isOpen === "true" ? 'block' : 'none')};
  position: absolute;
  background: rgb(33, 33, 34);
  width: fit-content;
  z-index: 1;
`;

const DropdownItem = styled.div`
    overflow: hidden;
    padding: 12px 16px;
    color: rgb(255, 255, 255);
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;
    padding: 12px 15px;
    text-decoration: none;
    display: block;
    cursor: pointer;

    &:hover {
        background-color: #f1f1f134;
    }
`;
const UpArrow = styled(FaAngleUp)`
    fill: '#ffffff';
    width: 10px;
    height: 10px;
`
const DownArrow = styled(FaAngleDown)`
    fill: '#ffffff';
    width: 10px;
    height: 10px;
`
const ColorsContainer = styled.div`
    display: flex;
`
const BoxComponent = styled.div`
    height: fit-content;
    padding: 12px 15px;
    border-radius: 20px;
    background: rgb(33, 33, 34);
    display: flex;
    gap: 8px;
    align-items: center;
    & span{
        width: 14px;
        height: 14px;
        border-radius: 10px;
    }
    & p{
        color: rgb(255, 255, 255);
        font-family: Montserrat;
        font-size: 12px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0%;
    }

`


const options = ['Last Week', 'Last Month', 'Last Year'];
const labels = [{ color: '#c704fe', text: 'Growth' }, { color: '#D1FD0A', text: 'AI Prediction' }]

const DropdownComponent = () => {
    const { select, toggleDropdown, isOpen, setSelect } = useStore((state) => state);

    return (
        <BottomPart>
            <DropdownWrapper>
                <DarkText>Date Range</DarkText>
                <Dropdown>
                    <DropdownButton onClick={toggleDropdown}>
                        {select}
                        {isOpen ? <UpArrow /> : <DownArrow />}
                    </DropdownButton>
                    <DropdownContent isOpen={isOpen.toString()}>
                        {options.map((option, index) => (
                            <DropdownItem key={index} onClick={(e) => { setSelect(e.target.textContent); toggleDropdown() }}>{option}</DropdownItem>
                        ))}
                    </DropdownContent>
                </Dropdown>
            </DropdownWrapper>
            <ColorsContainer>
                {labels.map(({ color, text }, i) => (
                    <BoxComponent key={i}>
                        <span style={{ backgroundColor: `${color}` }}></span>
                        <p>{text}</p>
                    </BoxComponent>
                ))}
            </ColorsContainer>
        </BottomPart>
    );
};

export default DropdownComponent