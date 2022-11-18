import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Center, Flex, Heading } from '@chakra-ui/react';

export const Proyects = () => {
  return (
    <motion.div
      key='proyects'
      initial={{ translateY: '100vh', zIndex: 90, position: 'absolute' }}
      animate={{ translateY: 0, zIndex: 90, position: 'absolute', transition: {delay: 0.2, ease: 'easeInOut', duration: 1} }}
      exit={{ scale: 0.95, zIndex: 10, position: 'absolute' }}
      transition={{ease: 'easeInOut', duration: 1.2}}>
      <Center w='100vw' minH='100vh' bg='cyan.300'>
        <Flex flexDir='column' alignItems='center'>
          <Heading>Proyects</Heading>
          <Flex gap='1rem'>
            {[...Array(6).keys()].map(i => (
              <Link to={`/proyects/${i}`}>Proyect {i}</Link>
            ))}
          </Flex>
          <Outlet />
        </Flex>
      </Center>
    </motion.div>
  );
};
