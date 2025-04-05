import React from 'react';
import { Heart, Users, Book, Smile } from 'lucide-react';

export function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-64 object-cover"
            src="https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&w=1920&q=80"
            alt="Church interior"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-white text-center">About Our Church</h1>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2018, The Lord Reigns Church began with a small group of families committed to sharing God's love in our community.
            </p>
            <p className="text-gray-600 mb-4">
              Our mission is to create a welcoming environment where people can experience God's presence, grow in their faith, and find meaningful community.
            </p>
            <p className="text-gray-600">
              We believe in the power of worship, the importance of Biblical teaching, and the value of serving others through various community outreach programs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Heart className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Love</h3>
              <p className="text-gray-600">Sharing God's love with everyone</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">Building meaningful relationships</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Book className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Scripture</h3>
              <p className="text-gray-600">Grounded in God's Word</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Smile className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Welcome</h3>
              <p className="text-gray-600">Open to all who seek</p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                name: "Suman Raj S",
                role: "Brother",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Sowjanya S",
                role: "Worship Leader",
                image: "https://i.imgur.com/DXYVoZP.png"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statement of Faith */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Beliefs</h2>
            <p className="text-gray-600 mb-8">
              We believe in the authority of Scripture, the power of prayer, and the transformative work of the Holy Spirit in the lives of believers.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Read Our Full Statement of Faith
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}