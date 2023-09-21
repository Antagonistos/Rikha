import React, { useEffect, useState } from "react";
import CartItem from "../UI/CartItem.jsx";
import styles from "../../styles/Cart.module.css";

import img01 from "../../images/cart/01.svg";
import img02 from "../../images/cart/02.svg";
import img03 from "../../images/cart/03.svg";
import img04 from "../../images/cart/04.svg";

import map from "../../images/cart/map.jpg";
import Controller from "../UI/controller.jsx";
import Btn from "../UI/Btn.jsx";

function Cart({ cart, removeInCart, setCart }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    totalPriceFucn();
  }, [cart]);

  function totalPriceFucn() {
    setTotalPrice(
      cart.reduce((total, item) => {
        return total + item.totalPrices;
      }, 0)
    );
  }

  return (
    <div className={styles.cart}>
      <ul className={styles.cartItems}>
        {cart.map((item) => (
          <CartItem
            removeInCart={removeInCart}
            totalPriceFucn={totalPriceFucn}
            item={item}
          />
        ))}
      </ul>
      <ul className={styles.order}>
        <li className={styles.item}>
          <h4 className={styles.title}>
            <img className={styles.stepImg} src={img01} alt="" />
            Контактные данные
          </h4>
          <input type="name" placeholder="Ваше Имя" />
          <input type="phone" placeholder="Телефон" />
        </li>
        <li className={styles.item}>
          <h4 className={styles.title}>
            <img className={styles.stepImg} src={img02} alt="" />
            Параметры доставки
          </h4>

          <ul className={styles.radioBtns}>
            <li>
              <input type="radio" name="delivery" id="" />
              <h4>Ближайшее время</h4>
            </li>
            <li>
              <input type="radio" name="delivery" id="" />
              <h4>Самовывоз</h4>
            </li>
            <li>
              <input type="radio" name="delivery" id="" />
              <h4>На дату / время</h4>
            </li>
          </ul>
          <ul className={styles.locate}>
            <input type="text" style={{ width: 378 }} placeholder="Улица" />
            <input type="text" style={{ width: 150 }} placeholder="Дом" />
            <input type="text" style={{ width: 150 }} placeholder="Квартира" />
            <input
              type="text"
              style={{ width: 378 }}
              placeholder="Подьезд/Этаж/Домофон"
            />
          </ul>
          <div className={styles.map}>
            <img src={map} alt="" />
            <h4>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_785_28319)">
                  <path
                    d="M16 1C16.5523 1 17 1.44772 17 2V2.999L22 3V9L19.98 8.999L22.7467 16.5953C22.9105 17.032 23 17.5051 23 17.999C23 20.2082 21.2091 21.999 19 21.999C17.1368 21.999 15.5711 20.7251 15.1265 19.0008L10.8738 19.0008C10.4295 20.7256 8.86357 22 7 22C5.05513 22 3.43445 20.612 3.07453 18.7725C2.43558 18.439 2 17.7704 2 17V4C2 3.44772 2.44772 3 3 3H10C10.5523 3 11 3.44772 11 4V12C11 12.5128 11.386 12.9355 11.8834 12.9933L12 13H14C14.5128 13 14.9355 12.614 14.9933 12.1166L15 12V3H12V1H16ZM7 16C5.89543 16 5 16.8954 5 18C5 19.1046 5.89543 20 7 20C8.10457 20 9 19.1046 9 18C9 16.8954 8.10457 16 7 16ZM19 15.999C17.8954 15.999 17 16.8944 17 17.999C17 19.1036 17.8954 19.999 19 19.999C20.1046 19.999 21 19.1036 21 17.999C21 16.8944 20.1046 15.999 19 15.999ZM17.852 8.999H17V12C17 13.6569 15.6569 15 14 15H12C10.6941 15 9.58312 14.1656 9.17102 13.0009L3.99994 13V15.3542C4.73289 14.5238 5.80528 14 7 14C8.86393 14 10.4301 15.2749 10.874 17.0003H15.1257C15.5693 15.2744 17.1357 13.999 19 13.999C19.2373 13.999 19.4697 14.0197 19.6957 14.0593L17.852 8.999ZM9 8H4V11H9V8ZM20 5H17V7H20V5ZM9 5H4V6H9V5Z"
                    fill="#E07153"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_785_28319">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Доставим за 40 мин
            </h4>
          </div>
        </li>
        <li className={styles.item}>
          <h4 className={styles.title}>
            <img className={styles.stepImg} src={img03} alt="" />
            Параметры оплаты
          </h4>
          <ul className={styles.radioBtns}>
            <li className={styles.item}>
              <input type="radio" name="pay" id="" />
              <h4>Наличные</h4>
            </li>
            <li className={styles.item}>
              <input type="radio" name="pay" id="" />
              <h4>Онлайн оплата</h4>
            </li>
          </ul>
          <h6>Подготовить сдачу с :</h6>
          <input
            style={{ width: 378 }}
            type="text"
            name=""
            id=""
            placeholder="Введите сумму"
          />

          <input type="checkbox" name="payCheckbox" id="payCheckbox" />
          <label htmlFor="payCheckbox">Без сдачи</label>
        </li>
        <li className={`${styles.item} ${styles.lastStep}`}>
          <h4 className={styles.title}>
            <img className={styles.stepImg} src={img04} alt="" />
            Последний шаг
          </h4>
          <ul>
            <li>
              <h6>Количество персон</h6>
              <Controller style={{ width: 84, fontSize: 16 }} />
              <h6>Учебные палочки</h6>
              <Controller style={{ width: 84, fontSize: 16 }} />
              <h4>Бесплатно</h4>
            </li>
          </ul>
          <ul className={styles.price}>
            <li>
              <div>
                <h5>Сумма заказа</h5>
                <h4>{totalPrice} ₽</h4>
              </div>
              <div>
                <h5>Стоимость доставки</h5>
                <h4>0 ₽</h4>
              </div>
            </li>
          </ul>
          <ul>
            <li className={styles.totalPrice}>
              <h4>Итоговая сумма заказа</h4>
              <h2>{totalPrice} ₽ </h2>
            </li>
            <Btn
              onClick={() => setCart([])}
              className={styles.btn}
              text="Подтвердить заказ"
            />
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Cart;
