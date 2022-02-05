import React from 'react';

import css from './userAccount.module.css';

const UserAccount = () => {
    return (
        <div className={css.wrap}>
            <div className={css.imgContainer}>
                <i className="far fa-user"></i>
            </div>
            <div className={css.userInfo}>
                <p>User name</p>
            </div>
        </div>
    );
};

export {UserAccount};