import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';

const cx = classNames.bind(style);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem></MenuItem>
      </Menu>
    </aside>
  );
}

export default Sidebar;
