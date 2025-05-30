import React from 'react';
// import { ArrowBigRight  } from 'lucide-react';
import { FaCheck } from "react-icons/fa";

// impoet frame motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import { servicesList } from '../constants';

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-neutral-800 min-h-[800px] FeatureSection">
      <div className="text-center">
        <div variants={fadeIn('left', 0.8)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }} >

          <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
            Services
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          What We{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Do For You
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {servicesList.map((featureli, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div
                variants={fadeIn('right', 0.8)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {featureli.icon}
              </div>
              <div variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}>
                <h5 className="mt-1 mb-6 text-xl">{featureli.text}</h5>
                <ul className="text-md p-2 mb-20 text-gray-400 list-outside list-disc">
                  {featureli.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center mb-2">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
