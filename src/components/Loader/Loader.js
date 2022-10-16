import css from './Loader.module.css'

const Loader = ({isDark, handleTheme}) => {
    return (
        <div className={css.overlay}>
            <div className={css.loader}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export {Loader};