import classNames from 'classnames/bind';
import style from './Menu.module.scss'

const cx = classNames.bind(style);

function Menu({children}) {
  return (
    <nav className={cx('wrapper')}>
        <h2>Sidebar</h2>
    </nav>
  )
}

export default Menu;
