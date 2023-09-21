import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "../Card/Card";

import style from "../../styles/home.module.css";
import Cards from "../Card/Cards";
import Category from "../Header/Category/Category";
import About from "../About/About";
import Instagram from "../Instagram/Instagram";

const Home = (props) => {
  const [filterGoodArray, setFilterGoodArray] = useState([]);

  useEffect(() => {
    setFilterGoodArray([...props.randomGood.good]);
  }, []);

  return (
    <>
      <a href="#" className={style.goHome}>
        Наверх
      </a>
      <div className={style.banner}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation
        >
          <SwiperSlide>
            <div className={style.bannerSlide}>
              <h1>
                Калифорния <span>в подарок </span>
                <br /> при первом заказе
                <p>от 1500 ₽ </p>
              </h1>
              <button href="#">Подробнее</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.bannerSlide}>
              <h1>
                Калифорния <span>в подарок </span>
                <br /> при первом заказе
                <p>от 1500 ₽ </p>
              </h1>
              <button href="#">Подробнее</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={style.filter}>
        <button
          onClick={() =>
            setFilterGoodArray(
              props.randomGood.good.filter((item) => item.status == "Top")
            )
          }
        >
          Топ позиции
        </button>
        <button
          onClick={() =>
            setFilterGoodArray(
              props.randomGood.good.filter((item) => item.status == "New")
            )
          }
        >
          Новинки
        </button>
      </div>
      <div className="rolles">
        {filterGoodArray.length > 3 ? (
          <>
            <div className="cards">
              <Swiper
                spaceBetween={50}
                slidesPerView={3}
                modules={[Navigation, Pagination]}
                navigation
              >
                {filterGoodArray.map((item) => (
                  <SwiperSlide>
                    <Card getOneCard={props.getOneCard} item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </>
        ) : (
          <div className="cards">
            {filterGoodArray.map((item) => (
              <Card getOneCard={props.getOneCard} item={item} />
            ))}
          </div>
        )}
      </div>
      <div className="combo">
        <h1 className="title">Меню дня</h1>
        {props.randomGood2.length > 3 ? (
          <>
            <div className="cards">
              <Swiper
                spaceBetween={50}
                slidesPerView={3}
                modules={[Navigation, Pagination]}
                navigation
              >
                {props.randomGood2.good.map((item) => (
                  <SwiperSlide>
                    <Card getOneCard={props.getOneCard} item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </>
        ) : (
          <div className="cards">
            {props.randomGood2.good.map((item) => (
              <Card getOneCard={props.getOneCard} item={item} />
            ))}
          </div>
        )}
      </div>
      <div className="about">
        <About />
      </div>
      <div className="instagram">
        <Instagram />
      </div>
    </>
  );
};

export default Home;
