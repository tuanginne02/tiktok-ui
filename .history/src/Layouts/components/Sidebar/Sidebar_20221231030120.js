import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '~/components/SuggestedAccounts';

import {
  HomeIcon,
  HomeActiveIcon,
  LiveIcon,
  LiveActiveIcon,
  UserGroupIcon,
  UserGroupActiveIcon,
} from '~/components/Icon/Icon';

const cx = classNames.bind(style);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>
      <SuggestedAccounts lable="Suggested Account" />
      <SuggestedAccounts lable="Following accounts"

" />
    </aside>
  );
}

export default Sidebar;
