import { CartItem } from "interfaces";
import React from "react";
import { decrement, increment } from "store/features/cartSlice";
import { useAppDispatch } from "store/store";
import QtyBtn from "./QtyBtn";
import Image from "next/image";

interface Props {
  cartItem: CartItem;
}
const CartItemCard = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="py-2 border-b">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light text-surfacee">
                <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      สินค้า
                    </th>
                    <th scope="col" className="px-6 py-4">
                      ราคาต่อชิ้น
                    </th>
                    <th scope="col" className="px-6 py-4">
                      จำนวน
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200 dark:border-white/10">
                    <td>
                      <Image
                        width={400}
                        height={400}
                        className="w-32"
                        src="https://uatseller.petsploy.com/uploads/member/24/store/product/006bd4f4fd6cc3ec67d40a45148408da.webp"
                        alt={cartItem.product.product_title}
                        priority
                      />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-xl">
                      {cartItem.product.product_title}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-xl">
                      ฿{cartItem.product.product_normal_price}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      <QtyBtn
                        qty={cartItem.qty}
                        onDecrease={() => dispatch(decrement(cartItem.product))}
                        onIncrease={() => dispatch(increment(cartItem.product))}
                      />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-xl">
                      ฿{cartItem.qty * cartItem.product.product_normal_price}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;

{
  /* <Image
        src={cartItem.product.thumbnail}
        width={200}
        height={150}
        alt={cartItem.product.title}
        className="rounded-md"
      /> */
}
{
  /* <p className="text-slate-600 text-center">
        {cartItem.product.product_title}
      </p>
      <div className="flex flex-col items-center justify-center gap-3">
        <p>฿{cartItem.product.product_normal_price}</p>
        <p>&#xd7;</p>
        <QtyBtn
          qty={cartItem.qty}
          onDecrease={() => dispatch(decrement(cartItem.product))}
          onIncrease={() => dispatch(increment(cartItem.product))}
        />
      </div> */
}
