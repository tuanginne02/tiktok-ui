import classNames from 'classnames/bind';
import styles from './MenuSetting.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
import PropTypes 

function MenuItem({ data, onClick}) {
  const classes = cx('wrapper-item', {
    separate: data.separate,
  });
  return (
    <Button className={classes} leftIcon={data.icon} to={data.to} rightIcon={(data.icon2)} onClick={onClick}>
      {data.title}
    </Button>
  );
}

export default MenuItem;

