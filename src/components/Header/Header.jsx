import css from "./Header.module.css"


const Header = () => {
    return(
        <div className={css.headerWrapper}>
            <div className={css.headerContainer}>
                <div className={css.headerInner}>
                    <h1>Should I eat at McDonalds?</h1>
                </div>
            </div>
        </div>
    )
}

export default Header;