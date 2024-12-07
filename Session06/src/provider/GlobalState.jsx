import React, { useEffect, useState } from "react";
import products from "../data.json";
import Header from "../Component/Header";
import ListProduct from "../Component/ListProduct";
import axios from "axios";
export const cartContex = React.createContext();
export default function GlobalState() {
  const [carts, setCarts] = useState(() => {
    return JSON.parse(localStorage.getItem("carts")) || [];
  });
  const [productAPI, setProductAPI] = useState([]);
  useEffect(() => {
    const response = async () => {
      try {
        await axios
          .get("http://localhost:8080/api.myService.com/v1/products")
          .then((res) => {
            console.log(res);
            setProductAPI(res.data.products);
          });
        // setProductAPI(resp);
      } catch (error) {
        console.error(error);
      }
    };

    response();
  }, []);

  const saveCarts = (carts) => {
    setCarts(carts);
    localStorage.setItem("carts", JSON.stringify(carts));
  };

  const upCart = (id) => {
    const newCarts = carts.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    saveCarts(newCarts);
  };

  const deleteItem = (id) => {
    const item = carts.find((pro) => pro.id === id);
    if (item) {
      const newCarts = carts.filter((pro) => pro.id !== id);
      saveCarts(newCarts);
    } else {
      alert("item not found");
    }
  };

  const downCart = (id) => {
    const newCarts = carts.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 };
      } else {
        return item;
      }
    });
    saveCarts(newCarts);
  };

  const addToCart = (product) => {
    const indexProduct = carts.findIndex((pro) => pro.id === product.id);
    if (indexProduct >= 0) {
      const newCarts = carts.map((pro) => {
        if (pro.id === product.id) {
          return { ...pro, quantity: pro.quantity + 1 };
        } else {
          return pro;
        }
      });
      saveCarts(newCarts);
    } else {
      const newCarts = [...carts, { ...product, quantity: 1 }];
      saveCarts(newCarts);
    }
  };
  return (
    <cartContex.Provider
      value={{ productAPI, addToCart, carts, downCart, upCart, deleteItem }}
    >
      <Header />
      <ListProduct />
    </cartContex.Provider>
  );
}
