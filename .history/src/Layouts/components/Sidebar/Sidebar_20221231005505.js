import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import config from '~/config';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import { HomeIcon, LiveIcon,UserGroupIcon } from '~/components/Icon/Icon';

const cx = classNames.bind(style);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For Your" to={config.routes.home} icon=<HomeIcon /> />
        <MenuItem title="Following" to={config.routes.following} icon={null} />
        <MenuItem title="Live" to={config.routes.live} icon=<LiveIcon /> />
      </Menu>
    </aside>
  );
}

export default Sidebar;
