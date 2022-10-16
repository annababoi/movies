import {useForm} from "react-hook-form";
import {useNavigate, useSearchParams} from 'react-router-dom'
import {useDispatch} from "react-redux";

import {movieActions} from "../../redux/slices";
import css from './SearchForm.module.css'

const SearchForm = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
        const submit = async (search) => {
        if(search.Search) {
            if(window.location.pathname !== '/search') navigate(search.Search ? `/search?search=${search.Search || ''}` : "/search")
            else if (!!search.Search){
                let newSearchParams = {...searchParams, search: search.Search}
                setSearchParams(newSearchParams);
            }
            dispatch(movieActions.searchMovie(search.Search))
        } else {
            navigate('/')
            dispatch(movieActions.getAll())
        }


    };


   const {handleSubmit, register} = useForm()

    return (
        <form onSubmit={handleSubmit(submit)}  className="field has-addons">
            <div className=" control">
                <input defaultValue={searchParams.get('search') ?? ""} className="input control" placeholder={'Enter film'} type="text" {...register('Search')}/>
            </div>
            <div className="control">
                <button className={`control button ${css.searchButton}`}>Search</button>
            </div>
        </form>
    );
};

export {SearchForm};