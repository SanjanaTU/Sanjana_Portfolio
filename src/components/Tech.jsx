import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  const skills = ["HTML", "CSS", "Node.js", "Express.js", "JavaScript" ,"React.js ", "Core Java", "Postman"," Mongo DB", "Cucumber ",
"Github", "Visual StudioCode", "Eclipse","Selenium WebDriver", "NoSQL","Responsive Design","ES6","API Testing","Git"];
  
  return (
    <>
      <div className='flex flex-row flex-wrap  gap-10'>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Skill Set</p>
          <h2 className={styles.sectionHeadText}>Skills.</h2>
        </motion.div>
      </div>
       
      <div className="flex flex-row flex-wrap gap-5">
        {skills.map((skill, index) => (
          <div key={index} className={`px-9 py-4 bg-tertiary rounded-md text-secondary  ${styles.skillItem}`}>
            {skill}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "Project"); 