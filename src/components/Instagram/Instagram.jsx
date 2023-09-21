import React from "react";
import styles from "../../styles/Instagram.module.css";
import Btn from "../UI/Btn";
import inst from "../../images/inst.svg";

import inst1 from "../../images/instagram/1.jpg";
import inst2 from "../../images/instagram/2.jpg";
import inst3 from "../../images/instagram/3.jpg";
import inst4 from "../../images/instagram/4.jpg";
import inst5 from "../../images/instagram/5.jpg";
import inst6 from "../../images/instagram/6.jpg";

const Instagram = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1 id="contact" className="title">
          А вы уже подписались
          <br /> на наш <span>Instagram?</span>
        </h1>
        <Btn text={"@riksha_sushi"} inst={inst} href={"instgram"} />
      </div>
      <ul className={styles.pageContent}>
        <li className={styles.box1}>
          <img src={inst1} alt="" />
        </li>
        <li className={styles.box2}>
          <img src={inst2} alt="" />
        </li>
        <li className={styles.box3}>
          <img src={inst3} alt="" />
        </li>
        <li className={styles.box4}>
          <img src={inst4} alt="" />
        </li>
        <li className={styles.box5}>
          <img src={inst5} alt="" />
        </li>
        <li className={styles.box6}>
          <img src={inst6} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Instagram;
