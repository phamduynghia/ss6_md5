import React from "react";
import { formatmoney } from "../utils/formatData";

export default function CartFooter({ carts }) {
  const totalMoney = carts.reduce(
    (pre, current) => pre + current.price * current.quantity,
    0
  );
  return (
    <div className="border-t pt-3 flex">
      <p>Tổng tiền : {formatmoney(totalMoney)}</p>
    </div>
  );
}
