import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-start pl-0 md:pl-16">
          <div className="hire-me">
            <a 
              href="mailto:abdallahsamsal@gmail.com" 
              className="bg-green-500 hover:bg-green-900 hover:text-white transition-colors text-black font-medium py-2 px-6 md:px-10 rounded-full border-4 border-green-700"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;