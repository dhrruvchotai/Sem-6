import Link from "next/link";
import React from "react";

async function Users() {
  const res = await fetch(
    "https://6673d5f375872d0e0a93e612.mockapi.io/me/Dhruv/Users",
    { cache: "no-store" }
  );
  const data = await res.json();

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Users</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((user: any) => (
          <div
            key={user.id}
            className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
          >

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold text-lg">
              {user.name?.charAt(0)}
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              {user.name}
            </h2>
            <p className="text-sm text-gray-500 mb-6 truncate">
              {user.email}
            </p>
            <Link
              href={`/users/${user.id}`}
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View profile
              <span className="ml-1 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;