import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Image from 'next/image'
export default function Logos(props) {
  return (
    <Box {...props}>
      <Image src="/fcritlogo.png"width={100} height={100} />
    </Box>
  );
}
