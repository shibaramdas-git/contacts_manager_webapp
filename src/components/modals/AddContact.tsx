"use client";
import { useState } from "react";
import { FcCdLogo } from "react-icons/fc";

export default function AddContact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleSubmit() {
    console.log("submitted");
  }
  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)} // Open modal
        className="fixed bottom-6 right-6 bg-green-400 text-white rounded-full w-12 h-12 flex justify-center items-center shadow-lg hover:bg-green-600 text-xl"
      >
        +
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Add New Contact</h2>
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              {/* Phone Field */}
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Image URL Field */}
              <div className="mb-4">
                <label htmlFor="imgUrl" className="block text-gray-700">
                  Image URL
                </label>
                <input
                  type="text"
                  id="imgUrl"
                  name="imgUrl"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Buttons */}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)} // Close modal
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
