"use client";
import deleteUser from "@/actions/delete_user";
import React from "react";

function DeleteUserBtn({id}:{id:number}) {
  return (
    <button
      onClick={() => {
        console.log(`Id From Delete Button = ${id}`);
        deleteUser(id);
      }}
      type="button"
      className="inline-flex items-center bg-white rounded-xl hover:bg-red-600 hover:text-white text-red-700 box-border text-sm px-4 py-2.5"
    >
      <svg
        className="w-4 h-4 me-1.5 -ms-0.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
      Delete me
    </button>
  );
}

export default DeleteUserBtn;
