import React from 'react';
import {NavLink} from 'react-router-dom';

import './header.css';
import {SearchForm} from '../SearchForm/SearchForm';
import {UserAccount} from '../UserAccount/UserAccount';

const Header = () => {
    return (
        <div className='header__container container'>
            <nav className='header__nav'>
                <ul className='header__nav-list'>
                    <NavLink to={'/'}>
                        <li>
                            <img src='https://canshop.com.ua/wp-content/uploads/fake-logo-2.png' alt='Home'/>
                        </li>
                    </NavLink>
                    <NavLink to={'Movies'}>
                        <li>Films</li>
                    </NavLink>
                </ul>
            </nav>
            <div className='header__user-action'>
                <SearchForm/>
                <UserAccount/>
            </div>
        </div>
    );
};

export {Header};