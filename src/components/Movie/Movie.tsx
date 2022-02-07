import React, {FC} from 'react';

import {IMovie} from "../../interfaces";
import {urls} from "../../configs";
import {Link} from "react-router-dom";

const Movie:FC<{movie: IMovie}> = ({movie}) => {

    const {id, title, poster_path, vote_average, vote_count} = movie;

    return (
        <Link className='item' to={`movies/${id.toString()}`} state={movie}>
            <div>
                <img src={`${urls.img}${poster_path}`} alt={title}/>
            </div>
            <div>
                <h4>{title}</h4>
                <p>rating: {vote_average} (total votes: {vote_count})</p>
            </div>
        </Link>
    );
};

export {Movie};