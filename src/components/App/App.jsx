import UserPanel from "../UserPanel/UserPanel"
import bg from "../../../public/img/linesBG.png";
import css from "./App.module.css";
import MainPart from "../MainPart/MainPart";

const App = () => {
  return (
    <>
      <div className="container">
        <div className={css.interface}>
          <UserPanel />
          <MainPart />
        </div>
        {/* <img src={bg} alt="bg" className={css.bg} /> */}
      </div>
    </>
  )
}

export default App