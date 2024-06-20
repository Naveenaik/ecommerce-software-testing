import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import { jwtDecode } from "jwt-decode";

const Cart = () => {

  const [cart, setCart] = useState(false);

  useEffect(() => {
    const token = Cookie.get("token");
    if (token) {
      try {
          (Cookie.get("token") && jwtDecode(Cookie.get("token"))._id)
            ? setCart(true)
            : setCart(false);
      } catch (error) {
        console.error("Failed to parse token:", error);
      }
    }
  }, []);

  return  cart ?(
    <div className="grid md:grid-cols-2 gap-5 mt-10">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-2 ring-opacity-40 max-h-[50vh] m-10">
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="Product"
        />
      </div>
      <div className="m-10">Hello guys....</div>
    </div>
  )
  :
 (
    <div className="flex justify-center items-center h-[80vh]">
      <h2>Login to the website</h2>
    </div>
  );

};

export default Cart;
