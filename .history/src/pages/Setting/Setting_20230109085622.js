import className from 'classnames/bind'
import React from 'react'
import style from './Setting.module.scss'

const cx = className.bind(style);


function Setting () {
    return (
        <div className={cx('setting')}>
            <div className={cx('setting-title')}>
                <span className={cx('setting-title-text')}>设置</span>
            </div>
}