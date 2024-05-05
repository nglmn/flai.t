import css from "./Header.module.css";

const Header = () => {
    return (
        <header className={css.header}>
            <p className={css.logo}>AI Prediction</p>

            <div className={css.infoBtnContainer}>
                <div className={css.infoContainer}>
                    <p className={css.textInfo}>Last update: 13.03.2024</p>
                    <p className={css.textInfo}>Date added to the platform: 17.12.2023</p>
                </div>
                <div className={css.btnsContainer}>
                    <button type="button" className={css.headerBtn}>
                        <svg className={css.headerIcon} width="20" height="20">
                            <use href="../../../public/img/icons.svg#icon-reload" />
                        </svg>
                        Update
                    </button>
                    <button type="button" className={css.headerBtn}>
                        <svg className={css.headerIcon} width="20" height="20">
                            <use href="../../../public/img/icons.svg#icon-download" className={css.icon} />
                        </svg>
                        Download
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
