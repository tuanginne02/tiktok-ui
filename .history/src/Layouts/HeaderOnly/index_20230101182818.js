import Header from '~/layouts/components/Header';
import style from './HeaderOnly.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(style);


function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
