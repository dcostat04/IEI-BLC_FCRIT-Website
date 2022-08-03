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
  
  
  export default function Card({ image, personName, socialUrl}) {
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
            <Heading fontSize={'2xl'} fontFamily="fantasy" fontWeight={500}>
              {personName}
            </Heading>
            </Stack>
        </Box>
      </Center>
    );
  }