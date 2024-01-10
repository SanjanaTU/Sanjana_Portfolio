import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className='text-[#5d3da2]'>Sanjana</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
          I started as a system administrator but got hooked on tech and learning. Spent over two years mastering manual software testing, acing test case, execution, and reporting bugs. <br className='sm:block hidden' />   <br className='sm:block hidden' />  

Just finished the Ironhack Full Stack Web development course, diving into HTML, CSS, JavaScript, Node.js, Express.js,React.js and MongoDB. No pro web dev experience yet, but my passion is rock-solid! <br className='sm:block hidden' />   <br className='sm:block hidden' />  

Proudly transitioned from system administrator to testing, and now I'm stoked to venture into web development. I bring a mix of techie skills and a knack for problem-solving. <br className='sm:block hidden' />   <br className='sm:block hidden' />  


          </p>
        </div>
      </div>
      {/* <ComputersCanvas />   */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;