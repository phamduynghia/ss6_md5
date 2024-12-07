import { Button, Pagination } from "antd";
import React, { useContext } from "react";
import ProductCart from "./ProductCart";
import { cartContex } from "../provider/GlobalState";

export default function ListProduct() {
  const { productAPI } = useContext(cartContex);

  return (
    <>
      <main className="container m-auto max-w-[1360px] px-[60px] pt-[60px]">
        <h3 className="text-center text-[32px] font-semibold">List Product</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {productAPI.map((pro, index) => {
            return <ProductCart key={index} product={pro} />;
          })}
        </ul>

        <Pagination align="center" defaultCurrent={1} total={50} />
      </main>
    </>
  );
}
