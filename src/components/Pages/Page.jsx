import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import styles from "../../styles/Page.module.css";
import Cards from "../Card/Cards";

import acuteImg from "../../images/card/acute.png";
import hotImg from "../../images/card/hot.png";
import newImg from "../../images/card/new.png";
import saleImg from "../../images/card/sale.png";
import topImg from "../../images/card/top.png";
import CardPage from "./CardPage";

const Page = ({ title, goods, getOneCard }) => {
  const [filterGoods, setFilterGoods] = useState([]);

  useEffect(() => {
    setFilterGoods([...goods]);
  }, [goods]);

  function sortArray(value) {
    switch (value) {
      case ">":
        setFilterGoods([...goods.sort((a, b) => a.price - b.price).reverse()]);
        break;
      case "<":
        setFilterGoods([...goods.sort((a, b) => a.price - b.price)]);
        break;
      default:
        setFilterGoods([...goods.sort((a, b) => a.id - b.id)]);
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.road}>
        <Link to={"/"}>
          <p>Главная </p>
        </Link>
        <p> // {title}</p>
      </div>
      <h1 className="title">{title}</h1>
      <div className={styles.control}>
        <ul className={styles.filter}>
          <button onClick={() => setFilterGoods([...goods])}>Все Товары</button>
          <button
            onClick={() =>
              setFilterGoods(goods.filter((item) => item.status == "Top"))
            }
          >
            <img src={topImg} alt="" /> ТОП-позиции
          </button>
          <button
            onClick={() =>
              setFilterGoods(goods.filter((item) => item.status == "New"))
            }
          >
            <img src={newImg} alt="" /> Новинки
          </button>
          <button
            onClick={() =>
              setFilterGoods(goods.filter((item) => item.status == "Sale"))
            }
          >
            <img src={saleImg} alt="" /> Скидки
          </button>
        </ul>
        <div className={styles.sort}>
          <select onChange={(event) => sortArray(event.target.value)}>
            <option value={"&"}> По умолчанию </option>
            <option value={">"}> По возрастанию </option>
            <option value={"<"}> По убыванию </option>
          </select>
        </div>
      </div>
      <Cards getOneCard={getOneCard} goods={filterGoods} />
    </div>
  );
};

export default Page;
