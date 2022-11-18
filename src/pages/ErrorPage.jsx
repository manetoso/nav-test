import React from 'react';
import { Center, Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <Center minH='100vh'>
      <Flex flexDir='column' alignItems='center' gap='2rem'>
        <Heading>404</Heading>
        <Heading>Page Not Found</Heading>
        <Link to='/'>Return</Link>
      </Flex>
    </Center>
  );
};
