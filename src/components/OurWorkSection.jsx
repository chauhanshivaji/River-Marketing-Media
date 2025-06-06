import React, { useState } from 'react';
import image1 from "../assets/sea&beyond.jpg";
import image2 from "../assets/sprrrint.png";
import image3 from "../assets/lapasteleria.png";



const workCategories = {
  "Web Development": [
    { title: "Sea & Beyond", 
    description: "We create modern and responsive websites tailored to your needs.", 
    image: image1,
    url: "https://seaandbeyond.com/" },

    { title: "Sprint", 
    description: "We create modern and responsive websites tailored to your needs.", 
    image: image2,
    url: "https://sprrrint.com/" },

    { title: "La Pasteleria", 
    description: "We create modern and responsive websites tailored to your needs.", 
    image: image3,
    url: "https://lapasteleria.in/" },

    { title: "Website Development", 
    description: "We create modern and responsive websites tailored to your needs.", 
    image: "/images/work1.jpg",
    url: "https://example.com/project4" },
  ],


  "Branding": [
    { title: "Brand Design", 
    description: "Crafting unique brand identities to make your business stand out.", 
    image: "/images/work2.jpg",
    url: "https://example.com/branding1" },
  ],

  
  "Marketing": [
    { title: "Marketing Strategies", 
    description: "Helping you grow with effective and data-driven marketing plans.", 
    image: "/images/work3.jpg",
    url: "https://example.com/marketing1" },
  ],
};

const OurWorkSection = () => {
  const [activeTab, setActiveTab] = useState("Web Development");

  return (
    <section className="py-20  text-white OurWorkSection">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold">Our Work</h2>
        <p className="mt-4 text-lg text-gray-400">Explore some of our latest projects</p>
      </div>
      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(workCategories).map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-lg ${activeTab === category ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workCategories[activeTab].map((item, index) => (
          <a 
            key={index} 
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-neutral-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-400">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default OurWorkSection;
