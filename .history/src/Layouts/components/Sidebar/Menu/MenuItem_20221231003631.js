import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import PropTypes from 'prop-types';
import 

const cx = classNames.bind(style);

function MenuItem({ title, to, icon }) {
  return (
    <Link/>
  )
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default MenuItem;
