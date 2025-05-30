import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';



const CtaSection = () => {
    return (
        <section className="py-12 CtaSection">
        <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
        Get in touch{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          With Us
          </span>
        </h2>
          <p className="text-center text-gray-400 mb-12">
            Were here to help you grow your business. Contact us today to discuss your project.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-xl">
              <div className="bg-orange-600 text-white p-4 rounded-full mb-4 hover:bg-orange-700">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
              <a className="text-gray-600" href="tel:8652115564">+91 8652115564</a>
              <a className="text-gray-600" href="tel:8450906200">+91 8450906200</a>
            </div>
  
            {/* Mail Section */}
            <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-xl">
              <div className="bg-orange-600 text-white p-4 rounded-full mb-4 hover:bg-orange-700">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600">rivermarketingmedia@gmail.com</p>
            </div>
  
            {/* Address Section */}
            <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-xl">
              <div className="bg-orange-600 text-white p-4 rounded-full mb-4 hover:bg-orange-700">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-center">SH/B-04 SHREEPAD ACCORD, E2 HATKESH IND EST, NEAR GCC CLUB, MIRA ROAD (E) THANE 401107 MAHARASHTRA</p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default CtaSection;