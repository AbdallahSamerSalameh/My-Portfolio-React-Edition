// components/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-center mb-8">
          You can get to me using the following methods or the form below
        </p>
        
        <div className="flex flex-col md:flex-row justify-around mb-12 space-y-4 md:space-y-0">
          <div>
            <a href="tel:00692781151123" className="flex items-center hover:text-green-400 transition-colors">
              <i className="fa-solid fa-phone mr-2"></i> 00692 781151123
            </a>
          </div>
          <div>
            <a href="mailto:abdallahsamsal@gmail.com" className="flex items-center hover:text-green-400 transition-colors">
              <i className="fa-solid fa-envelope mr-2"></i> abdallahsamsal@gmail.com
            </a>
          </div>
          <div>
            <a href="https://github.com/AbdallahSamerSalameh" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-green-400 transition-colors">
              <i className="fa-brands fa-square-github mr-2"></i> @AbdallahSamerSalameh
            </a>
          </div>
        </div>
        
        <form className="w-full max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input 
              type="email" 
              id="email"
              placeholder="Please enter your email" 
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-green-500"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="mobile" className="block mb-2">Mobile</label>
            <input 
              type="tel" 
              id="mobile"
              placeholder="Enter Mobile" 
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-green-500"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea 
              id="message" 
              placeholder="Enter your message"
              rows="5"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-green-500"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="bg-green-600 hover:bg-green-700 transition-colors text-white font-medium py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;