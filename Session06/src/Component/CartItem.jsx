import { Button, Image, Modal } from "antd";
import React, { useContext, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { cartContex } from "../provider/GlobalState";

export default function CartItem({ item }) {
  const { downCart, upCart, deleteItem } = useContext(cartContex);
  const [isShowModal, setIsShowModal] = useState(false);

  const handleOk = (id) => {
    deleteItem(id);
    setIsShowModal(false);
  };

  const handleCancel = () => {
    setIsShowModal(false);
  };
  return (
    <>
      <div className="flex items-center justify-between m-6">
        <div className="flex items-center gap-5">
          <Image
            height={50}
            width={50}
            className="rounded-full"
            src={item.image}
          />
          <p>{item.productName}</p>
        </div>

        <div className="flex items-center gap-3">
          <Button onClick={() => downCart(item.id)} size="small">
            -
          </Button>
          <span>{item.quantity}</span>
          <Button onClick={() => upCart(item.id)} size="small">
            +
          </Button>
          <FaRegTrashAlt onClick={() => setIsShowModal(true)} />
        </div>

        <Modal
          title="Xác nhận xóa"
          open={isShowModal}
          onOk={() => handleOk(item.id)}
          onCancel={handleCancel}
        >
          <p>Bạn muốn xóa sản phẩm này khỏi giỏ hàng chứ ?</p>
        </Modal>
      </div>
    </>
  );
}
