import React from 'react';
import { Play, Download, Calendar } from 'lucide-react';

export function Sermons() {
  const sermons = [
    {
      title: "Walking in Faith",
      series: "Faith Foundations",
      speaker: "Brother Suman Raj S",
      date: "March 24, 2022",
      scripture: "Hebrews 11:1-6",
      image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Power of Prayer",
      series: "Spiritual Disciplines",
      speaker: "Sister Sowjanya S",
      date: "March 17, 2023",
      scripture: "James 5:13-18",
      image: "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Living with Purpose",
      series: "Life in Christ",
      speaker: "Sister Navarathnamma",
      date: "March 10, 2023",
      scripture: "Ephesians 2:10",
      image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Grace and Truth",
      series: "Gospel Foundations",
      speaker: "Brother Suman Raj S",
      date: "March 3, 2024",
      scripture: "John 1:14-18",
      image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Sermons</h1>
          <p className="text-xl text-gray-600">Listen to recent messages from our pastoral team</p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-md bg-white">
              <option>All Series</option>
              <option>Faith Foundations</option>
              <option>Spiritual Disciplines</option>
              <option>Life in Christ</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-md bg-white">
              <option>All Speakers</option>
              <option>Brother Suman Raj S</option>
              <option>Siter Sowjanya S</option>
              <option>Sister Navarathnamma</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-md bg-white">
              <option>Sort by Date</option>
              <option>Sort by Title</option>
              <option>Sort by Series</option>
            </select>
          </div>
        </div>

        {/* Sermons Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {sermons.map((sermon, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <img
                  src={sermon.image}
                  alt={sermon.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {sermon.date}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{sermon.title}</h3>
                <p className="text-blue-600 mb-1">{sermon.series}</p>
                <p className="text-gray-600 mb-2">{sermon.speaker}</p>
                <p className="text-gray-500 mb-4">{sermon.scripture}</p>
                <div className="flex gap-4">
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    <Play className="h-4 w-4 mr-2" />
                    Listen
                  </button>
                  <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
            Load More Sermons
          </button>
        </div>
      </div>
    </div>
  );
}