import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import Menu from './Menu';

const cx = classNames.bind(style);

function MenuItem() {
  return;
 <> </>
}

export default MenuItem;
function Menu({ children }) {
    return <nav className={cx('wrapper')}>{children}</nav>;
  }
  
  Menu.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export default Menu;
  