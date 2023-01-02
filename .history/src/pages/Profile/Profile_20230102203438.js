import React, { useState } from 'react';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import style from './Profile.module.scss';

import Button from '~/components/Button';

import { ShareTikTok, MoreTiktok, EditProfile, Blocked } from '~/components/Icon/Icon';

const cx = classnames.bind(style);

function Profile() {
  const [isActiveVideos, setIsActive] = useState(false);

  const handleClickFl = () => {
    // 👇️ toggle
    setIsActive((current) => !current);
  };
  return (
    <div className={cx('profile')}>
      <div className={cx('profile-content')}>
        <div className={cx('profile-header')}>
          <div className={cx('profile-avatar')}>
            <div className={cx('avatar')}>
              <div className={cx('avatar-image')}>
                <img src="/media/imgAccount/DLPH-hoaa.png" alt="hoaa" />
              </div>
            </div>
            <div className={cx('profile-name')}>
              <div className={cx('profile-name-text')}>
                hoaa.hanassii
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
              </div>
              <span className={cx('user-name')}>Đào Lê Phương Hoa</span>
              <button className={cx('user-button')}>
                {/* <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} /> */}
                <EditProfile className="edit-icon" />
                <p> Edit profile</p>
              </button>
            </div>
          </div>
          <div className={cx('profile-interactive')}>
            <div className={cx('interactive')}>
              <div className={cx('interactive-fl')}>
                <strong className={cx('value')}>123</strong>
                <span className={cx('label')}>Following</span>
              </div>

              <div className={cx('interactive-flws')}>
                <strong className={cx('value')}>13.5M</strong>
                <span className={cx('label')}>Followers</span>
              </div>
              <div className={cx('interactive-likes')}>
                <strong className={cx('value')}>331.8M</strong>
                <span className={cx('label')}>Likes</span>
              </div>
            </div>
            <div className={cx('profile-bigo')}>
              <div className={cx('bigo-text')}>
                <span>✨ 1998 ✨</span>
                <p>Vietnam 🇻🇳 </p>
                <p>KHÔNG CÓ NICK PHỤ</p>
              </div>
              <div className={cx('bigo-link')}>
                <p>https://www.facebook.com/hoaa.hanassi</p>
              </div>
            </div>
            <div className={cx('profile-share')}>
              <div className={cx('share-icon')}>
                <ShareTikTok />
              </div>
              <div className={cx('more-icon')}>
                <MoreTiktok />
              </div>
            </div>
          </div>
        </div>
        <div className={cx('profile-body')}>
          <div className={cx('btn-body')}>
            <div className={cx('body-videos')}>
              <Button>Videos</Button>
            </div>
            <div className={cx('body-likes')}>
              <Blocked className={cx('icon-block')} />
              <Button className={cx('btn-likes')}>Liked</Button>
            </div>
          </div>
          <div className={cx('line-scroll')}></div>
          <div className={cx('content-body')}></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
