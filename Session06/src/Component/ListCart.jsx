import React, { useContext } from "react";
import CartHearder from "./CartHearder";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";
import { cartContex } from "../provider/GlobalState";

export default function ListCart() {
  const { carts } = useContext(cartContex);

  return (
    <div className="absolute border w-[500px] right-[-80px] max-h-[600px] rounded-md bg-slate-600 p-5 shadow-md top-11">
      <CartHearder />

      <div className="py-3 flex-col gap-6 max-h-[450px] min-h-[450px] overflow-auto mt-3">
        {carts.length === 0 ? (
          <p className="text-center text-4 ">Chưa có sản phẩm trong giỏ hàng</p>
        ) : (
          <></>
        )}

        {carts.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>

      <CartFooter carts={carts} />
    </div>
  );
}
