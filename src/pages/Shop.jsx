import React from 'react';
import { products } from '../lib/utils';


const Shop = () => {

  return (
    <div className="container  bg-gray-100 mx-auto px-4 py-8">
      <h2 className="text-2xl  md:font-bold sm:font-semibold mb-4 text-center">Shop Our Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">


        {products.map(product => (
          <div key={product.id} className="bg-white shadow-md rounded-md overflow-hidden">
            <img src={product.imageUrl} alt={product.name} className="w-full h-36  md:h-48 sm:h-48 lg:h-48 object-cover" />
            <div className="p-4">

              <div>
                <h3 className="text-sm sm:text-xl md:text-xl font-medium mb-2  ">{product.name}</h3>
                <p className="text-gray-600 mb-2">${product.price}</p>
                <button className="bg-blue-500 text-white text-xs sm:text-sm lg:text-base  md:text-base  md:py-2 font-bold p-2 md:px-4  lg:px-8 rounded-md hover:bg-blue-600 focus:outline-none">
                  Add to Cart
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
