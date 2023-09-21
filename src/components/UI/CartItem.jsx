import React, { useEffect, useState } from "react";
import styles from "../../styles/UI/cartItem.module.css";
import Controller from "./controller";
import trashImg from "../../images/trash.png";
const CartItem = ({ item, totalPriceFucn, removeInCart }) => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setCount(item.count);
  }, []);

  useEffect(() => {
    setPrice(item.price * count);
    item.totalPrices = item.price * count;
    totalPriceFucn();
  }, [count]);

  if (count < 1) {
    removeInCart(item);
  }

  return (
    <li className={styles.item}>
      <img className={styles.img} src={item.img} alt="" />
      <h4 className={styles.name}>{item.name}</h4>
      <Controller
        style={{ width: 105, fontSize: 18 }}
        count={count}
        setCount={setCount}
      />
      <div className={styles.price}>
        {" "}
        <h4>{price}₽</h4>
      </div>
      <button onClick={() => removeInCart(item)}>
        <img src={trashImg} alt="" />
      </button>
    </li>
  );
};

export default CartItem;
