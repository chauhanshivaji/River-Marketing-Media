import video1 from "../assets/video.mp4";
import video2 from "../assets/video2.mp4";


// impoet frame motion
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 HeroSection">
      <motion.h1
      variants={ fadeIn('up',0.2)}
            initial = "hidden"
            whileInView={'show'}
            viewport={{once: false , amount: 0.7}}
            
      className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
      We are leading advertising 
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          agency in mumbai
        </span>
      </motion.h1>
      <motion.p 
      variants={ fadeIn('left',0.1)}
            initial = "hidden"
            whileInView={'show'}
            viewport={{once: false , amount: 0.7}}
      className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      We build stunning websites, craft powerful brand identities, and create marketing campaigns that drive results. Let us take your business to the next level.
      </motion.p>
      <motion.div 
      variants={ fadeIn('right',0.1)}
            initial = "hidden"
            whileInView={'show'}
            viewport={{once: false , amount: 0.7}}
      className="flex justify-center my-10">
        <a
          href="https://wa.link/a8d6vj"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
          BOOK FREE CONSULTATION
        </a>
      </motion.div>
      <motion.div 
      variants={ fadeIn('up',0.2)}
            initial = "hidden"
            whileInView={'show'}
            viewport={{once: false , amount: 0.7}}
      className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
};

export default HeroSection;
