import { motion } from "framer-motion";
import React from "react";
import { Leaf1, Leaf2, about } from "../assets";

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center flex-col gap-12 mt-20"
    >
      {/* title */}
      <div className="w-full flex items-center justify-center py-10">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent text-xl bg-clip-text bg-gradient-to-r from-primary to-secondary">
            About Me
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* image */}
        <div className="w-full flex items-center justify-center px-8">
          <div className="w-full lg:w-96 p-[-2px] rounded-md bg-gradient-to-br from bg-primary to-secondary relative">
            <img
              src={about}
              className="w-full rounded-md h-auto object-contain "
              alt=""
            />
            <div className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-br from bg-primary to-secondary rounded-md blur-[5px] -z-10"></div>
          </div>
        </div>

        {/* content */}
        <section className="w-full px-8 flex flex-col gap-4 items-start justify-start ">
          <p className="text-texlight hover:text-primary text-base tracking-wide text-justify">
          Hey there! 👋 I'm thrilled to welcome you to my corner of the internet! I recently graduated and dove straight into the tech world, gaining invaluable experience through an internship at an innovative edtech startup. Throughout college, I embarked on an exhilarating freelancing journey, collaborating with clients primarily from North America. I've had the pleasure of crafting exceptional websites and software solutions that have truly made an impact.


          </p>
          <p className="text-texlight hover:text-primary text-base tracking-wide text-justify">
          Problem-solving? It's my forte! Whether it's tackling complex coding challenges or diving into the realm of new technologies like ReactJS, NextJS, Python, Django, Flask, and TailwindCSS, I'm all in. The competitive environments I've worked in have honed my skills, nurturing me into a solution-focused developer. My journey as a freelancer has been my guiding light, propelling my growth as a software developer and paving the way for diverse and intricate projects.
          </p>
          <p className="text-texlight hover:text-primary text-base tracking-wide text-justify">
          Speaking of projects, let me take you on a ride through the tech wonderland I've explored! From an algo-trading tool developed with a friend to an AI image generator and even a custom dating app for college buddies – each project was a canvas to merge technology with creativity, where innovation met functionality.
          </p>
          <p className="text-texlight hover:text-primary text-base tracking-wide text-justify">
          Beyond the screen and lines of code, I find my passions weaving through the outdoors, immersing myself in sports and diving deep into the realms of books. The universe, existence, civilization, art, culture, and philosophy? Count me in! Oh, and did I mention my love for drawing and sketching?


          </p>
          <p className="text-texlight hover:text-primary text-base tracking-wide text-justify">
          So, let's embark on this journey together! Explore my portfolio, peek into my tech adventures, and let's connect over our shared love for innovation, learning, and the incredible mysteries of life.
          </p>
          <p className="text-texlight hover:text-primary text-base tracking-wide text-justify">
            Cheers!!
          </p>
        </section>
      </div>
    </section>
  );
};

export default About;
