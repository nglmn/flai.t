/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";
import { IoMdLock } from "react-icons/io";

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

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
`;

const DropdownContent = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  background-color: transparent;
  width: 100%;
  margin-left: 20px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const CheckboxLabel = styled.label`
    margin-left: 30px;
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    width: 100%;

    color: rgb(255, 255, 255);
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
`;

const Box = styled.div`
    margin-top: 17px;
    margin-bottom: 30px;
    backdrop-filter: blur(100px);
    backdrop-filter: blur(100px);
    background: radial-gradient(70.00% 500.00% at 50% 50%,rgb(33, 33, 34),rgba(33, 33, 34, 0) 100%);
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Content = styled.div`
    position: relative;
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
        & span{
            color: rgb(209, 253, 10);
        }
    }


`
const Red = styled.div`
    overflow: hidden;
    position: absolute;
    width: 300px;
    height: 30px;
    background-color: #ab2626;
    filter: blur(40px);
`

export const Divider = styled.div`
    width: 100%;
    margin-top: 11px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    background-color: rgba(255, 255, 255, 0.05);
`

// Styled components
const TabContainer = styled.div`
    margin-top: 27px;
    display: flex;
    gap: 30px;
`;

const TabButton = styled.button`
    width: fit-content;
    font-size: 14px;
    font-weight: 600;
    background-color: transparent;
    color: ${props => (props.isActive ? '#d1fd0a' : '#8e8f92;')};
    padding: 10px 20px;
    border: none;
    position: relative;
    cursor: ${props => (props.isLocked ? 'not-allowed' : 'pointer')};

    &::after {
        display: ${props => (props.isActive ? 'block' : 'none;')};;
        content: '';
        position: absolute;
        bottom: -11px;
        left: 0;
        width: 100%;
        border: 1px solid rgb(209, 253, 10);
  }
`;

const IconLock = styled(IoMdLock)`
    position: absolute;
    margin-left: 5px;
    top: 0;
    transform: translateY(50%);
    width: 15px;
    height: 17px;
    fill: #D1FD0A;
`

const TabContent = styled.div`
    display: ${props => (props.isActive ? 'block' : 'none')};
    padding: 20px;
`;


//checkbox parent
const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const Label = styled.label`
    color: rgb(255, 255, 255);
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 8px 10px 8px 0px;
    width: fit-content;
    align-items: center;
    background-color: ${props => (props.disabled ? "#212124" : "transparent")};
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
`;

const Indicator = styled.div`
  width: 20px;
  height: 20px;
  color: ${props => (props.disabled ? "#212124" : "transparent")};
  position: relative;
  top: 0em;
  border: 1px solid rgba(255, 255, 255, 0.1);

  ${Input}:not(:disabled):checked  & {
    background-color: #D1FD0A;
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
  }

  ${Input}:checked + &::after {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: #D1FD0A;
  }

  ${Input}:not(:checked) + &::after {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 2px;
    background-color: #D1FD0A;
  }

  &::disabled {
    cursor: not-allowed;
    background: "#212124";
  }
`;

//checkbox relative
const InputCheck = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const IndicatorCheck = styled.div`
  width: 20px;
  height: 20px;
  background: transparent;
  position: relative;
  top: 0em;
  border: 1px solid rgba(255, 255, 255, 0.1);

  ${InputCheck}:not(:disabled):checked  & {
    background-color: #D1FD0A;
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
  }

  ${InputCheck}:checked + &::after {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: #D1FD0A;
  }

  ${InputCheck}:not(:checked) + &::after {
    content: "";
  }

  &::disabled {
    cursor: not-allowed;
    background-color: "#D1FD0A";
  }
`;

const CheckboxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 62px;

`
const Lock = styled(IoMdLock)`
    margin-left: 5px;
    top: 0;
    width: 15px;
    height: 17px;
    fill: #D1FD0A;
`
const LockWrapper = styled.div`
    margin-left: 15px;
    display: flex;
    gap: 9px;
    align-items: center;
    color: rgb(209, 253, 10);
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
`

const RecomendationSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const [activeTab, setActiveTab] = useState(true);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setChecked(!checked)
    };

    const options = ['Duration for segments of your sound promo', 'Option 1', 'Option 2'];
    return (
        <Section>
            <Title>
                <svg width="25" height="25">
                    <use href="/img/icons.svg#icon-recom"></use>
                </svg>
                <p><span>Recommendations</span> from AI</p>
            </Title>

            <TabContainer>
                <TabButton
                    isActive={activeTab}
                    isLocked={false}
                >
                    Base
                </TabButton>
                <TabButton
                    isActive={false}
                    isLocked={true}
                >
                    Advanced
                    {!activeTab ? <IconLock /> : ''}
                    <IconLock isActive={false} />
                </TabButton>
            </TabContainer>
            <Divider />

            <TabContent isActive={true}>
                <Box>
                    <Content>
                        <Red></Red>
                        <p>😥 you followed <span>2/10</span> recommendations</p>
                    </Content>
                </Box>

                <CheckboxWrapper>
                    <Label>
                        <InputCheck
                            onClick={() => setSelectedOption()}
                            type="checkbox"
                            value={selectedOption}
                            checked={selectedOption}
                        />
                        <IndicatorCheck />
                        02:15 Recommendations for your song
                    </Label>
                    <DropdownContainer>
                        <DropdownButton >
                            <Label disabled={false}>
                                <Input
                                    onClick={toggleDropdown}
                                    type="checkbox"
                                    disabled={false}
                                    value={checked}
                                    checked={checked}
                                />
                                <Indicator />
                                Duration for segments of your sound promo
                            </Label>
                        </DropdownButton>
                        <DropdownContent isOpen={isOpen}>
                            {options.map((option, i) => (
                                <CheckboxLabel key={i}>
                                    <InputCheck
                                        key={i}
                                        onClick={() => setSelectedOption(option)}
                                        type="checkbox"
                                        value={selectedOption}
                                        checked={option === selectedOption}
                                    />
                                    <IndicatorCheck />
                                    {option}
                                </CheckboxLabel>
                            ))}
                        </DropdownContent>
                    </DropdownContainer>
                    <Label disabled={true}>
                        <InputCheck
                            disabled={true}
                            type="checkbox"
                            checked={false}
                        />
                        <IndicatorCheck />
                        Release day
                        <LockWrapper>
                            <Lock />
                            Coming Soon
                        </LockWrapper>
                    </Label>
                    <Label>
                        <InputCheck
                            onClick={() => setSelectedOption()}
                            type="checkbox"
                            value={selectedOption}
                            checked={selectedOption}
                        />
                        <IndicatorCheck />
                        Promotion
                    </Label>
                    <Label disabled={true}>
                        <InputCheck
                            disabled={true}
                            type="checkbox"
                            checked={false}
                        />
                        <IndicatorCheck />
                        Duet
                        <LockWrapper>
                            <Lock />
                            Coming Soon
                        </LockWrapper>
                    </Label>
                    <Label disabled={true}>
                        <InputCheck
                            disabled={true}
                            type="checkbox"
                            checked={false}
                        />
                        <IndicatorCheck />
                        The best location for the potential of your sound
                        <LockWrapper>
                            <Lock />
                            Coming Soon
                        </LockWrapper>
                    </Label>
                </CheckboxWrapper>
            </TabContent>

        </Section >
    )
}

export default RecomendationSection;