import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import style from './HeaderOnly.module.scss';
import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import styles from './DefaulyLayout.module.scss';
import Sidebar from '~/layouts/components/Sidebar';
import PropTypes from 'prop-types';


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
