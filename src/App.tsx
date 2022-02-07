import React from 'react';
import {Routes, Route} from 'react-router-dom'

import './App.css';
import {Layout} from "./components";
import {HomePage, MovieDetailsPage, MoviesPage} from "./pages";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'genres'} element={<MoviesPage/>}/>
                <Route path={'movies/:id'} element={<MovieDetailsPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
