import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          <p className='text-gray-400'>&copy; {new Date().getFullYear()} Petals Gallery. All rights reserved.</p>
          <div className='flex space-x-6'>
            <a href='#' className='text-gray-400 hover:text-white'><FaFacebook size={20} /></a>
            <a href='#' className='text-gray-400 hover:text-white'><FaInstagram size={20} /></a>
            <a href='#' className='text-gray-400 hover:text-white'><FaTwitter size={20} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
