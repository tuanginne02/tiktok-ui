import classNames from 'classnames/bind';
import style from './Header.module.scss';

const cx = classNames.bind(style);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('content')}>
        <div className={cx('logo')}></div>
        <div className={cx('search')}></div>
        <div className={cx('upload')}></div>
        <div className={cx('account')}></div>
      </div>
    </header>
  );
}

export default Header;
