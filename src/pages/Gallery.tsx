import React, { useState } from 'react';
import { X } from 'lucide-react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1200&q=80",
      title: "Sunday Worship Service",
      category: "Worship"
    },
    {
      url: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&w=1200&q=80",
      title: "Youth Group Meeting",
      category: "Youth"
    },
    {
      url: "https://images.unsplash.com/photo-1511649475669-e288648b2339?auto=format&fit=crop&w=1200&q=80",
      title: "Community Outreach",
      category: "Outreach"
    },
    {
      url: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=1200&q=80",
      title: "Children's Ministry",
      category: "Children"
    },
    {
      url: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=80",
      title: "Prayer Meeting",
      category: "Prayer"
    },
    {
      url: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?auto=format&fit=crop&w=1200&q=80",
      title: "Music Ministry",
      category: "Worship"
    },
    {
      url: "https://images.unsplash.com/photo-1511649475669-e288648b2339?auto=format&fit=crop&w=1200&q=80",
      title: "Food Drive",
      category: "Outreach"
    },
    {
      url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
      title: "Christmas Celebration",
      category: "Events"
    },
    {
      url: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&w=1200&q=80",
      title: "Bible Study",
      category: "Study"
    }
  ];

  const categories = ["All", ...new Set(images.map(img => img.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Photo Gallery</h1>
          <p className="text-xl text-gray-600">Capturing moments of fellowship and worship</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                  <p className="text-gray-200">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}