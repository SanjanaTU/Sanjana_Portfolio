import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  const skills = [
    "HTML", "CSS", "Node.js", "Express.js", "JavaScript", "React.js", 
    "Core Java", "Postman", "MongoDB", "Cucumber", "GitHub", 
    "Visual Studio Code", "Eclipse", "Selenium WebDriver", "NoSQL", 
    "Responsive Design", "ES6", "API Testing", "Git" ];
  
  return (
    <>
      <div className="flex flex-row flex-wrap gap-10">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Skill Set</p>
          <h2 className={styles.sectionHeadText}>Skills</h2>
        </motion.div>
      </div>
       
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.div key={index} className={`px-5 py-2 mt-5 bg-tertiary rounded-md text-secondary ${styles.skillItem}`}
            whileHover={{ scale: 1.05, backgroundColor: '#5d3da2', color: '#ffffff' }}
            whileTap={{ scale: 0.95 }}>
            {skill}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "Project");
