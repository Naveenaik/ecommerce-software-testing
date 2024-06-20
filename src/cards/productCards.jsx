import React from 'react';

// import {useNavigate} from 'react-router-dom'

const ProductCards = ({title,description}) => {

  // const navigate = useNavigate();

  const handleCard = () =>{
    window.open(`/product/${title}`,'_blank');
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-2 ring-opacity-40 max-h-[100vh]" onClick={handleCard}>
      <div className="relative">
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="Product"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">$19.99</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
