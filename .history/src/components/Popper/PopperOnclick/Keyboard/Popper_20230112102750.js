import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import className from 'classnames/bind';
import style from './Setting.module.scss';

const cx = className.bind(style);



function KeyBoard () {
    return(
      <div className={cx('keyboard')}>
        
      </div>
    );
}

export default KeyBoard;
