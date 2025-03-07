import React, { useEffect, useRef } from "react";
import "../index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faReact,
  faJsSquare,
  faJava,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import Typed from "typed.js";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  const typedElement = useRef(null); // Ref for the element where the text will be typed

  useEffect(() => {
    const options = {
      strings: ["Developer", "Fullstack Developer", "Student of Systems Information Engineering"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      startDelay: 500,
      showCursor: true,
      cursorChar: "|",
    };

    const typed = new Typed(typedElement.current, options);

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faJava} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              Juan Cruz Bordino
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent typed">
              <span ref={typedElement} />
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 justify-center items-center mt-6">
              <motion.a
                variants={childVariants}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bg-white rounded-full p-4 text-sm text-stone-800 w-full sm:w-48 h-12 flex items-center justify-center text-center  hover:font-bold hover:text-base transition-all duration-500">
                Download Resume
              </motion.a>

              <motion.a
                variants={childVariants}
                href="#contact"
                className="bg-white rounded-full p-4 text-sm text-stone-800 w-full sm:w-48 h-12 flex items-center justify-center text-center  hover:font-bold hover:text-base transition-all duration-500">
                Contact 
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
