import React, { useContext } from "react";
import { Button } from "antd";
import { cartContex } from "../provider/GlobalState";
import { formatmoney } from "../utils/formatData";
export default function ProductCart({ product }) {
  const { addToCart } = useContext(cartContex);
  return (
    <>
      <li className="border rounded-md shadow-sm">
        <div
          style={{
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--APtc5Nnz3w43NQTVrDCon1p33k9xWBgGg&s')`,
          }}
          className={`max-h-[200px] min-h-[200px] bg-no-repeat bg-cover `}
        ></div>
        <div className="p-5 flex flex-col gap-3 items-center">
          <h3>{product.productName}</h3>
          <p>{formatmoney(500000)} </p>
          <Button
            onClick={() => addToCart(product)}
            type="primary"
            className="w-full h-9"
          >
            Add to cart
          </Button>
        </div>
      </li>
    </>
  );
}
