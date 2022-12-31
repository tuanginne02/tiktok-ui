import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import {Menu, MenuItem} from './Menu'

const cx = classNames.bind(style);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu />
            <div className={cx('content')}></div>
     
    </aside>
  );
}

export default Sidebar;
