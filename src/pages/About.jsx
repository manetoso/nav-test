import React from 'react';
import { motion } from 'framer-motion';
import { Center, Heading } from '@chakra-ui/react';

export const About = () => {
  return (
    <motion.div
      key='about'
      initial={{ translateY: '100vh', zIndex: 90, position: 'absolute' }}
      animate={{ translateY: 0, zIndex: 90, position: 'absolute', transition: {delay: 0.2, ease: 'easeInOut', duration: 1} }}
      exit={{ scale: 0.95, zIndex: 10, position: 'absolute' }}
      transition={{ease: 'easeInOut', duration: 1.2}}>
      <Center w='100vw' minH='100vh' bg='purple.300'>
        <Heading>About</Heading>
      </Center>
    </motion.div>
  );
};
