import React, {useContext, useState, useEffect, useCallback} from 'react';
import style from './Home.module.sass';
import cx from 'classnames';
import CONSTANTS from '../../constants';
const {THEMES} = CONSTANTS;
import {ThemeContext} from '../../contexts';

/*
  1. Переделать переключение тем на хуки
  2. Добавить переключение темы в Home
*/
function Home () {
  const [theme] = useContext(ThemeContext);
  const classes = cx(style.container, {
    [style.lightTheme]: theme === THEMES.LIGHT,
    [style.darkTheme]: theme === THEMES.DARK,
  });
  return <div className={classes}>HOME PAGE</div>;
}

export default Home;
