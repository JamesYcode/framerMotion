import React, { useState } from 'react';
import { motion, useScroll } from 'framer-motion';

function Box1() {
  const [isAnimate, setIsAnimate] = useState(false);
  return (
    <div className='box-container'>
      <motion.div
        initial={{
          opacity: 0.5,
        }}
        animate={{
          x: isAnimate ? '1750px' : 0,
          opacity: isAnimate ? 1 : 0.5,
          rotate: isAnimate ? 180 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 120,
          // delay: 0.5,
          // damping: 20,
        }}
        onClick={() => setIsAnimate(!isAnimate)}
        className='box'
      ></motion.div>
    </div>
  );
}

export default Box1;
