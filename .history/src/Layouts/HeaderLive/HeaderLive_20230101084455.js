import classNames from 'classnames/bind';
import style from './HeaderLive.module.scss';
// import AccountsItem from '~/components/Accountltems/AccountItem';
import MenuSetting from '~/components/Popper/MenuSetting';
import Button from '~/components/Button';
import Search from '../components/Search';
import { InboxIcon, MessageIcon, UploadIcon, CoinTitok } from '~/components/Icon/Icon';
import Image from '~/components/Image';
import config from '~/config';

import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/';
// import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/animations/scale-extreme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // faCircleXmark,
  // faMagnifyingGlass,
  // faSpinner,
  faPlus,
  faEllipsisVertical,
  faLanguage,
  faCircleQuestion,
  faKeyboard,
  faMoon,
  faToggleOn,
  faToggleOff,
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
    icon1: <FontAwesomeIcon className={cx('iconBackground1')} icon={faToggleOn} />,
    icon2: <FontAwesomeIcon className={cx('iconBackground2')} icon={faToggleOff} />,
    title: 'Dark mode',
  },
];

const MENU_USER = [
  {
    icon: <FontAwesomeIcon className={cx('iconBackground')} icon={faUser} />,
    title: 'View profile',
    to: '/profile',
    separate: true,
  },
  {
    icon: <img className={cx('icon-no')} src="/media/icon/coinTitok.png" alt="Coin Titok" />,
    title: 'Coin Titok',
    to: '/coin-titok',
  },
  {
    icon: <FontAwesomeIcon className={cx('iconBackground')} icon={faGear} />,
    title: 'Setting',
    to: '/setting',
  },
  ...MENU_ITEMS,

  {
    icon: <FontAwesomeIcon className={cx('iconBackground')} icon={faRightFromBracket} />,
    title: 'Log out',
    to: '/logout',
    separate: true,
  },
];

function HeaderLive() {
  const currentUser = true;

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
          <Link to={config.routes.home} className={cx('logoLink')}>
            <img style={{ with: '118px', height: '42px' }} src="media/logotiktokcontent.png" alt="TikTok"></img>
          </Link>
        </div>

        <Search />
        <div className={cx('action')}>
          {currentUser ? (
            <>
              <div className={cx('current-user')}>
                <Tippy delay={[0, 500]} content="Tải Lên" placement="bottom">
                  <div>
                    <button className={cx('action-btn')} to="/upload">
                      {/* <FontAwesomeIcon className={cx('iconBackground')} icon={faCloudArrowUp} /> */}

                      <UploadIcon />
                    </button>
                  </div>
                </Tippy>
                <Tippy delay={[0, 500]} content="Tin Nhắn" placement="bottom">
                  <div>
                    <button className={cx('action-btn')}>
                      {/* <FontAwesomeIcon className={cx('iconBackground')} icon={faPaperPlane} /> */}
                      <MessageIcon />
                    </button>
                  </div>
                </Tippy>
                <Tippy delay={[0, 500]} content="Thông Báo" placement="bottom">
                  <div>
                    <button className={cx('action-btn')}>
                      {/* <FontAwesomeIcon className={cx('iconBackground')} icon={faMessage} /> */}
                      <InboxIcon />
                      <span className={cx('badge')}>12</span>
                    </button>
                  </div>
                </Tippy>
                <Tippy delay={[0, 500]} content="Coin" placement="bottom">
                  <div>
                    <button className={cx('action-btn')}>
                      <CoinTitok />
                      <InboxIcon />

                    </button>
                  </div>
                </Tippy>
              </div>
            </>
          ) : (
            <>
              <Button upload large to={config.routes.upload} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Button large primary to="/login">
                Log in
              </Button>
              {/* <Button rounded className={cx('customs-plugin')}>
                Get app
              </Button> */}
            </>
          )}

          <MenuSetting items={currentUser ? MENU_USER : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <div>
                <button className={cx('action-btn')}>
                  <Image className={cx('avatar-user')} src="/media/userHoaa.jpg" alt="Hoaa" fallback="" />
                </button>
              </div>
            ) : (
              // </MenuSetting>
              // <MenuSetting items={MENU_ITEMS} onChange={handleMenuChange}>
              <div>
                <button className={cx('action-btn')}>
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

export default HeaderLive;
