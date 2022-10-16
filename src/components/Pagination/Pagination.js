import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import css from './Pagination.css'
import {createPagination, uuidv4} from "../../utils";

const Pagination = ({nextPage, prevPage}) => {
    const {totalPages, currentPage} = useSelector(state => state.movieReducer);
    // const totalPages = 500 // after more than 500 pages api gives an error

    const pages = createPagination({currentPage, totalPages, deltaValue: 3})
    return (
        <nav className="is-centered pagination" role="navigation" aria-label="pagination">
            <ul className={`pagination-list ${css.listContainer}`}>
                <li>
                    <button className="pagination-previous" onClick={prevPage} disabled={currentPage === 1}>Prev</button>
                </li>
                {pages.map(page => page === "..." ? <li key={`ellipsis-${uuidv4()}`}>
                    <span className="pagination-ellipsis">&hellip;</span>
                </li> : <li key={page}>
                    <Link className={`pagination-link ${page === currentPage ? "is-current" : ""}`} to={`?page=${page}`} aria-label={`Goto page ${page}`}>{page}</Link>
                </li>)}
                <li>
                    <button className="pagination-next" onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
                </li>

            </ul>
        </nav>
    );
};

export {Pagination};