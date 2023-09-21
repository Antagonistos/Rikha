import React from "react";
import styles from "../../styles/Footer.module.css";
import logo from "../../images/logoWhite.png";
import { Link } from "react-router-dom";

import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import vk from "../../images/vk.svg";

const Footer = () => {
  return (
    <footer>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.info}>
          <ul className={styles.link}>
            <li>
              <Link>О нас</Link>
            </li>
            <li>
              <Link>Доставка и оплата</Link>
            </li>
            <li>
              <Link>Контакты</Link>
            </li>
          </ul>
          <ul className="sociel">
            <a href="facebook.com">
              <img src={facebook} alt="" />
            </a>
            <a href="instagram.com">
              <img src={instagram} alt="" />
            </a>
            <a href="vk.com">
              <img src={vk} alt="" />
            </a>
          </ul>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/pizza">Пицца</Link>
          </li>
          <li>
            <Link to="/sushi">Суши</Link>
          </li>
          <li>
            <Link to="/rolle">Роллы</Link>
          </li>
          <li>
            <Link to="/set">Сеты</Link>
          </li>
          <li>
            <Link to="/wok">Wok</Link>
          </li>
          <li>
            <Link to="/soup">Супы</Link>
          </li>
          <li>
            <Link to="/salate">Салаты</Link>
          </li>
          <li>
            <Link to="/desert">Десерты</Link>
          </li>
          <li>
            <Link to="/drink">Напитки</Link>
          </li>
          <li>
            <Link to="/sale">Акции</Link>
          </li>
        </ul>
        <div className={styles.contact}>
          <a href="#" className={styles.number}>
            +7 (495) 617-14-24
          </a>
          <p>
            c 10:00 до 23:00 <br /> <span>© Рикша. Все права защищены.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
