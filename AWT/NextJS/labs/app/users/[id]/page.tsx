import React from "react";

async function UserDetail({ params }: { params: Promise<{ id: String }> }) {
  const { id } = await params;
  const tempData = await fetch(
    `https://6673d5f375872d0e0a93e612.mockapi.io/me/Dhruv/Users/${id}`
  );
  const data = await tempData.json();
  console.log(data);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-gray-100 block w-md p-6 border border-default rounded-base shadow-xs rounded">
        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
          {data.name}
        </h5>
        <p className="text-body mb-6">{data.email}</p>
      </div>
    </div>
  );
}

export default UserDetail;
