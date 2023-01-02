import Header from '~/layouts/components/Header';
import style from './HeaderOnly.module.scss';
import classNames from 'classnames/bind';
import 

const cx = classNames.bind(style);

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;