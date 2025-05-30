import React from "react";
import { motion } from "framer-motion";

import user1 from "../assets/ClientsLogo/harpic.webp";
import user2 from "../assets/ClientsLogo/TAX WARRIOR.webp";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
import user3 from "../assets/ClientsLogo/lapasteleria.webp";
import user4 from "../assets/ClientsLogo/THE NINE FILMS.webp";
import user5 from "../assets/ClientsLogo/Patan.webp";
import user6 from "../assets/ClientsLogo/SeaBeyond.webp";
  
// impoet frame motion
// import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const clients = [
  { name: "Client One", logo: user1 },
  { name: "Client Two", logo: user2 },
  { name: "Client Three", logo: user3 },
  { name: "Client Four", logo: user4 },
  { name: "Client Five", logo: user5 },
  { name: "Client Six", logo: user6 },

];

const OurClients = () => {
  return (
    <section className="py-16 overflow-hidden OurClients">
      <div className="max-w-6xl mx-auto px-4 text-center">
           <motion.h2 
            variants={ fadeIn('right',0.2)}
                       initial = {{opacity: 0}}
                       whileInView={'show'}
                       viewport={{once: false , amount: 0.7}}
           className="text-3xl sm:text-5xl lg:text-6xl text-center mb-8 tracking-wide">
        Our {" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Clients
        </span>
      </motion.h2>
        <div className="relative w-full flex items-center">
          <motion.div
            className="flex space-x-8"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg w-32 h-32 flex-shrink-0">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-28 h-28 object-contain rounded-lg "
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
