import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp, faToggleOff } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import style from './Upload.module.scss';
import Button from '~/components/Button';
import Footer from './Footer/Footer';

const cx = classNames.bind(style);

function Upload() {
  //   return (
  //     <div>
  //       <h1>Upload</h1>
  //     </div>
  //   );
  const [viewers, setViewers] = useState('Public');

  const handleChange = (event) => {
    setViewers(event.target.value);
  };
  const [language, setLanguage] = useState('Volvo');

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <>
      <div className={cx('upload')}>
        <div className={cx('body-upload')}>
          <div className={cx('body-upload-container')}>
            <div className={cx('header-upload')}>
              <span className={cx('header-title')}>Upload video</span>
              <div className={cx('header-title-upload')}>
                <span className={cx('title')}>Post a video to your account</span>
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
                    <div className={cx('btn-select')}>
                      <Button className={cx('post-upload-btn')} primary>
                        Select file
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx('item-left')}>
                <div className={cx('content-manipulation-upload')}>
                  <div className={cx('caption')}>
                    <div className={cx('heading-title')}>
                      <span className={cx('title-right')}>Caption</span>
                      <span className={cx('title-left')}>0/150</span>
                    </div>
                    <div className={cx('body-caption')}>
                      <input type="text" className={cx('inp-caption')} />
                      <div className={cx('icon-caption')}>
                        <span>
                          <img src="/media/@key.svg" alt="@" />
                        </span>
                        <span>
                          <img src="/media/@keys.svg" alt="#" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={cx('cover')}>
                    <span className={cx('heading-title')}>Cover</span>
                    <div className={cx('body-cover')}>
                      <div className={cx('inp-cover')}>
                        <div className={cx('videos-wrapper')}></div>
                        <div className={cx('img-wrapper')}></div>
                      </div>
                    </div>
                  </div>
                  <div className={cx('check-watch-video')}>
                    <span className={cx('heading-title')}>Watch video</span>
                    <select className={cx('inp-check-watch')} value={viewers} onChange={handleChange}>
                      <option value="Public">Public</option>
                      <option value="Firends">Firends</option>
                      <option value="Private">Private</option>
                    </select>
                    <div className={cx('title-check')}>
                      <span className={cx('heading-title')}>Allow user to:</span>
                    </div>
                    <div className={cx('check-user')}>
                      <div className={cx('checkbox-user')}>
                        Comment
                        <input type="checkbox" checked='checked' className={cx('inp-check-user')} />
                        <span className={cx('checkmark')}></span>
                      </div>
                      <div className={cx('checkbox-user')}>
                        <input type="checkbox" className={cx('inp-check-user')} />
                        Duet
                      </div>
                      <div className={cx('checkbox-user')}>
                        <input type="checkbox" className={cx('inp-check-user')} />
                        Stich
                      </div>
                    </div>
                  </div>
                  <div className={cx('finish-check')}>
                    <div className={cx('check-btn')}>
                      <span className={cx('heading-title')}> Run a copyright check</span>
                    </div>
                    <FontAwesomeIcon className={cx('toggle-check')} icon={faToggleOff} />
                  </div>
                  <div className={cx('title-remind')}>
                    <span className={cx('title-remind-title')}>
                      We'll check your video for potential copyright infringements on used sounds. If infringements are
                      found, you can edit the video before posting.
                    </span>
                    <span className={cx('title-remind-link')}>
                      <Link className={cx('title-remind-btn-link')}>Learn more</Link>
                    </span>
                  </div>
                  <div className={cx('btn-submit')}>
                    <div className={cx('btn-discard')}>
                      <Button className={cx('discard')}>Discard</Button>
                    </div>
                    <div className={cx('btn-post')}>
                      <Button className={cx('post')}>Post</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**Footer */}
        <div className={cx('footer')}>
          <div className={cx('footer-container')}>
            <div className={cx('footer-header')}>
              <div className={cx('footer-header-logo')}>
                <img className={cx('img-logo')} src="/media/logofooter/logotiktok.png" alt="TikTok" />
                <img className={cx('img-title')} src="/media/logofooter/titletiktok.png" alt="TikTok" />
              </div>
              <div className={cx('footer-header-column')}>
                <h4>Company</h4>
                <span className={cx('column-title-footer')}>About</span>
                <span className={cx('column-title-footer')}>Newsroom</span>
                <span className={cx('column-title-footer')}>Contact</span>
                <span className={cx('column-title-footer')}>Carreers</span>
                <span className={cx('column-title-footer')}>ByteDance</span>
              </div>
              <div className={cx('footer-header-column')}>
                <h4>Programs</h4>
                <span className={cx('column-title-footer')}>Tiktok for Good</span>
                <span className={cx('column-title-footer')}>Advertise</span>
                <span className={cx('column-title-footer')}>Developers</span>
                <span className={cx('column-title-footer')}>Tiktok Rewards</span>
                <span className={cx('column-title-footer')}>Tiktok Browse</span>
                <span className={cx('column-title-footer')}>Tiktok Embeds</span>
              </div>
              <div className={cx('footer-header-column')}>
                <h4>Support</h4>
                <span className={cx('column-title-footer')}>Help Center</span>
                <span className={cx('column-title-footer')}>Safety Center</span>
                <span className={cx('column-title-footer')}>Creator Portal</span>
                <span className={cx('column-title-footer')}>Community Guidelines</span>
                <span className={cx('column-title-footer')}>Transparency</span>
                <span className={cx('column-title-footer')}>accessibility</span>
              </div>
              <div className={cx('footer-header-column')}>
                <h4>Legal</h4>
                <span className={cx('column-title-footer')}>Terms off Use</span>
                <span className={cx('column-title-footer')}>Privacy Policy</span>
              </div>
            </div>
            <div className={cx('footer-bottom')}>
              <div className={cx('footer-bottom-left')}>
                <select className={cx('inp-select-lngua')} value={language} onChange={handleChangeLanguage}>
                  <option value="enl">English</option>
                  <option value="vni">VietNamese</option>
                  <option value="kore">Korea</option>
                </select>
              </div>
              <div className={cx('footer-bottom-right')}>
                <span>© 2023 TikTok</span>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Upload;
