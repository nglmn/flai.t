import NavigationPanel from "../NavigationPanel/NavigationPanel"
// import bg from "../../../public/img/linesBG.png";
import css from "./App.module.css";
import MainPart from "../MainPart/MainPart";
import ChatPanel from "../ChatPanel/ChatPanel";

const App = () => {
  return (
    <>
      <div className="container">
        <div className={css.interface}>
          <NavigationPanel />
          <MainPart />
          <ChatPanel />
        </div>
        {/* <img src={bg} alt="bg" className={css.bg} /> */}
      </div>
    </>
  )
}

export default App;