import React from 'react';
import { Link } from 'react-router-dom';
import { Church, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Church className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-serif text-white">The Lord Reigns Church</span>
            </div>
            <p className="mt-4 text-gray-400">Bringing hope and healing through faith and community.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white">Home</Link>
              <Link to="/about" className="block text-gray-400 hover:text-white">About</Link>
              <Link to="/sermons" className="block text-gray-400 hover:text-white">Sermons</Link>
              <Link to="/events" className="block text-gray-400 hover:text-white">Events</Link>
              <Link to="/gallery" className="block text-gray-400 hover:text-white">Gallery</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white">Contact</Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Service Times</h3>
            <div className="space-y-2 text-gray-400">
              <p>Sunday Worship: 3:00 PM & 5:00 PM</p>
              <p>Wednesday Cottage: 7:00 PM</p>
              <p>Youth Group: Saturdays 3:30 PM</p>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Kings Farm, Vaderahalli Village, Vidyaranyapura post, Bengaluru-97
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +91-9449970472
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@gracechurch.org
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-center">© 2018 The Lord Reigns Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}