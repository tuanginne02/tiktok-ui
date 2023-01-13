import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import style from './FeedBack.module.scss';

const cx = classNames.bind(style);

function FeedBack() {
  const [language, setLanguage] = useState('Public');

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div className={cx('feedBack')}>
      <div className={cx('body-feedBack')}>
        <div className={cx('body-feedBack-container')}>
          <div className={cx('feedBack-header')}>
            <h1>Feedback anh help</h1>
            <div className={cx('feedBack-header-derection')}>
              <span>SECLECT A TOPIC</span>
            </div>
          </div>
          <div className={cx('feedBack-content')}>
            <div className={cx('content-left')}>
              <div className={cx('content-left-items')}>
                <div className={cx('left-item', 'active-left')}>
                  <h3>Suggestion</h3>
                </div>
                <div className={cx('left-item')}>
                  <h3>My Account & Settings</h3>
                  <FontAwesomeIcon className={cx('icon-default')} icon={faChevronRight} />
                </div>
                <div className={cx('left-item')}>
                  <h3>Creator tools</h3>
                  <FontAwesomeIcon className={cx('icon-default')} icon={faChevronRight} />
                </div>
                <div className={cx('left-item')}>
                  <h3>Feed/Search/Share/Embed</h3>
                  <FontAwesomeIcon className={cx('icon-default')} icon={faChevronRight} />
                </div>
                <div className={cx('left-item')}>
                  <h3>Video and Sound</h3>
                  <FontAwesomeIcon className={cx('icon-default')} icon={faChevronRight} />
                </div>
                <div className={cx('left-item')}>
                  <h3>Follow/Like/Comment</h3>
                  <FontAwesomeIcon className={cx('icon-default')} icon={faChevronRight} />
                </div>
                <div className={cx('left-item')}>
                  <h3>Notifications/messages</h3>
                  <FontAwesomeIcon className={cx('icon-default')} icon={faChevronRight} />
                </div>
                <div className={cx('left-item')}>
                  <h3>LIVE</h3>
                  <FontAwesomeIcon className={cx('icon-default')} icon={faChevronRight} />
                </div>
                <div className={cx('left-item')}>
                  <h3>Abuse Report</h3>
                  <FontAwesomeIcon className={cx('icon-default')} icon={faChevronRight} />
                </div>
                <div className={cx('left-item')}>
                  <h3>TikTok Balance</h3>
                  <FontAwesomeIcon className={cx('icon-default')} icon={faChevronRight} />
                </div>
                <div className={cx('left-item')}>
                  <h3>Not Responding/Lagging/Other</h3>
                </div>
              </div>
            </div>
            <div className={cx('content-right')}>
              <div className={cx('content-right-items')}>
                <div className={cx('right-item', 'active-right')}>
                  <h1>FREQUENTLY ASKED QUESTIONS</h1>
                </div>
                <div className={cx('right-item')}>
                  <span>How to log in</span>
                  <FontAwesomeIcon className={cx('icon-default')} icon={faChevronDown} />
                </div>
                <div className={cx('right-item')}>
                  <span>This phone number is already registered</span>
                  <FontAwesomeIcon className={cx('icon-default')} icon={faChevronDown} />
                </div>
                <div className={cx('right-item')}>
                  <span>Why couldn't I complete the payment?</span>
                  <FontAwesomeIcon className={cx('icon-default')} icon={faChevronDown} />
                </div>
                <div className={cx('right-item')}>
                  <span>Why didn't I receive my coins after making a payment?</span>
                  <FontAwesomeIcon className={cx('icon-default')} icon={faChevronDown} />
                </div>
              </div>
            </div>
          </div>
          <div className={cx('feedBack-conten-bt')}>
            <h3>Feedback History</h3>
          </div>
        </div>
        <div className={cx('footer')}>
          <div className={cx('footer-container')}>
            <div className={cx('footer-download')}>
                <div className={cx('footer-download-items')}>
                    <div className={cx('download-item')}>
                        <h3>Download now</h3>
                    </div>
                    <div className={cx('download-logo')}>
                        <div class
                    </div>
                </div>
            </div>
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
      </div>
    </div>
  );
}

export default FeedBack;
