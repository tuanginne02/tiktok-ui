import classNames from 'classnames/bind';
import style from './Header.module.scss';
import AccountsItem from '~/components/Accountltems/AccountItem';
import MenuSetting from '~/components/Popper/MenuSetting';
import Button from '~/components/Button';

import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';
import HeaderLeftTippy from '@tippyjs/react/headless';

import { useState, useEffect } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper/indexWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
  faPlus,
  faEllipsisVertical,
  faLanguage,
  faCircleQuestion,
  faKeyboard,
  faMoon,
  faToggleOn,
  faToggleOff,
  faCloudArrowUp,
  faMessage,
  faPaperPlane,
  faRightFromBracket,
  faUser,
  faGear,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon className={cx('iconBackground')} icon={faLanguage} />,
    title: 'English',
    chidren: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'kora',
          title: 'Tiếng Hàn',
        },
        {
          type: 'language',
          code: 'jap',
          title: 'Tiếng Nhật',
        },
        {
          type: 'language',
          code: 'chin',
          title: 'Tiếng Trung',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon className={cx('iconBackground')} icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon className={cx('iconBackground')} icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
  {
    icon: <FontAwesomeIcon className={cx('iconBackground')} icon={faMoon} />,
    icon1: <FontAwesomeIcon className={cx('iconBackground')} icon={faToggleOn} />,
    icon2: <FontAwesomeIcon className={cx('iconBackground')} icon={faToggleOff} />,
    title: 'Dark mode',
  },
];

const MENU_USER = [
  {
    icon: <FontAwesomeIcon className={cx('iconBackground')} icon={faUser} />,
    title: 'View profile',
    to:'/profile',
    separate: true,

  },
  {
    icon: <img className={cx('icon-no')} src="/media/icon/coinTitok.png" alt="Coin Titok" />,
    title: 'Coin Titok',
    to:'/coin-titok',
  },
  {
    icon: <FontAwesomeIcon className={cx('iconBackground')} icon={faGear} />,
    title: 'Setting',
    to:'/setting',
  },
  ...MENU_ITEMS,

  {
    icon: <FontAwesomeIcon className={cx('iconBackground')} icon={faRightFromBracket} />,
    title: 'Log out',
    to:'/logout',
    separate: true,
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const currentUser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);

  //handleLogic
  const handleMenuChange = (menuItems) => {
    switch (menuItems.type) {
      case 'language':
        break;
      default:
    }
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('content')}>
        <div className={cx('logo')}>
          <img style={{ with: '118px', height: '42px' }} src="media/logotiktokcontent.png" alt="TikTok"></img>
        </div>
        <HeaderLeftTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accout</h4>
                <AccountsItem />
                <AccountsItem />
                <AccountsItem />
                <AccountsItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input className={cx('search-input')} type="text" placeholder="Search accout and videos" />

            <button className={cx('search-clear')}>
              <FontAwesomeIcon className={cx('iconBackground')} icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading', 'iconBackground')} icon={faSpinner} />
            <div className={cx('line')}></div>
            <button className={cx('search-button')}>
              <FontAwesomeIcon className={cx('iconBackground')} icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeaderLeftTippy>
        <div className={cx('action')}>
          {currentUser ? (
            <>
              <div className={cx('current-user')}>
                <Tippy delay={[0, 500]} content="Tải Lên" placement="bottom">
                  <div>
                    <button className={cx('action-btn')} to="/upload">
                      <FontAwesomeIcon className={cx('iconBackground')} icon={faCloudArrowUp} />
                    </button>
                  </div>
                </Tippy>
                <Tippy delay={[0, 500]} content="Tin Nhắn" placement="bottom">
                  <div>
                    <button className={cx('action-btn')}>
                      <FontAwesomeIcon className={cx('iconBackground')} icon={faPaperPlane} />
                    </button>
                  </div>
                </Tippy>
                <Tippy delay={[0, 500]} content="Thông Báo" placement="bottom">
                  <div>
                    <button className={cx('action-btn')}>
                      <FontAwesomeIcon className={cx('iconBackground')} icon={faMessage} />
                    </button>
                  </div>
                </Tippy>
              </div>
            </>
          ) : (
            <>
              <Button upload large to="/upload" leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Button large primary to="/login">
                Log in
              </Button>
              <Button rounded className={cx('customs-plugin')}>
                Get app
              </Button>
            </>
          )}

          <MenuSetting items={currentUser ? MENU_USER : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <div>
                <button className={cx('action-btn')} small>
                  <img className={cx('avatar-user')} src="/media/userHoaa.jpg" alt="Avatar" />
                </button>
              </div>
            ) : (
              // </MenuSetting>
              // <MenuSetting items={MENU_ITEMS} onChange={handleMenuChange}>
              <div>
                <button className={cx('action-btn')} small>
                  <FontAwesomeIcon className={cx('iconBackground')} icon={faEllipsisVertical} />
                </button>
              </div>
            )}
          </MenuSetting>
        </div>
      </div>
    </header>
  );
}

export default Header;
