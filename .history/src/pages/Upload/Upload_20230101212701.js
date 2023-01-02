import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp, faToggleOff } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import style from './Upload.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(style);

function Upload() {
  const [myCar, setMyCar] = useState('Volvo');

  const handleChange = (event) => {
    setMyCar(event.target.value);
  };

  return (
    <div className={cx('upload')}>
      <div className={cx('body-upload')}>
        <div className={cx('body-upload-container')}>
          <div className={cx('header-upload')}>
            <span className={cx('header-title')}>Upload video</span>
            <div className={cx('header-title-upload')}>
              <span className={cx('title')}>Post a video to your account</span>
            </div>
          </div>
        </div>
        <div className={cx('content-upload')}>
          <div className={cx('item-right')}>
            <div className={cx('content-post-upload')}>
              <input type="file" accept="video/*" className={cx('inp-post')}></input>
              <div className={cx('content-post')}>
                <FontAwesomeIcon className={cx('icon-upload')} icon={faCloudArrowUp} />
                <div className={cx('content-post-title')}>Select video to upload</div>
                <div className={cx('sports-upload')}>Or drag and drop a file</div>
                <div className={cx('standard-post-upload')}>
                  <div className={cx('title-uncle')}>MP4 or WebM</div>
                  <div className={cx('title-uncle')}>720x1280 resolution or higher</div>
                  <div className={cx('title-uncle')}>Up to 10 minutes</div>
                  <div className={cx('title-uncle')}>Less than 2 GB</div>
                </div>
                <Button className={cx('post-upload-btn')} primary>
                  Select file
                </Button>
              </div>
            </div>
          </div>
          <div className={cx('item-left')}>
            <div className={cx('content-manipulation-upload')}>
              <div className={cx('caption')}>
                <span className={cx('hetitle')}>Caption</span>
                <input type="text" className={cx('inp-caption')} />
              </div>
              <div className={cx('cover')}>
                <span className={cx('hetitle')}>Cover</span>
                <input type="text" className={cx('inp-cover')} />
              </div>
              <div className={cx('check-watch-video')}>
                <span className={cx('hetitle')}>Watch video</span>
                <select className={cx('inp-check-watch')} value={myCar} onChange={handleChange}>
                  <option value="Public">Public</option>
                  <option value="Firends">Firends</option>
                  <option value="Private">Private</option>
                </select>
                <div className={cx('hetitle')}>Allow user to:</div>
                <div className={cx('check-user')}>
                  <div className={cx('checkbox-user')}>
                    <input type="checkbox" className={cx('inp-check-user')} />
                    Comment
                  </div>
                  <div className={cx('checkbox-user')}>
                    <input type="checkbox" className={cx('inp-check-user')} />
                    Duet
                  </div>
                  <div className={cx('checkbox-user')}>
                    <input type="checkbox" className={cx('inp-check-user')} />
                    Stic
                  </div>
                </div>
              </div>
              <div className={cx('finish-check')}>
                <div className={cx('check-btn')}>
                  Run a copyright check
                  <FontAwesomeIcon icon={faToggleOff} />
                </div>
              </div>
              <div className={cx('title-remind')}>
                <span className={cx('title-remind-title')}>
                  {/* We'll check your video for potential copyright infringements on used sounds. If infringements are found,
                    you can edit the video before posting. */}
                </span>
                <span className={cx('title-remind-btn')}>
                  <Link className={cx('title-remind-btn-link')}>Learn more</Link>
                </span>
              </div>
              <div className={cx('btn-post')}>
                <div>
                  <Button className={cx('post-btn')} primary>
                    Discard
                  </Button>
                </div>
                <div>
                  <Button className={cx('post-btn')} primary>
                    Post
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
