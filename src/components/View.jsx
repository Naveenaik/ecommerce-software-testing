import React from "react";
import { useParams } from "react-router-dom";

const View = () => {
    const { title } = useParams();
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5 mt-10">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-2 ring-opacity-40 max-h-[50vh] m-10">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="Product"
          />
        </div>
        <div className="m-10 flex flex-col justify-around">
          <div>{title}</div>
          <div>Price</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti architecto quam veritatis, voluptatum error consectetur voluptatibus quos molestias, aperiam omnis voluptas in assumenda debitis eum illo numquam et mollitia at.</div>
          <div className="flex justify-around gap-5">
            <button className="bg-[#f3dd39] p-2 rounded hover:bg-[#b3a750bd] w-[50%]">Add to Cart</button>
            <button className="bg-[#99f339] p-2 rounded hover:bg-[#80b350bd] w-[50%]">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
