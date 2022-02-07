import React, {FC, useEffect} from 'react';

import './moviesList.css';
import {useCustomDispatch, useCustomSelector} from "../../hooks";
import {Movie} from "../Movie/Movie";
import {Loader} from "../Loader/Loader";
import {getAllMovies} from "../../store";

const MoviesList: FC = () => {

    const dispatch = useCustomDispatch();
    const {movies, status, error} = useCustomSelector(state => state.movieReducer);

    useEffect(() => {
        if (!movies.length) dispatch(getAllMovies());
    }, []);

    return (
        <div className={'container-fluid'}>
            {status === 'loading' && <Loader/>}
            {error && <h2>Ooops something wrong...</h2>}
            <div className='list'>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {MoviesList};