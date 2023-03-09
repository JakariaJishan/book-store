import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.panelBg}>
      <div className={styles.innerPanel}>
        <div className={styles.mainPanel}>
          <Link to="/" className={styles.branding}>
            Bookstore CMS
          </Link>
          <Link to="/" className={styles.links}>
            Books
          </Link>
          <Link to="/categories" className={styles.links}>
            Categories
          </Link>
        </div>
        <Link to="#">
          <img src="/user.png" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
