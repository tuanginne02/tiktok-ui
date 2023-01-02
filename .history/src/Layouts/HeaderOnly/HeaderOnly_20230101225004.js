import Header from '~/layouts/components/Header';
import style from './HeaderOnly.module.scss';
import Footer from '~/layouts/components/Footer';
import classNames from 'classnames/bind';


const cx = classNames.bind(style);

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default HeaderOnly;
