import addUser from "@/actions/add_user";
import Link from "next/link";
import React from "react";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Add User Form */}
      <form className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8" action={addUser}>
        <h2 className="text-3xl font-semibold text-center text-black mb-8">
          Add User
        </h2>

        {/* Username */}
        <div className="mb-5">
          <label className="block text-lg text-black mb-2">Username</label>
          <input
            type="text"
            placeholder="Enter username"
            name="UserName"
            className="w-full border border-gray-300 rounded-lg text-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-lg text-black mb-2">Email</label>
          <input
            type="email"
            name="Email"
            placeholder="Enter email"
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
            Add User
          </button>
        </div>
      </form>

      {/* Navigation Buttons */}
      <div className="flex gap-6 mt-10">
        <Link
          href="/users"
          className="bg-blue-600 text-white text-xl px-6 py-3 rounded-xl border-2 border-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-300"
        >
          Users Page
        </Link>

        <Link
          href="/tasks"
          className="bg-blue-600 text-white text-xl px-6 py-3 rounded-xl border-2 border-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-300"
        >
          Tasks Page
        </Link>
      </div>
    </div>
  );
}

export default Home;
