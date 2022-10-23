import css from './Footer.module.css'

const Footer = () => {
    return (
            <footer className={css.footer}>
                <div>
                    <p>Movie addicts by <span><a target={"_blank"} href="https://www.linkedin.com/in/anna-baboi-343817235">Anna Baboi</a>.</span></p>
                    <p>© 2022 movieAdicts.com</p>
                </div>
            </footer>
    );
};

export {Footer};