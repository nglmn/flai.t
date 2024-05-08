import styled from 'styled-components'

const PremiumPanel = styled.div`
    height: fit-content;
    width: 100%;
    background: rgb(209, 253, 10);
    padding: 19px 15px 15px 15px;
    & p{
        color: rgb(111, 136, 0);
        font-size: 12px;
        font-weight: 600;
        line-height: 110%;
        text-align: left;
    }
    & span{
        color: rgb(0, 0, 0);
        font-size: 16px;
        font-weight: 700;
        line-height: 110%;
        text-align: left;
    }
    & button{
        margin-top: 12px;
        padding: 9px 15px;
        border-radius: 5px;
        background: rgb(0, 0, 0);
        color: rgb(255, 255, 255);
        font-size: 14px;
        font-weight: 700;
        line-height: 110%;
        text-align: left;
        border: none;
    }
`

const ChatPanel = () => {
    return (
        <PremiumPanel>
            <p>Free Plan</p>
            <span>There are 10 free requests left</span>
            <button type='button'>Buy Premium</button>
        </PremiumPanel>
    )
}

export default ChatPanel