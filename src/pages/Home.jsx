import React from 'react';
import { motion } from 'framer-motion';
import { Center, Heading } from '@chakra-ui/react';

export const Home = () => {
  return (
    <motion.div
      key='home'
      initial={{ translateY: '100vh', zIndex: 90, position: 'absolute' }}
      animate={{ translateY: 0, zIndex: 90, position: 'absolute', transition: {delay: 0.2, ease: 'easeInOut', duration: 1} }}
      exit={{ scale: 0.95, zIndex: 10, position: 'absolute' }}
      transition={{ease: 'easeInOut', duration: 1.2}}>
      <Center w='100vw' minH='100vh' bg='pink.300'>
        <Heading>Home</Heading>
      </Center>
    </motion.div>
  );
};
