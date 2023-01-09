import classNames from 'classnames/bind';
import style from './GetCoin.module.scss';

const cx = classNames.bind(style);

function ButtonCoin() {
  return (
    <div className={cx('button-coin')}>
      <div className={cx('button-coin-icon')} />
      <div className={cx('button-coin-text')} />
    </div>
  );
}
