import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.panelBg}>
      <div className={styles.innerPanel}>
        <div className={styles.mainPanel}>
          <NavLink to="/" className={styles.branding}>
            Bookstore CMS
          </NavLink>
          <NavLink
            to="/"
            className={styles.links}
            style={({ isActive, isPending }) => ({
              opacity: isActive ? '1' : '0.5',
            })}
          >
            Books
          </NavLink>
          <NavLink
            to="/categories"
            className={styles.links}
            style={({ isActive, isPending }) => ({
              opacity: isActive ? '1' : '0.5',
            })}
          >
            Categories
          </NavLink>
        </div>
        <NavLink to="#">
          <img src="/user.png" alt="avatar" />
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
