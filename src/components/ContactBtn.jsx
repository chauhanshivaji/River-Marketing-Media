import React, { useState } from "react";
import user1Image from "../assets/profile-pictures/Shiva.jpg";
import user2Image from "../assets/profile-pictures/Shubham.jpg";
import { X } from 'lucide-react';
import whatAppIcon from '../assets/whatsappIcon.gif';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const users = [
    {
      name: "Shiva Chauhan",
      profession: "For Development & Designing",
      profileImage: user1Image, // Replace with actual profile image URL
      whatsappLink: "https://wa.me/8652115564", // Replace with actual WhatsApp number
    },
    {
      name: "Shubham Chaurasiya",
      profession: "For TVC Ad. creation",
      profileImage: user2Image, // Replace with actual profile image URL
      whatsappLink: "https://wa.me/8450906200", //Replace with actual WhatsApp number
    },
  ];

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button
        onClick={toggleVisibility}
        className="fixed bottom-20 right-8 px-4 py-2 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
      {/* <img className="max-w-10" src={whatAppIcon} alt="" srcset="" /> */}
      Hi' How can I Help?
      </button>

      <div
        className={`fixed bottom-32 right-8 w-full max-w-md bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-500 ease-in-out ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-yellow-600 ">Contact Users</h2>
          <button
            onClick={toggleVisibility}
            className="text-red-500 hover:text-red-700 focus:outline-none">
            <X />
          </button>
        </div>
        <div className="space-y-4">
          {users.map((user, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={user.profileImage}
                alt={`${user.name} Profile`}
                className="w-16 h-16 rounded-full border-2 border-orange-500 object-contain"
              />
              <a href={user.whatsappLink}>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-800">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.profession}</p>
                <a
                  href={user.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Message on WhatsApp
                </a>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;