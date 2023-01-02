
import React from 'react';
import classnames from 'classnames/bind';
import style from './Profile.module.scss'

const cx = classnames.bind(style);


function Profile() {
    return (
        <div className={cx('profile')}>
            <div className={cx('profile-content')}>
                
            </div>
        </div>
    )
  }
  
  export default Profile;
  