import Switch from "react-switch";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClapperboard, faMoon, faSun, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

import {SearchForm} from "../SearchForm/SearchForm";
import css from './Header.module.css'

const Header = ({isDark, handleTheme}) => {

    return (
        <div className={css.headerBox}>
            <Link className="is-flex" to={`/`}>
                <FontAwesomeIcon icon={faClapperboard} size="3x"/>
                <div className={css.emblemTitle}>Movie Addicts</div>
            </Link>
            <SearchForm/>
            <div>
                <div className={css.user}>
                    <div className={css.userIcon}>
                        <FontAwesomeIcon icon={faUserCircle} size="3x"/>
                    </div>
                    <div className={css.userName}>User</div>
                </div>
                <div className={"is-flex is-align-items-center"}>
                    <FontAwesomeIcon icon={faMoon} color={isDark ? "#ffffff" : "#000000"}/>
                    <Switch className={"mx-2"} onColor={"#bdbdbd"} offColor={"#bdbdbd"}
                            uncheckedIcon={<></>} checkedIcon={<></>}
                            onChange={handleTheme} checked={isDark}/>
                    <FontAwesomeIcon icon={faSun} color={isDark ? "#ffffff" : "#000000"}/>
                </div>
            </div>
        </div>
    );
};

export {Header};