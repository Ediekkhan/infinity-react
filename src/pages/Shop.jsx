import React from 'react';

const Shop = () => {

  const products = [
    {
      id: 1,
      name: 'Gym Gloves',
      price: 4.99,
      imageUrl: 'https://media.istockphoto.com/id/909197500/photo/gym-equipment-fitness-routine-and-healthy-lifestyle-concept.jpg?s=612x612&w=0&k=20&c=3--w1iL-NtYMgciDMRscSvkMTNyB1T9B-m1hIcJ-6iQ=',
    },
    {
      id: 2,
      name: 'Yoga Mat',
      price: 29.99,
      imageUrl: 'https://cdn.pixabay.com/photo/2016/10/15/18/29/yoga-mat-1743203_640.jpg',
    },
    {
      id: 3,
      name: 'Resistance Bands',
      price: 19.99,
      imageUrl: 'https://cdn.pixabay.com/photo/2021/06/28/13/53/resistance-bands-6371695_1280.jpg',
    },
    {
      id: 4,
      name: 'Gym Shoes',
      price: 29.99,
      imageUrl: 'https://cdn.pixabay.com/photo/2021/02/24/20/23/tennis-6047437_640.jpg',
    },
    {
      id: 5,
      name: 'Skipping Rope',
      price: 10.99,
      imageUrl: 'https://media.istockphoto.com/id/645357134/photo/fitness-resistance-bands-shallow-depth-of-field-focus-on-handles.jpg?s=612x612&w=0&k=20&c=N3w5Q0uUnirMBOX1x-cbyyVuas5KN04XfDVzz6jp_EA=',
    },
    {
      id: 6,
      name: 'Supplements',
      price: 49.99,
      imageUrl: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/F/E/228194_1708507856.jpg',
    },
    {
      id: 7,
      name: 'Fitness trackers',
      price: 19.99,
      imageUrl: 'https://cdn.pixabay.com/photo/2016/12/13/12/37/heart-rate-monitoring-device-1903997_1280.jpg',
    },
    {
      id: 8,
      name: 'Gym bags and backpacks',
      price: 19.99,
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/84/2154461/1.jpg?4442',
    },
  ];

  return (
    <div className="container  bg-gray-100 mx-auto px-4 py-8">
      <h2 className="text-3xl sm:font-light font-semibold mb-4 text-center ">Shop Our Products</h2>
      <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">


        {products.map(product => (
          <div key={product.id} className="bg-white shadow-md rounded-md overflow-hidden">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">

              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">${product.price}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none">
                Add to Cart
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
