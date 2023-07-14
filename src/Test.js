import React from 'react';
import { motion } from 'framer-motion';
import logo from "./assets/logo.svg"

const Test = () => {
//   const containerVariants = {
//     initial: {
//       x: '-100vw',
//       y: '100vh'
//     },
//     animate: {
//       x: 0,
//       y: 0,
//       transition: {
//         type: 'spring',
//         duration:10,
//         stiffness: 120,
//         damping: 20,
//       }
//     }
//   };

  return (
    <div >
      <motion.div
        initial={{scale:0.8}}
        whileInView={{scale:1}}
        style={{
          width: '800px',
          height: '650px',
        //   background: 'red',
        }}
        className='flex items-end justify-center animate-[wiggle_4s_ease-in-out_infinite] z-0'
      >
      <img src={logo} alt='airplane' className='z-0'/>
      </motion.div>
    </div>
  );
};

export default Test;