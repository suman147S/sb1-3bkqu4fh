import React from 'react';
import { Upload, Printer, Package } from 'lucide-react';

export function CustomPrinting() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Custom Comic Printing</h1>
          <p className="text-xl text-gray-600">Transform your digital comics into high-quality prints</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Upload Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Upload Your Files</h2>
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-4 text-gray-600">Drag and drop your files here, or</p>
                <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                  Browse Files
                </button>
                <p className="mt-2 text-sm text-gray-500">Supported formats: PDF, PNG, JPEG (max 50MB)</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Print Size
                  </label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm">
                    <option>Standard Comic (6.625" x 10.25")</option>
                    <option>Manga Size (5" x 7.5")</option>
                    <option>Custom Size</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Paper Type
                  </label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm">
                    <option>Premium Glossy</option>
                    <option>Matte Finish</option>
                    <option>Recycled</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    className="w-full border-gray-300 rounded-md shadow-sm"
                    placeholder="Enter quantity"
                  />
                </div>
              </div>

              <button className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                Get Quote
              </button>
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Why Choose Our Printing Service?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Printer className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Professional Quality</h4>
                    <p className="text-gray-600">High-resolution printing with vibrant colors and sharp details</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Package className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Quick Turnaround</h4>
                    <p className="text-gray-600">Fast processing and shipping to get your comics to you quickly</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Printing Guidelines</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Files should be in high resolution (300 DPI minimum)</li>
                <li>Include 1/8" bleed on all sides</li>
                <li>Convert all text to outlines</li>
                <li>Embed all fonts and images</li>
                <li>Use CMYK color mode for best results</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}