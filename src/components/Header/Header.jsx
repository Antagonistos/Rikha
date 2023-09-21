import React from "react";
import styles from "../../styles/Header.module.css";
import HeaderNav from "./HeaderNav/HeaderNav";
import logo from "../../images/logo.png";
import Category from "./Category/Category";
import { Link } from "react-router-dom";
const Header = ({ cartLength }) => {
  return (
    <div className={styles.wrapper}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="" />
      </Link>
      <div className={styles.navigator}>
        <HeaderNav cartLength={cartLength} />
        <Category />
      </div>
    </div>
  );
};

export default Header;
