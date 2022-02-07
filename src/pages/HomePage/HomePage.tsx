import React from 'react';

import './home.css';
import {MoviesList} from "../../components";

const HomePage = () => {
    return (
        <div className='home container'>
            <MoviesList/>
        </div>
    );
};

export {HomePage};