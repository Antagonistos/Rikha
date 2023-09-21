import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import styles from "../../styles/CardPage.module.css";
import goBackImg from "../../images/arrowLeft.svg";
import Btn from "../UI/Btn";
import { Link } from "react-router-dom";
import ErorPage from "../EROR_PAGE/ErorPage";
import Cards from "../Card/Cards";
import Controller from "../UI/controller.jsx";
const CardPage = ({ item, recommends, getOneCard, addInCart }) => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    setCount(1);
  }, [item]);

  return item ? (
    <div key={item.id} className={styles.page}>
      <Link to={"/"} className={styles.road}>
        <img src={goBackImg} alt="" /> &nbsp; Назад в каталог
      </Link>
      <div className={styles.content}>
        <div className={styles.contentSwiper}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            navigation
          >
            <SwiperSlide>
              <img src={item.img} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={item.img} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.contentInfo}>
          <h1 className="title">{item.name}</h1>
          {item.itemInfo !== undefined ? (
            <div className="">
              <p>Вес: {item.itemInfo.height} грамм</p>
              <ul className={styles.itemInfoItems}>
                <li>
                  Белки <br />
                  <span> {item.itemInfo.protein} г</span>
                </li>
                <li>
                  Углеводы <br />
                  <span> {item.itemInfo.carbohydrate} г</span>
                </li>
                <li>
                  Жиры <br />
                  <span>{item.itemInfo.fats} г</span>
                </li>
                <li>
                  Калорийность <br />
                  <span>{item.itemInfo.ccal} Ккал</span>
                </li>
              </ul>
            </div>
          ) : (
            <div></div>
          )}

          <h4 className={styles.deliver}>
            Доставим за 40 мин <a href="#">Условия доставки</a>
          </h4>
          <div className={styles.body}>
            <span>
              Состав: <br />
            </span>
            {item.body}
          </div>
          <div className={styles.priceItem}>
            <div className={styles.price}>
              <h5 className={styles.pastPrice}>{item.pastPrice}₽</h5>
              <h3 className={styles.newPrice}>{item.price}₽</h3>
            </div>
            <Controller setCount={setCount} count={count} />
            <Btn
              onClick={() => addInCart(item, setCount, count)}
              text={"Заказать"}
            />
          </div>
        </div>
      </div>
      <div className={styles.recommends}>
        <h1 className="title">С этим товаром покупают</h1>
        <Cards getOneCard={getOneCard} goods={recommends.good.slice(1, 5)} />
      </div>
      <div className={styles.comments}>
        <li>
          {/* {comments.name}
          {comments.body} */}
        </li>
      </div>
    </div>
  ) : (
    <ErorPage />
  );
};

export default CardPage;
