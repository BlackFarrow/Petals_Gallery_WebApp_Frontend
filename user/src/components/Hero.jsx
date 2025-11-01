import React from 'react';
import heroImage1 from "../assets/hero1.jpg";

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover' style={{backgroundImage: `url(${heroImage1})`}}>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold'>Capturing Moments, Creating Memories</h2>
        <p className='py-5 text-xl'>Your Story Through Our Lens</p>
        <button className='px-8 py-2 border'>Book Now</button>
      </div>
    </div>
  );
};

export default Hero;
