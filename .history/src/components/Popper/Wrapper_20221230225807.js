import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
  return <div className={cx('wrapper', className)}>{children}</div>;
}
Wrapper.propSty
export default Wrapper;
