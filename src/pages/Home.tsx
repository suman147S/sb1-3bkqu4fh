import React from 'react';
import { Calendar, Book, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1920&q=80"
            alt="Church"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-white sm:text-5xl md:text-6xl">
              Welcome to The Lord Reigns Church
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Join us in worship, fellowship, and spiritual growth. Everyone is welcome in God's house.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                to="/about"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
              >
                Learn More
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 md:text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <Calendar className="h-10 w-10 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Weekly Services</h3>
              <p className="mt-2 text-gray-600">Join us every Sunday at 3:00 PM & 5:00 PM</p>
            </div>
            <div className="text-center">
              <Book className="h-10 w-10 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Cottage Prayer</h3>
              <p className="mt-2 text-gray-600">Wednesday nights at 7:00 PM</p>
            </div>
            <div className="text-center">
              <Heart className="h-10 w-10 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Community Service</h3>
              <p className="mt-2 text-gray-600">Regular outreach programs</p>
            </div>
            <div className="text-center">
              <Users className="h-10 w-10 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Youth Ministry</h3>
              <p className="mt-2 text-gray-600">Saturday afternoon at 3:30 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Sermons */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Latest Sermons</h2>
            <p className="mt-4 text-gray-600">Listen to our most recent messages</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Walking in Faith",
                speaker: "Pastor John Smith",
                date: "March 24, 2025",
                image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "The Power of Prayer",
                speaker: "Pastor Sarah Johnson",
                date: "March 17, 2025",
                image: "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Living with Purpose",
                speaker: "Pastor Michael Brown",
                date: "March 10, 2025",
                image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=800&q=80"
              }
            ].map((sermon, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={sermon.image}
                  alt={sermon.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{sermon.title}</h3>
                  <p className="mt-2 text-gray-600">{sermon.speaker}</p>
                  <p className="text-sm text-gray-500">{sermon.date}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Listen Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Upcoming Events</h2>
            <p className="mt-4 text-gray-600">Join us for these special gatherings</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                title: "Easter Sunday Service",
                date: "March 31, 2025",
                time: "9:00 AM & 11:00 AM",
                description: "Join us for a special celebration of resurrection and hope."
              },
              {
                title: "Community Outreach Day",
                date: "April 5, 2025",
                time: "10:00 AM",
                description: "Serving our local community through various volunteer activities."
              }
            ].map((event, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                <p className="mt-2 text-blue-600">{event.date} at {event.time}</p>
                <p className="mt-2 text-gray-600">{event.description}</p>
                <button className="mt-4 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}