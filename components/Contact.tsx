"use client";
import React, { useState } from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to Telegram group or call API
    window.open("https://t.me/yourgroupname", "_blank");
  };

  return (
    <section className="bg-black text-white py-16 px-4 md:px-8 w-full">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Stay in the Loop</h2>
        <p className="mb-8 text-gray-200 font-sans">Join our Telegram community to get early drops, updates, and style tips.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-black px-4 py-3 placehoder:text-black/80 rounded-md bg-white/20 focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            className="w-full border border-black px-4 py-3 placehoder:text-black/80 rounded-md bg-white/20 focus:outline-none"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 flex justify-center gap-2 items-center text-white py-3 rounded-md hover:bg-blue-900 transition"
          >
            <BiLogoTelegram size={20} color="white"/>
            <span className="font-sans">Join Telegram</span>
          </button>
        </form>

        {/* Disabled Blog Button */}
        <div className="mt-6">
          <button
            disabled
            title="Coming Soon"
            className="w-full border border-gray-400 text-gray-400 py-3 rounded-md cursor-not-allowed"
          >
            Visit Our Blog
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
