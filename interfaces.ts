export interface Product {
  product_id: number;
  product_title: string;
  product_normal_price: number;
  product_image: string;
}

export interface CartItem {
  product: Product;
  qty: number;
}

// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   imagePath: string;
// }

// export interface CartItem {
//   product: Product;
//   qty: number;
// }
