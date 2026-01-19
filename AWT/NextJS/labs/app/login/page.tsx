"use client";


import { redirect } from "next/navigation";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="max-w-sm mx-auto">
        <div>
          <label className="block mb-2.5 text-sm font-medium text-heading">
            Your email
          </label>
          <input
            type="username"
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
            id="email-alternative"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2.5 text-sm font-medium text-heading">
            Your password
          </label>
          <input
            type="password"
            id="password-alternative"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow placeholder:text-body"
            placeholder="••••••••"
            required
          />
        </div>
        <div className="flex items-start mb-5">
          <label className="flex items-center h-5">
            <input
              onChange={(e)=>{
                setPassword(e.target.value);
            }}
              id="remember-alternative"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
              required
            />
            <p className="ms-2 text-sm font-medium text-heading select-none">
              I agree with the{" "}
              <a href="#" className="text-fg-brand hover:underline">
                terms and conditions
              </a>
              .
            </p>
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-500 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          onClick={() => {
            if(email == 'client' && password == 'client'){
                redirect('/client/dashboard');
            }
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
