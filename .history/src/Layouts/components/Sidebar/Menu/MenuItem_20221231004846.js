import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';


const cx = classNames.bind(style);

function MenuItem({ title, to, icon }) {
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
MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    // activeIcon: PropTypes.node.isRequired,
};
export default MenuItem;
