import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import config from '~/config';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';

const cx = classNames.bind(style);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For Your" to={config.routes.home} icon={null} />
        <MenuItem title="For Your" to={config.routes.foll} icon={null} />
        <MenuItem title="For Your" to={config.routes.home} icon={null} />
      </Menu>
    </aside>
  );
}

export default Sidebar;
