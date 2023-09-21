import "./styles/reset.css";
import Header from "./components/Header/Header";
import "./styles/fonts.module.css";
import "./styles/global.css";

import Home from "./components/Home/Home";

import hot from "./images/card/hot.png";
import acute from "./images/card/acute.png";
import philladelpia from "./images/rolles/philladelpia.png";
import { useEffect, useState } from "react";

import comboMixImg from "./images/combo/comboMix.png";
import { Route, Router, Routes } from "react-router";
import ErorPage from "./components/EROR_PAGE/ErorPage";
import Footer from "./components/Footer/Footer";
import Page from "./components/Pages/Page";
import CardPage from "./components/Pages/CardPage";
import Cart from "./components/Cart/Cart";

import bonAqua from "./images/drinks/bonAqua.png";
import cocaCola from "./images/drinks/cocaCola.png";
import drPeppier from "./images/drinks/drPeppier.png";

function App() {
  const fetchComments = async () => {
    await fetch(
      "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10"
    ).then((res) =>
      res
        .json()
        .then((data) => setComments(data))
        .catch((err) => {
          console.log(err);
        })
    );
  };
  useEffect(() => {
    fetchComments();
    setOneCard(JSON.parse(localStorage.getItem("oneItem")));
  }, []);
  const [comments, setComments] = useState([]);
  const [cart, setCart] = useState([]);
  const [oneCard, setOneCard] = useState({});
  const [goods, setGoods] = useState([
    {
      good: [
        {
          id: 1,
          page: "rolle",
          status: "Top",
          info: [
            {
              img: acute,
              name: "Острое",
            },
            {
              img: hot,
              name: "Горячий ролл",
            },
          ],
          count: 1,
          itemInfo: {
            height: 200,
            protein: 7.5,
            carbohydrate: 16.6,
            fats: 3.8,
            ccal: 213,
          },
          name: 'Ролл "Филадельфия',
          body: 'Лосось, сыр "Филадельфия", огурец, авокадо',
          price: 219,
          pastPrice: 269,
          img: philladelpia,
        },
        {
          id: 2,
          page: "rolle",
          status: "New",
          info: [
            {
              img: hot,
              name: "Горячий ролл",
            },
          ],
          count: 1,
          itemInfo: {
            height: 200,
            protein: 7.5,
            carbohydrate: 16.6,
            fats: 3.8,
            ccal: 213,
          },
          name: 'Ролл "Чикен энд Чиз""',
          body: 'Лосось, сыр "Филадельфия", огурец, авокадо',
          price: 219,
          pastPrice: 269,
          img: philladelpia,
        },
        {
          id: 3,
          page: "rolle",
          status: "New",
          info: [
            {
              img: hot,
              name: "Горячий ролл",
            },
          ],
          count: 1,
          itemInfo: {
            height: 200,
            protein: 7.5,
            carbohydrate: 16.6,
            fats: 3.8,
            ccal: 213,
          },
          name: 'Ролл "Сливочная креветка"',
          body: 'Лосось, сыр "Филадельфия", огурец, авокадо',
          price: 199,
          pastPrice: 232,
          img: philladelpia,
        },
        {
          id: 4,
          page: "rolle",
          status: "New",
          info: [
            {
              img: hot,
              name: "Горячий ролл",
            },
          ],
          count: 1,
          itemInfo: {
            height: 200,
            protein: 7.5,
            carbohydrate: 16.6,
            fats: 3.8,
            ccal: 213,
          },
          name: 'Ролл "Сливочная креветка"',
          body: 'Лосось, сыр "Филадельфия", огурец, авокадо',
          price: 199,
          pastPrice: 232,
          img: philladelpia,
        },
      ],
      title: "Суши",
      path: "/sushi",
      key: 1,
    },
    {
      good: [
        {
          id: 5,
          page: "combo",
          name: "Комбо микс",
          body: "Пицца Баварская; Сет Фирменный",
          price: 1399,
          count: 1,
          itemInfo: {
            height: 200,
            protein: 7.5,
            carbohydrate: 16.6,
            fats: 3.8,
            ccal: 213,
          },
          pastPrice: 1499,
          img: comboMixImg,
        },
        {
          id: 6,
          page: "combo",
          name: "Дабл пицца",
          body: "Пицца Баварская; Пицца 4 Сыра; Coca-Cola (1 л)",
          price: 899,
          count: 1,
          itemInfo: {
            height: 200,
            protein: 7.5,
            carbohydrate: 16.6,
            fats: 3.8,
            ccal: 213,
          },
          pastPrice: 999,
          img: comboMixImg,
        },
        {
          id: 7,
          page: "combo",
          name: "Комбо Small party",
          body: "Пицца Неаполитано; Пицца Царская; Сет Суши шок",
          price: 1799,
          count: 1,
          itemInfo: {
            height: 200,
            protein: 7.5,
            carbohydrate: 16.6,
            fats: 3.8,
            ccal: 213,
          },
          pastPrice: 2111,
          img: comboMixImg,
        },
        {
          id: 8,
          page: "combo",
          name: "Комбо Small party",
          body: "Пицца Неаполитано; Пицца Царская; Сет Суши шок",
          price: 1799,
          count: 1,
          itemInfo: {
            height: 200,
            protein: 7.5,
            carbohydrate: 16.6,
            fats: 3.8,
            ccal: 213,
          },
          pastPrice: 2111,
          img: comboMixImg,
        },
      ],
      title: "Комбо",
      path: "/sale",
      key: 2,
    },
    {
      good: [
        {
          id: 9,
          name: "Coca-Cola 0.5",
          price: 150,
          pastPrice: 164,
          img: cocaCola,
          count: 1,
        },
        {
          id: 10,
          name: "BONAQUA негаз.",
          price: 160,
          pastPrice: 180,
          img: bonAqua,
          count: 1,
        },
        {
          id: 11,
          name: "Dr Pepper вишня",
          price: 200,
          pastPrice: 232,
          img: drPeppier,
          count: 1,
        },
        {
          id: 12,
          name: "Coca-Cola 0.5",
          price: 150,
          pastPrice: 164,
          img: cocaCola,
          count: 1,
        },
        {
          id: 13,
          name: "BONAQUA негаз.",
          price: 160,
          pastPrice: 180,
          img: bonAqua,
          count: 1,
        },
        {
          id: 14,
          name: "Dr Pepper вишня",
          price: 200,
          pastPrice: 232,
          img: drPeppier,
          count: 1,
        },
      ],
      title: "Напитки",
      path: "/drink",
      key: 3,
    },
  ]);

  function getOneCard(item) {
    console.log(item);
    localStorage.setItem("oneItem", JSON.stringify(item));
    setOneCard(JSON.parse(localStorage.getItem("oneItem")));
  }

  function addInCart(item, setCount, count) {
    item.count = count;
    if (cart.length == 0) {
      setCart([...cart, item]);
    } else {
      setCart([...cart.filter((p) => p.name !== item.name), item]);
    }
    setCount(1);
  }

  function removeInCart(item) {
    setCart([...cart.filter((p) => p.name !== item.name)]);
  }

  function takeRandomGood() {
    return Math.floor(Math.random() * goods.length);
  }
  return (
    <>
      <div className="App">
        <Header cartLength={cart.length} />
        <Routes>
          {goods.map((item) => (
            <Route
              key={item.key}
              path={item.path}
              element={
                <Page
                  getOneCard={getOneCard}
                  goods={item.good}
                  title={item.title}
                />
              }
            ></Route>
          ))}
          <Route
            path="/"
            element={
              <Home
                randomGood={goods[takeRandomGood()]}
                randomGood2={goods[takeRandomGood()]}
                getOneCard={getOneCard}
              />
            }
          />
          <Route path="*" element={<ErorPage />} />
          <Route
            path="/cart"
            element={
              <Cart removeInCart={removeInCart} cart={cart} setCart={setCart} />
            }
          />

          <Route
            path={`/:page/:id/`}
            element={
              <CardPage
                addInCart={addInCart}
                getOneCard={getOneCard}
                recommends={goods[takeRandomGood()]}
                item={oneCard}
              />
            }
          />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
