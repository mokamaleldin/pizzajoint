import React from 'react';
import { motion } from 'framer-motion'; 

const loaderVariants ={
    animateOne:{
        x: [-20, 20],
        y: [0, -30],
        transition:{
            x:{
                repeat: Infinity,
                duration: 0.5,
                repeatType: 'reverse',
                ease:'easeOut'   
            },
            y:{
                repeat: Infinity,
                duration: 0.25,
                repeatType: 'reverse',
                ease:'easeOut'   
            },
        }
    }
}

const Loader = () => {
  return (
    <motion.div className='loader'
        variants={loaderVariants}
        animate="animateOne"
    >
    </motion.div>
  )
}

export default Loader;
