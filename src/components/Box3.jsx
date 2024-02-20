import React, { useState } from 'react';
import { motion, useScroll } from 'framer-motion';

function Box3() {
  const boxVariant = {
    visible: {
      x: 0,
      scale: 0.4,
      transition: {
        delay: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: {
      x: -1000,
    },
  };

  const listVariant = {
    visible: {
      x: 0,
      opacity: 1,
    },
    hidden: {
      opacity: 0,
      x: -10,
    },
  };
  return (
    <div className='box-container'>
      <motion.div
        className='box'
        variants={boxVariant}
        animate='visible'
        initial='hidden'
      >
        {Array.from([1, 2, 3], (box) => {
          return (
            <motion.li className='boxItem' variants={listVariant}></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Box3;
