import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import PropTypes from 'prop-types';

import Menu from './Menu';

const cx = classNames.bind(style);

function MenuItem() {
    return <nav className={cx('wrapper')}>{}</nav>;
}

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MenuItem;