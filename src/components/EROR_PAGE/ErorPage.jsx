import React from "react";
import img404 from "../../images/404.png";
import Btn from "../UI/Btn";
import styles from "../../styles/ErorPage.module.css";
const ErorPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img src={img404} alt="" />
        <h1 className="title">Страница не найдена</h1>
        <p>
          Извините, но страницу, которую Вы пытаетесь найти - не существует.
          Предлагаем Вам перейти на Главную страницу
        </p>
        <Btn text={"На главную"} />
      </div>
    </div>
  );
};

export default ErorPage;
