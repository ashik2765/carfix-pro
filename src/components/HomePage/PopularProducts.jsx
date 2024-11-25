// Import necessary components if needed
import React from 'react';

const ProductCard = ({ name, price, imageSrc }) => {
  return (
    <div className="border rounded-lg shadow-sm hover:shadow-lg transition-shadow p-4 text-center">
      <img src={imageSrc} alt={name} className="w-24 h-24 mx-auto mb-4" />
      <h3 className="text-lg font-medium">{name}</h3>
      <p className="text-sm text-yellow-500 my-2">★★★★★</p>
      <p className="text-orange-500 font-semibold">${price}</p>
    </div>
  );
};

const PopularPage = () => {
  const products = [
    { name: "Car Engine Plug", price: 20.00, imageSrc: "/assets/images/products/6.png" },
    { name: "Car Air Filter", price: 20.00, imageSrc: "/assets/images/products/3.png" },
    { name: "Cools Led Light", price: 20.00, imageSrc: "/assets/images/products/1.png" },
    { name: "Cools Led Light", price: 20.00, imageSrc: "/assets/images/products/4.png" },
    { name: "Cools Led Light", price: 20.00, imageSrc: "/assets/images/products/5.png" },
    { name: "Cools Led Light", price: 20.00, imageSrc: "/assets/images/products/2.png" },
  ];

  return (
    <section className=" container mx-auto py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-orange-500 font-semibold mb-2">Popular Products</h2>
        <h1 className="text-3xl font-bold mb-4">Browse Our Products</h1>
        <p className="text-gray-600 mb-10">The majority have suffered alteration in some form, by injected humour, or randomized words which don’t look even slightly believable.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard 
              key={index} 
              name={product.name} 
              price={product.price} 
              imageSrc={product.imageSrc} 
            />
          ))}
        </div>

        <button className="mt-8 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
          More Products
        </button>
      </div>
    </section>
  );
};

export default PopularPage;
