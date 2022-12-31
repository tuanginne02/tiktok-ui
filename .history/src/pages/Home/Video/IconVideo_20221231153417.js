import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(style);

function MenuItem({ title, to, icon, activeIcon }) {
  return (
    <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
      <span className={cx('icon')}>{icon}</span>
      <span className={cx('active-icon')}>{activeIcon}</span>
      <span className={cx('title')}>{title}</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};
export default MenuItem;
{/* <div className={cx('icon-body')}>
<button className={cx('video-btn')}>
  <FontAwesomeIcon className={cx('icon-btn')} icon={faHeart} />
  <div className={cx('icon-btn')} icon={faHeart} activeIcon={<HomeActiveIcon />} ></div>
  <strong className={cx('icon-title')}> 111.4K</strong>
</button>
<button className={cx('video-btn')}>
  <FontAwesomeIcon className={cx('icon-btn')} icon={faComment} />
  <strong className={cx('icon-title')}> 500</strong>
</button>
<button className={cx('video-btn')}>
  <FontAwesomeIcon className={cx('icon-btn')} icon={faShare} />
  <strong className={cx('icon-title')}> 210</strong>
</button>
</div> */}