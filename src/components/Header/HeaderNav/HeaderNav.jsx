import React from "react";
import styles from "../../../styles/HeaderNav.module.css";
import profleImg from "../../../images/headerNav/profile.svg";
import cartImg from "../../../images/headerNav/cart.svg";
import { Link } from "react-router-dom";
const HeaderNav = ({ cartLength }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.items}>
        <li>
          <a className={styles.item} href="#about">
            О нас
          </a>
        </li>
        <li>
          <a className={styles.item} href="#">
            Бонусы
          </a>
        </li>
        <li>
          <a className={styles.item} href="#">
            Доставка и оплата
          </a>
        </li>
        <li>
          <a className={styles.item} href="#contact">
            Контакты
          </a>
        </li>
        <li>
          <a className={styles.item} href="#">
            Бонусы
          </a>
        </li>
        <li>
          <a className={styles.item} href="#">
            Вакансии
          </a>
        </li>
      </ul>
      <form action="" className={styles.form}>
        <button className={styles.phone}>
          +7 (495) 617-14-24
          <a href="#"></a>
        </button>

        <p className={styles.text}>c 10:00 до 23:00</p>
      </form>
      <ul className={styles.btns}>
        <a href="#" className={styles.btn}>
          0 ₽
        </a>
        <Link to="/cart" className={styles.btn}>
          <div className={styles.cartCout}>{cartLength}</div>
          <img src={cartImg} alt="" />
        </Link>
        <a href="#" className={styles.btn}>
          <img src={profleImg} alt="" />
        </a>
      </ul>
    </div>
  );
};

export default HeaderNav;
