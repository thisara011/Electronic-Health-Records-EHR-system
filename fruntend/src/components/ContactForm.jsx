import React from 'react';

const ContactForm = () => {
  return (
    <section className="bg-[#e6eefe] py-20 px-6 md:px-20 rounded-t-[50px]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Send us a message
        </h2>

        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Mobile Number"
              className="flex-1 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <textarea
            rows="4"
            placeholder="Message"
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>

          <button
            type="submit"
            className="bg-purple-700 text-white px-8 py-3 rounded-full hover:bg-purple-800 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
