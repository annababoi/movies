import css from './MainLayout.module.css'
import {Footer, Movies} from "../../components";


const MainLayout = ({isDark, handleTheme}) => {
    return (
        <div className={css.MainLayout}>
            <Movies/>
            <Footer/>
        </div>
    );
};

export {MainLayout};