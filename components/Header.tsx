import Link from "next/link";
import React from "react";
import CartBtn from "./CartBtn";

const Header = () => {
  return (
    <header className="shadow-lg">
      <div className="container mx-auto flex items-center py-4">
        <Link className="text-gray-900" href={"/"}>
          PetsPloyShop
        </Link>
        <Link className="text-gray-900 ml-5" href={"/map"}>
          Map(แผนที่)
        </Link>
        <div className="flex mx-auto">
          <div className="relative">
            <input
              type="search"
              className="bg-purple-white border-2 rounded p-3 w-96"
              placeholder="Search..."
            />
          </div>
        </div>
        <div>
          <Link className="ml-auto" href={"/cart"}>
            <CartBtn />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
