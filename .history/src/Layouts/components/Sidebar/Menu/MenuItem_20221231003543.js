import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import PropTypes from 'prop-types';

import Menu from './Menu';

const cx = classNames.bind(style);

function MenuItem({title, to , icon}) {
  return <nav className={cx('wrapper')}></nav>;
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
  icon: PropTypes.string
};

export default MenuItem;
