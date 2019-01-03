import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Logo from './../../components/Logo/Logo';
import Navbar from './../../components/Header/Header';

// Navigation
import MobileNav from './../MobileNav/MobileNav';
import Navigation from './../Navigation/Navigation';

// Styles
import styles from './styles.module.css';

export default () => (
  <Navbar>
    {/* Logo */}
    <Link className={styles.link} to=''>
      <Logo />
    </Link>

    {/* Mobile Menu */}
    <section className={styles.mobile_nav}>
      <MobileNav />
    </section>

    {/* Desktop Menu */}
    <section className={styles.nav}>
      <Navigation />
    </section>
  </Navbar>
);
