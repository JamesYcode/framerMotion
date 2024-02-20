import { motion } from 'framer-motion';

function Box4() {
  return (
    <div className='box-container'>
      <motion.div
        className='box'
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          rotate: [0, 0, 270, 360, 0],
        }}
        transition={{
          duration: 5,
        }}
      ></motion.div>
    </div>
  );
}

export default Box4;
