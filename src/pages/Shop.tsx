import React from 'react';

export function Shop() {
  const products = [
    {
      id: 1,
      name: "Naruto Collection Pack",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?auto=format&fit=crop&w=800&q=80",
      category: "Anime"
    },
    {
      id: 2,
      name: "Marvel Heroes Pack",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=800&q=80",
      category: "Movies"
    },
    {
      id: 3,
      name: "Pokemon Starter Set",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?auto=format&fit=crop&w=800&q=80",
      category: "Anime"
    },
    {
      id: 4,
      name: "DC Comics Pack",
      price: 11.99,
      image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=800&q=80",
      category: "Movies"
    },
    {
      id: 5,
      name: "Studio Ghibli Collection",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?auto=format&fit=crop&w=800&q=80",
      category: "Anime"
    },
    {
      id: 6,
      name: "Star Wars Classics",
      price: 13.99,
      image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=800&q=80",
      category: "Movies"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shop Stickers</h1>
        
        {/* Filters */}
        <div className="mb-8">
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-md">All</button>
            <button className="px-4 py-2 bg-white text-gray-600 rounded-md">Anime</button>
            <button className="px-4 py-2 bg-white text-gray-600 rounded-md">Movies</button>
            <button className="px-4 py-2 bg-white text-gray-600 rounded-md">Cartoons</button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-purple-600">${product.price}</span>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}