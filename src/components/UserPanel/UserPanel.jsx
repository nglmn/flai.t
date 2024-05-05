
import userPic from "../../../public/img/leftPanel/animoji.png";
import css from "./UserPanel.module.css";


const UserPanel = () => {
    return (
        <div className={css.panel}>
            <button type="button" className={css.burgerMenu}>
                <svg className={css.burgerIcon} width="24" height="24">
                    <use href="/public/img/icons.svg#burger"></use>
                </svg>
            </button>
            <div className={css.settingsContainer}>
                <div className={css.btnsContainer}>
                    <button type="button" className={css.ring}>
                        <svg className={css.leftPanelIcon} width="26" height="26">
                            <use href="/public/img/icons.svg#ring"></use>
                        </svg>
                    </button>
                    <button type="button" className={css.settings}>
                        <svg className={css.leftPanelIcon} width="26" height="26">
                            <use href="/public/img/icons.svg#setting"></use>
                        </svg>
                    </button>
                </div>
                <div className={css.userAvatar}>
                    <img src={userPic} alt="userPic" className={css.pic} />
                </div>
            </div>
        </div>
    )
}

export default UserPanel