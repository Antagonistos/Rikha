import React from "react";
import styles from "../../../styles/Category.module.css";
import pizza from "../../../images/foogCategory/pizza.svg";
import dessert from "../../../images/foogCategory/dessert.svg";
import drink from "../../../images/foogCategory/drink.svg";
import rolle from "../../../images/foogCategory/rolle.svg";
import salate from "../../../images/foogCategory/salate.svg";
import set from "../../../images/foogCategory/set.svg";
import soup from "../../../images/foogCategory/soup.svg";
import sushi from "../../../images/foogCategory/sushi.svg";
import wok from "../../../images/foogCategory/wok.svg";
import sale from "../../../images/foogCategory/sale.svg";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.items}>
        <li className={styles.item}>
          <Link to="pizza">
            <img src={pizza} alt="" />
            <p>Пицца</p>
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="dessert">
            <img src={dessert} alt="" />
            <p>Десерт</p>
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="drink">
            <img src={drink} alt="" />
            <p>Напитки</p>
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="rolle">
            <img src={rolle} alt="" />
            <p>Роллы</p>
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="salate">
            <img src={salate} alt="" />
            <p>Салаты</p>
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="set">
            <img src={set} alt="" />
            <p>Сеты</p>
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="soup">
            <img src={soup} alt="" />
            <p>Супы</p>
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="sushi">
            <img src={sushi} alt="" />
            <p>Суши</p>
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="wok">
            <img src={wok} alt="" />
            <p>Вок</p>
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="sale">
            <img src={sale} alt="" />
            <p>Акции</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Category;
