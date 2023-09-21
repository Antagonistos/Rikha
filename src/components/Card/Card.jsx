import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styles from "../../../src/styles/Card.module.css";
import CardPage from "../Pages/CardPage";
import Btn from "../UI/Btn";

const Card = ({ item, getOneCard }) => {
  return (
    <div className={styles.card}>
      <img className={styles.backgroud} src={item.img} alt="" />
      {item.info ? (
        <ul className={styles.info}>
          {item.info.map((item) => (
            <li className={styles.item} key={item.index}>
              {<img src={item.img} alt="" />}
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
      {item.status ? (
        <div
          className={`${styles.status} ${
            item.status === "Top"
              ? styles.top
              : "" || item.status === "New"
              ? styles.new
              : "" || item.status === "Sale"
              ? styles.sale
              : ""
          }`}
        >
          {item.status}
        </div>
      ) : (
        ""
      )}

      <div className={styles.content}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.body}>{item.body}</div>
        <div className={styles.prices}>
          <div>
            <h4 className={styles.pastPrice}>{item.pastPrice}₽</h4>
            <h4 className={styles.price}>{item.price}₽</h4>
          </div>
          <Link to={`/${item.page}/${item.id}`}>
            <Btn onClick={() => getOneCard(item)} text={"Заказать"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
