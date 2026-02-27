"use client";

import { TypeAdmin } from "@/app/_types/types";
import { useState } from "react";

export default function SignUp() {
  const [form, setForm] = useState<TypeAdmin>({
    username: "",
    email: "",
    password: "",
    createdA: new Date(),
    updatedAt: new Date(),
  });

  const [message, setMessage] = useState<string>("");

  const handleUpdateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    fetch("/api/user/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message || "Account created successfully!");
      })
      .catch((err) => {
        console.log(err);
        setMessage("An error occurred while creating the account.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#312F30] p-4">
      <div className="w-full max-w-md bg-[#3B3B3B] p-8 rounded-2xl shadow-xl text-white space-y-6">
        <h1
          className="text-3xl font-bold text-center"
          style={{ color: "#6ECB63" }}
        >
          Create Account
        </h1>

        <form className="space-y-5" method="post" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-sm font-medium" htmlFor="name">
              Username
            </label>
            <input
              id="username"
              onChange={handleUpdateForm}
              name="username"
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-[#2A2A2A] border border-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-[#6ECB63] text-white placeholder-gray-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              onChange={handleUpdateForm}
              name="email"
              type="email"
              className="w-full px-4 py-3 rounded-xl bg-[#2A2A2A] border border-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-[#6ECB63] text-white placeholder-gray-400"
              placeholder="your@email.com"
            />
          </div>

          {/* Password */}
          <div>
            <label
              className="block mb-1 text-sm font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={handleUpdateForm}
              className="w-full px-4 py-3 rounded-xl bg-[#2A2A2A] border border-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-[#6ECB63] text-white placeholder-gray-400"
              placeholder="••••••••"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              className="block mb-1 text-sm font-medium"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="w-full px-4 py-3 rounded-xl bg-[#2A2A2A] border border-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-[#6ECB63] text-white placeholder-gray-400"
              placeholder="Confirm your password"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-black mt-4"
            style={{ backgroundColor: "#6ECB63" }}
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="text-center text-gray-300 text-sm">OR</div>

        {/* Google Login */}
        <button
          className="w-full py-3 rounded-xl flex items-center justify-center gap-2 font-medium"
          style={{ backgroundColor: "#4A4A4A" }}
        >
          <span>Sign Up with Google</span>
        </button>

        <div className="p-2">
          {message && <p className="text-red-500 text-sm">{message}</p>}
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-300">
          Already have an account?{" "}
          <a
            href="#"
            style={{ color: "#F4A261" }}
            className="font-medium hover:underline"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
