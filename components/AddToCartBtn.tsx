"use client";
import { Product } from "interfaces";
import React from "react";
import {
  decrement,
  increment,
  productQtyInCartSelector,
} from "store/features/cartSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import { Button } from "./elements";
import QtyBtn from "./QtyBtn";

interface Props {
  product: Product;
}

const AddToCartBtn = (props: Props) => {
  const qty = useAppSelector((state) =>
    productQtyInCartSelector(state, props.product.product_id)
  );
  const dispatch = useAppDispatch();
  if (!qty)
    return (
      <div className="flex">
        <Button onClick={() => dispatch(increment(props.product))}>
          เพิ่มไปยังรถเข็น
        </Button>
      </div>
    );
  return (
    <QtyBtn
      onDecrease={() => dispatch(decrement(props.product))}
      onIncrease={() => dispatch(increment(props.product))}
      qty={qty}
    />
  );
};

export default AddToCartBtn;
