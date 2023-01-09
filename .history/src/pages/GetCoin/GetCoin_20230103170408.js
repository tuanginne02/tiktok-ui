import React from 'react';
import classNames from 'classnames';
import style from './GetCoin.module.scss'

const cx = classNames.bind(style);


function GetCoin() {
    return (
        <div className={cx('get-coin')}>
            <h1>Get </h1>
        </div>
    )
}

export default GetCoin ;