import React from 'react';
import classnames from 'classnames/bind';
import style from './Profile.module.scss';



const cx = classnames.bind(style);

function Profile() {
  return (
    <div className={cx('profile')}>
      <div className={cx('profile-content')}>
        <div className={cx('profile-header')}>
          <div className={cx('profile-avatar')}>
            <div className={cx('avatar')}>
              <div className={cx('avatar-image')}>
                <img src="" alt="hoaa" />
              </div>
            </div>
            <div className={cx('profile-name')}>
              <div className={cx('profile-name-text')}>Đào Lê Phương Hoa</div>
              <span className={cx('user-name')}></span>
            </div>
          </div>
          <div className={cx('profile-interactive')}></div>
          <div className={cx('profile-bigo')}></div>
          <div className={cx('profile-share')}></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
