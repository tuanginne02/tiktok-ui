import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outLine = false,
  small = false,
  large = false,
  xlarge = false,
  upload = false,
  text = false,
  disabled = false,
  rounded = false,
  className,
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outLine,
    small,
    large,
    xlarge,
    upload,
    disabled,
    rounded,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('left-icon')}>{leftIcon}</span>}
      <span className={cx('titile')}>{children}</span>
      {rightIcon && <span className={cx('right-icon')}>{rightIcon}</span>}
    </Comp>
  );
}
Button.propTypes = {
  to:PropTypes.strimg
  href:PropTypes.strimg
  primary:PropTypes.strimg
  outLine:PropTypes.strimg
  small:PropTypes.strimg
  large:PropTypes.strimg
  xlarge:PropTypes.strimg
  upload:PropTypes.strimg
  text:PropTypes.strimg
  disabled:PropTypes.strimg
  rounded:PropTypes.strimg
  className:PropTypes.strimg
  leftIcon:PropTypes.strimg
  rightIcon:PropTypes.strimg
  children:PropTypes.strimg
  onClick:PropTypes.strimg

}
export default Button;