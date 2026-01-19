import addUser from "@/actions/add_user";
import Link from "next/link";
import React from "react";

function EditUserPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Add User Form */}
      <form className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-black mb-8">
          Edit User
        </h2>

    
        <div className="mb-5">
          <label className="block text-lg text-black mb-2">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            name="Title"
            className="w-full border border-gray-300 rounded-lg text-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

    
        <div className="mb-5">
          <label className="block text-lg text-black mb-2">Description</label>
          <input
            type="text"
            name="Description"
            placeholder="Enter description"
            className="w-full border border-gray-300 rounded-lg text-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Age */}
        <div className="mb-8">
          <label className="block text-lg text-black mb-2">Age</label>
          <input
            type="number"
            name="Age"
            placeholder="Enter age"
            className="w-full border border-gray-300 rounded-lg text-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Centered Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white text-lg px-8 py-3 rounded-xl hover:bg-white hover:text-blue-600 border-2 border-blue-600 transition-all duration-300"
          >
            Edit User
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditUserPage;
