import classNames from 'classnames/bind';
import style from './Menu.module.scss'
import Prop

const cx = classNames.bind(style);

function Menu({children}) {
  return (
    <nav className={cx('wrapper')}>
       {children}
    </nav>
  )
}

export default Menu;
