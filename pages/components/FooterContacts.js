
import React from 'react';
import { Center, Flex, Text, HStack, VStack, Box, Link } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon,LinkIcon } from '@chakra-ui/icons'
import FooterMap from './FooterMap';

const FooterContacts = () => {
    return (
        <Box >
            <HStack spacing={'40px'} marginLeft={'60px'} marginBottom={'35px'}>
                <FooterMap />
                <VStack alignItems={'start'}>

                    
                    <HStack spacing={'30px'} >
                    <LinkIcon boxSize={8}/>
                    <Link href='http://ieiblc.org/' isExternal fontSize="2xl">
                        http://ieiblc.org/
                    </Link>
                    </HStack>
                    <br/>

                    <HStack spacing={'30px'} >
                    <EmailIcon boxSize={8}/>
                    <Text marginStart={"50"} fontSize="2xl">belapurlc@ieindia.org</Text>
                    </HStack>
                        <br/>
                    
                    <HStack spacing={'30px'}>
                    <PhoneIcon boxSize={8}/>
                    <Text marginStart={"50"} fontSize="2xl">+022-27579935</Text>
                    </HStack>
                    <br/>

                </VStack>
            </HStack>
        </Box>
    );
};

export default FooterContacts;







