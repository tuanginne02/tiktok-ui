import React from 'react';
import classNames from 'classnames';
import style from './Fo.module.scss';

const cx = classNames.bind(style);

function Bottom() {
  <div className={cx('wrapper-bottom')}>
    <h1>Bottom</h1>
  </div>;
}

export default Bottom;
