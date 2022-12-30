import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
//   faCircleXmark,
//   faMagnifyingGlass,
//   faSpinner,
//   faPlus,
//   faEllipsisVertical,
//   faLanguage,
//   faCircleQuestion,
//   faKeyboard,
//   faMoon,
//   faToggleOn,
//   faToggleOff,
  faRightFromBracket,
  faUser,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import style from '~/components/Header/Header.module.scss';
const cx = classNames.bind(style);
// import { MENU_ITEMS } from '../MENU_ITEMS/MENU_ITEMS.JS';
let MENU_USER;
export default MENU_USER = [
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
    // ...MENU_ITEMS,
  
    {
      icon: <FontAwesomeIcon className={cx('iconBackground')} icon={faRightFromBracket} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];