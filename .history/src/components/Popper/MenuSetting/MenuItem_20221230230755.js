import classNames from 'classnames/bind';
import styles from './MenuSetting.module.scss';
import Button from '~/components/Button';
import PropTypes from 'prop-types';


const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const classes = cx('wrapper-item', {
    separate: data.separate,
  });
  return (
    <Button className={classes} leftIcon={data.icon} to={data.to} rightIcon={data.icon2} onClick={onClick}>
      {data.title}
    </Button>
  );
}
MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};
export default MenuItem;
