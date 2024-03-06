import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { photo } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className="text-[#5d3da2]">Sanjana</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            As an IT professional, I hold a Master's Degree and boast a diverse
            background. With 2.7 years of experience as a Manual Tester and 6
            months dedicated to Web development, I bring a comprehensive skill
            set to the table. 
            <br className="sm:block hidden" />
            Additionally, I am <a href="https://atsqa.org/certified-testers/profile/74772dbfa81e4bb7b8bb94557408d3f3" className="text-blue-500 hover:underline" target="_blank">ISTQB certified </a>, validating my expertise in
            software testing. Further enhancing my capabilities, I successfully
            completed a rigorous bootcamp at Ironhack, specializing in Full
            Stack Web development. <br className="sm:block hidden" />{" "}
            Through this program, I gained proficiency in a wide array of
            technologies including HTML, CSS, JavaScript, Node.js, Express.js,
            React.js, and MongoDB.
            <br className="sm:block hidden" />{" "}
            <br className="sm:block hidden" />
          </p>
        </div>
        
        <div className="flex justify-end mt-2">
          <img
            src={photo}
            alt="Sanjana image"
            style={{
              borderRadius: '20%', // Make the image circular
              marginTop: '90px', // Add margin from the top
              width: '600px', // Default width
              height: 'auto', // Maintain aspect ratio
            }}
          />                  
        </div>
      </div>
    
    </section>
  );
};

export default Hero;
