import React, { useState } from 'react';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import style from './Profile.module.scss';
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Share from './Share';

import { ShareTikTok, MoreTiktok, EditProfile, Blocked, NoVideos } from '~/components/Icon/Icon';

const cx = classnames.bind(style);

function Profile() {
  const [isActiveLikedVideos, setIsActiveLikedVideos] = useState(false);
  const [tabLine, setTabLine] = useState(false);

  const handleClickLikedVideos = () => {
    // 👇️ toggle
    setIsActiveLikedVideos((current) => !current);
    setTabLine((current) => !current);
    // setIsActiveLikedVideos(false);
  };

  const handleOnMouseLikedVideos = () => {
    // 👇️ toggle
    setTabLine((current) => !current);
  };

  const renderPreview = (props) => {
    return (
      <div className={cx('preview')} tabIndex="-1" {...props}>
        <PopperWrapper style={{ marginTop: '-35px' }}>
          <Share />
        </PopperWrapper>
      </div>
    );
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
              <div className={cx('edit-profile')}>
                <button className={cx('user-button')}>
                  {/* <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} /> */}
                  <EditProfile className="edit-icon" />
                  Edit profile
                </button>
              </div>
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
              <div>
                {/*visible */}
                <Tippy content="Share" interactive placement="bottom" render={renderPreview}>
                  <div className={cx('share-icon')}>
                    <ShareTikTok />
                  </div>
                </Tippy>
              </div>
              {/* <div className={cx('more-icon')}>
                <MoreTiktok />
              </div> */}
            </div>
          </div>
        </div>
        <div className={cx('profile-body')}>
          <div
            className={cx('btn-body')}
            onClick={handleClickLikedVideos}
          >
            <div
              className={cx('body-videos')}
              // onMouseOver={handleOnMouseLikedVideos}
            >
              <Button
                style={{
                  color: isActiveLikedVideos ? 'rgba(24, 25, 35, 0.3)' : '',
                }}
                // onClick={handleClickLikedVideos}
              >
                Videos
              </Button>
            </div>
            <div
              className={cx('body-likes')}
              style={{
                color: isActiveLikedVideos ? 'black' : '',
              }}
              // onMouseOver={handleOnMouseLikedVideos}
            >
              <Blocked className={cx('icon-block')} />
              <Button
                className={cx('btn-likes')}
                style={{
                  color: isActiveLikedVideos ? 'black' : '',
                }}
                // onClick={handleClickLikedVideos}
              >
                <span id="btn-like">Liked</span>
              </Button>
            </div>
            <div
              className={cx('line-scroll')}
              style={{
                transform: tabLine ? 'translateX(220px)' : 'translateX(0px)',
                // transform: isActiveLikedVideos ? 'translateX(220px)' : 'translateX(0px)',
              }}
            ></div>
          </div>
          <div className={cx('content-body')}>
            {/* onVideos */}
            <div className={cx('on-videos')}>
              <div className={cx('img-onVideos')}>
                {/* <img src='' alt="onVideos"/> */}
                <NoVideos className={cx('icon-novideos')} />
              </div>
              <p className={cx('title-top-novideos')}>Upload your first video</p>
              <p className={cx('title-bottom-novideos')}>Your videos will appear here</p>
            </div>
            <div className={cx('off-videos')}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
