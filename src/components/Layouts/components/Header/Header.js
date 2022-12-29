import classNames from 'classnames/bind';
import style from './Header.module.scss';
import AccountsItem from '~/components/Accountltems/AccountItem';
import MenuSetting from '~/components/Popper/MenuSetting';
import Button from '~/components/Button';

import Tippy from '@tippyjs/react/headless';
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
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: 'English',
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    icon1: <FontAwesomeIcon icon={faToggleOn} />,
    icon2: <FontAwesomeIcon icon={faToggleOff} />,
    title: 'Dark mode',
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('content')}>
        <div className={cx('logo')}>
          <img style={{ with: '118px', height: '42px' }} src="media/logotiktokcontent.png" alt="TikTok"></img>
        </div>
        <Tippy
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
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <div className={cx('line')}></div>
            <button className={cx('search-button')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
 
        <div className={cx('action')}>
          <Button upload large to="/upload" leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Upload
          </Button>
          <Button large primary to="/login">
            Log in
          </Button>
          <MenuSetting items={MENU_ITEMS}>
            <div>
              <Button small>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </Button>
            </div>
          </MenuSetting>
          <Button rounded className={cx('customs-plugin')}>
            Get app
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
