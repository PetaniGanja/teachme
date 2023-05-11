import * as React from 'react';
import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  InputGroup,
  InputRightElement,
  Flex,
  Hide,
  AspectRatio
} from '@chakra-ui/react';
import signUpCoverPic from '../../images/SignUp/signup1.png';
import signUpFooterPic from '../../images/SignUp/signup2.png';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';

const SplitWithImage = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [showConfirm, setShowConfirm] = useState(false);
  const handleConfirmClick = () => setShowConfirm(!showConfirm);
  return (
    <Box backgroundColor={'purple.800'}>
    <Stack w={'auto'} h={'auto'} direction={{ base: 'row-reverse', md: 'column' }} >
      <Stack w={'auto'} h={'auto'} direction={{ base: 'column-reverse', md: 'row' }} >
        <Flex flex={1} align="center" justify="center">
          <Image alt="Cover image" src={signUpCoverPic}/>
        </Flex>
        <Flex p={8} flex={1} align="center" justify="center">
          <Stack spacing={4}>
            <Stack align="center"> 
              <Heading fontSize="2xl">Register</Heading>
            </Stack>
            <VStack
              as="form"
              spacing={8}
              boxSize={{ base: 'xs', sm: 'sm', md: 'md' }}
              h="max-content !important"
              bg={useColorModeValue('white', 'gray.700')}
              rounded="lg"
              boxShadow="lg"
              p={{ base: 5, sm: 10 }}
            >
              <VStack spacing={4} w="100%">
                <FormControl id="email">
                  <FormLabel>Enter Email</FormLabel>
                  <Input rounded="md" type="email" />
                </FormControl>
                <FormControl id="username">
                  <FormLabel>Create Username</FormLabel>
                  <Input rounded="md" type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input rounded="md" type={show ? 'text' : 'password'} />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        rounded="md"
                        bg={useColorModeValue('gray.300', 'gray.700')}
                        _hover={{
                          bg: useColorModeValue('gray.400', 'gray.800')
                        }}
                        onClick={handleClick}
                      >
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl id="confirm-password">
                  <FormLabel>Confirm Password</FormLabel>
                  <InputGroup size="md">
                    <Input rounded="md" type={showConfirm ? 'text' : 'password'} />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        rounded="md"
                        bg={useColorModeValue('gray.300', 'gray.700')}
                        _hover={{
                          bg: useColorModeValue('gray.400', 'gray.800')
                        }}
                        onClick={handleConfirmClick}
                      >
                        {showConfirm ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </VStack>
              <VStack w="100%">
                <Button
                  bg="green.300"
                  color="white"
                  _hover={{
                    bg: 'green.500'
                  }}
                  rounded="md"
                  w="100%"
                >
                  Register
                </Button>
              </VStack>
            </VStack>
          </Stack>
        </Flex>
      </Stack>
      <Image src={signUpFooterPic} alt='footer'></Image>
    </Stack>
    </Box>
  );
};

export default SplitWithImage;