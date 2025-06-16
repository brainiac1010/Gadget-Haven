import React from 'react';

const Footer = () => {
  return (
    <footer className=" ">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Title & subtitle */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold ">Gadget Heaven</h2>
          <p className=" mt-2">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <hr />

        {/* 3 column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left mt-5">
          <div className='pl-25'>
            <h6 className=" font-semibold mb-2">Services</h6>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Product Support</a></li>
              <li><a href="#" className="hover:underline">Order Tracking</a></li>
              <li><a href="#" className="hover:underline">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:underline">Returns</a></li>
            </ul>
          </div>

          <div className='pl-25'>
            <h6 className=" font-semibold mb-2">Company</h6>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div className='pl-10'>
            <h6 className=" font-semibold mb-2">Legal</h6>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
