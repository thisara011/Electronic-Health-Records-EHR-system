import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-[#e6eefe] py-16 px-6 md:px-20 rounded-b-[50px]">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            We help people to <br /> get appointment <br /> <span className="text-purple-700">in online</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. 
            Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
          </p>
          <button className="bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-800 transition duration-300">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center gap-4">
          <img 
            src="/hero-left.png" 
            alt="Character Left" 
            className="w-40 md:w-48 lg:w-56"
          />
          <img 
            src="/hero-right.png" 
            alt="Character Right" 
            className="w-40 md:w-48 lg:w-56"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


// public/hero-left.png

// public/hero-right.png