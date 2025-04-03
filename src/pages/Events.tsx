import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export function Events() {
  const events = [
    {
      title: "Easter Sunday Service",
      date: "March 31, 2025",
      time: "9:00 AM & 11:00 AM",
      location: "Main Sanctuary",
      description: "Join us for a special celebration of resurrection and hope with worship, fellowship, and activities for children.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Community Outreach Day",
      date: "April 5, 2025",
      time: "10:00 AM",
      location: "Church Parking Lot",
      description: "Serve our local community through various volunteer activities including food distribution and home repairs.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Youth Night",
      date: "April 12, 2025",
      time: "6:30 PM",
      location: "Youth Center",
      description: "An evening of worship, games, and fellowship for students in grades 6-12.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Women's Bible Study",
      date: "Every Tuesday",
      time: "10:00 AM",
      location: "Fellowship Hall",
      description: "Weekly gathering for women to study Scripture and share life together.",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-600">Join us for these special gatherings and activities</p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    src={event.image}
                    alt={event.title}
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">{event.title}</h2>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2 text-blue-600" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <div className="flex gap-4">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Register Now
                    </button>
                    <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Download */}
        <div className="mt-12 text-center">
          <button className="flex items-center mx-auto px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800">
            <Calendar className="h-5 w-5 mr-2" />
            Download Full Calendar
          </button>
        </div>
      </div>
    </div>
  );
}