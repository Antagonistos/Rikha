import React from "react";
import styles from "../../styles/About.module.css";
const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <h1 id="about" className="title">
          О компании
        </h1>
        <p className="text">
          Вкусная доставка Рикша подарит Вам незабываемые вкусовые впечатления,
          украсит любой ваш стол и не заставит себя долго ждать. С нами вы
          сможете забыть о готовке, легко сделать приятное родным и близким,
          устроить вкусный праздник или расслабится в кругу друзей. Все блюда
          готовятся исключительно из свежих продуктов и по оригинальным рецептам
          Нашего шеф-повара. Любая позиция из Нашего Меню может оказаться у Вас
          на столе максимум через 60 минут! У вас есть возможность сделать
          предварительный заказ на определенный день и время.
        </p>
      </div>
    </div>
  );
};

export default About;
