import classNames from 'classnames/bind';
import style from './Menu.module.scss'
import PropTypes from 'prop-types';


const cx = classNames.bind(style);

function Menu({children}) {
  return (
    <nav className={cx('wrapper')}>
       {children}
    </nav>
  )
}

export default Menu;
