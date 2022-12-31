import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import Menu from './Menu';

const cx = classNames.bind(style);

function MenuItem() {
    return <nav className={cx('wrapper')}>{children}</nav>;
}

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MenuItem;