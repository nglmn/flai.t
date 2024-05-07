import { useState } from "react";
import styled from "styled-components";

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


// Styled components
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const CheckboxLabel = styled.label`
  display: block;
  margin: 5px;
`;

const Box = styled.div`
    margin-top: 17px;
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

const RecomendationSection = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const options = ['Option 1', 'Option 2', 'Option 3'];
    return (
        <Section>
            <Title>
                <svg width="25" height="25">
                    <use href="../../../public/img/icons.svg#icon-recom"></use>
                </svg>
                <p><span>Recommendations</span> from AI</p>
            </Title>

            <Box>
                <Content>
                    <Red></Red>
                    <p>😥 you followed <span>2/10</span> recommendations</p>
                </Content>
            </Box>

            <DropdownContainer>
                <DropdownButton onClick={toggleDropdown}>Select Options</DropdownButton>
                <DropdownContent isOpen={isOpen}>
                    {options.map(option => (
                        <CheckboxLabel key={option}>
                            <input
                                type="checkbox"
                                checked={selectedOptions.includes(option)}
                            />
                            {option}
                        </CheckboxLabel>
                    ))}
                </DropdownContent>
            </DropdownContainer>
        </Section>

    )
}

export default RecomendationSection