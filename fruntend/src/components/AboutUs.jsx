import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto gap-12">
        {/* Image */}
        <div className="flex-1">
          <img 
            src="/about-img.png" 
            alt="About Us" 
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Biography<br /> <span className="text-purple-700">Who We Are</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

// public/about-img.png