import React from 'react';
import logo from './../../assets/img/icons/logo.svg';
import blackLogo from './../../assets/img/icons/logoblack.svg';
import styles from './styles.module.css';

export default ({ darkMode }) => <img className={styles.logo} src={`${darkMode ? logo : blackLogo}`} alt={'Erick Sauri Logo'} title={'Erick Sauri'} />
