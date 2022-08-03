import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';
  
  
  export default function Card({ image, personName,des1,des2,des3,des4,des5,des6,des7,des8, socialUrl}) {
    return (
      <Center>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white.50', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
            <Box>
            <Image
            height={300}
            width={300}
              rounded={'lg'}
              objectFit={'fill'}
              src={image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading fontSize={'xl'} fontFamily={"sans-serif"}  fontWeight={"bold"}>
              <Center>{des1}</Center>
            </Heading>
            <Heading fontSize={'xl'} fontFamily={"sans-serif"}>
            <Center>{des2}</Center>
            </Heading>
            <Heading fontSize={'xl'} fontFamily={"sans-serif"}>
            <Center>{des3}</Center>
            </Heading>
            
            <Heading fontSize={'3xl'}fontFamily={"sans-serif"}  fontWeight={"bold"}>
              <Center>{personName}</Center>
            </Heading>
            <Heading fontSize={'xl'} fontFamily={"sans-serif"}>
            <Center>{des4}</Center>
            </Heading>
            <Heading fontSize={'xl'} fontFamily={"sans-serif"}>
            <Center>{des5}</Center>
            </Heading>
            <Heading fontSize={'xl'} fontFamily={"sans-serif"}>
            <Center>{des6}</Center>
            </Heading>
            <Heading fontSize={'xl'} fontFamily={"sans-serif"}>
            <Center>{des7}</Center>
            </Heading>
            <Heading fontSize={'xl'} fontFamily={"sans-serif"}>
            <Center>{des8}</Center>
            </Heading>
            
            </Stack>
        </Box>
      </Center>
    );
  }