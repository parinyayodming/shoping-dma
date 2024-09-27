// import { Product } from "interfaces";
import Image from "next/image";
import AddToCartBtn from "../components/AddToCartBtn";

async function getData() {
  const data = await fetch(
    "https://uatapi-shop.petsploy.com/api/product/75/get-product-info"
  );
  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }
  const product = await data.json();
  return product;
}

export default async function HomePage() {
  const res = await getData();
  return (
    <div className="container mx-auto py-5">
      <h1 className="my-10">
        Home / แมวเหมี๊ยวชอปแมวเหมี๊ยวชอปแมวเหมี๊ยวชอป /{" "}
        {res.data.products.product_slug}
      </h1>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <Image
            width={400}
            height={400}
            className="w-full"
            src="https://uatseller.petsploy.com/uploads/member/24/store/product/006bd4f4fd6cc3ec67d40a45148408da.webp"
            alt={res.data.products.product_title}
            priority
          />
        </div>
        {/* {res.products.map((row: Product) => ( */}
        <div className="p-2">
          <h1 className="text-2xl">{res.data.products.product_title}</h1>
          <p className="my-5">ขายแล้ว {res.data.products.product_sold}</p>
          <h2 className="text-4xl price mb-5">
            ฿{res.data.products.product_normal_price}
          </h2>
          <AddToCartBtn product={res.data.products} />
        </div>
        {/* ))} */}
      </div>
    </div>
  );
}
