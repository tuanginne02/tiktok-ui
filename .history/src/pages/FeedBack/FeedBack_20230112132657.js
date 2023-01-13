import React from 'react';
import classNames from 'classnames/bind';
import style from './Following.module.scss';


const cx = classNames.bind(style);

function FeedBack () {
    return (
        <div className={cx('feedBack')}></div>
    )
}

export default FeedBack;