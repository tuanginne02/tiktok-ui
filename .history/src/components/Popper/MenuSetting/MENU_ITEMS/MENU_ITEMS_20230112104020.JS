import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // faCircleXmark,
  // faMagnifyingGlass,
  // faSpinner,
//   faPlus,
//   faEllipsisVertical,
  faLanguage,
  faCircleQuestion,
  faKeyboard,
  faMoon,
  faToggleOn,
  faToggleOff,
//   faRightFromBracket,
//   faUser,
//   faGear,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import style from '~/components/Header/Header.module.scss';
const cx = classNames.bind(style);
let MENU_ITEMS;
export default  MENU_ITEMS = [
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
      // title: 'Keyboard shortcuts',
    },
    {
      icon: <FontAwesomeIcon className={cx('iconBackground')} icon={faMoon} />,
      icon1: <FontAwesomeIcon className={cx('iconBackground1')} icon={faToggleOn} />,
      icon2: <FontAwesomeIcon className={cx('iconBackground2')} icon={faToggleOff} />,
      title: 'Dark mode',
    },
  ];

  // export {* as defaut} MENU_ITEMS;