import React, {FC, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import './movieDetailsPage.css';
import {IMovie} from "../../interfaces";

const MovieDetailsPage: FC = () => {

    const {id} = useParams();
    const {state} = useLocation();

    const {
        title,
        backdrop_path,
        vote_average,
        vote_count,
        overview,
        genre_ids,
        release_date,
        original_language,
        original_title,
    } = state as IMovie;


    return (
        <div className='movie container'>
            <h2>{title}</h2>
            <div className='movie__content'>
                <div>
                    <div className={'movie__info'}>
                        <img src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`} alt={original_title}/>
                    </div>
                </div>
                <div>
                    <p>rating: <span>{vote_average}</span> (total votes: <span>{vote_count}</span>)</p>
                    <p>release: <span>{release_date}</span></p>
                    <p>language: <span>{original_language}</span></p>
                </div>
                <p>{overview}</p>
            </div>
        </div>
    );
};

export {MovieDetailsPage};