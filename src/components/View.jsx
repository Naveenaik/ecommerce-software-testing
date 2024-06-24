import React, { useState } from "react";
import { useParams } from "react-router-dom";
import devicesData from "../products/devices.json"
import { addCart } from "../handleApi/handleCarts";

const View = ({user}) => {
    const { pId } = useParams();

    const [devices] = useState(devicesData);


    const handleCart =(title,image,price,description) =>{
        user && user._id ? addCart(title,image,price,description,user._id) : alert("Nosfgdg");
    }

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5 mt-10">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-2 ring-opacity-40 m-10 flex justify-center">
          <img 
            className="h-[420px]"
            src={devices[pId].image}
            alt="Product"
          />
        </div>
        <div className="m-10 flex flex-col justify-around">
          <div>{devices[pId].title}</div>
          <div>₹ {devices[pId].price}</div>
          <div>{devices[pId].description}</div>
          <div className="flex justify-around gap-5">
            <button className="bg-[#f3dd39] p-2 rounded hover:bg-[#b3a750bd] w-[50%]" onClick={()=>handleCart(devices[pId].title,devices[pId].image,devices[pId].price,devices[pId].description)}>Add to Cart</button>
            <button className="bg-[#99f339] p-2 rounded hover:bg-[#80b350bd] w-[50%]">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
