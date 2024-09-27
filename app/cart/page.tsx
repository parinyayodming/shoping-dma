"use client";
import CartItemCard from "components/CartItemCard";
import React from "react";
import { TotalPriceSelector } from "store/features/cartSlice";
import { useAppSelector } from "store/store";

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const totalPrice = useAppSelector(TotalPriceSelector);
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl p-5">รถเข็นของฉัน</h1>
      {cartItems.map((item) => (
        <CartItemCard cartItem={item} />
      ))}
      <p className="text-slate-600 pt-5 text-right text-3xl">
        <span className="mr-5">ราคาสุทธิ</span>{" "}
        <span className="text-slate-900 font-bold">฿{totalPrice}</span>
      </p>
    </div>
  );
};

export default CartPage;
