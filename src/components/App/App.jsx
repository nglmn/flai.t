import NavigationPanel from "../NavigationPanel/NavigationPanel"
import MainPart from "../MainPart/MainPart";
import ChatPanel from "../ChatPanel/ChatPanel";
import styled from "styled-components";

const Interface = styled.div`
  display: flex;
  flex-direction: row;
`
const Container = styled.div`
  width: 1400px;
`

const App = () => {
  return (
    <Container>
      <Interface>
        <NavigationPanel />
        <MainPart />
        <ChatPanel />
      </Interface>
    </Container>
  )
}

export default App;