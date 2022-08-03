import React from "react";
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import Logo from "./Logo";
import Logos from "./Logos";

const NavBar1 = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      
      <Logo/>
      {/* <Text fontWeight={"bold"}><p align="center" >IEI</p></Text> */}
      <div class="main-text" align="center" >
        <Text marginStart={"100"} fontSize={"2xl"} fontWeight={"bold"} color="black" align={"center"}> The Institution of Engineers (India)  Organises </Text>
        <Text marginStart={"100"}fontSize={"2xl"} fontWeight={"bold"} color="black" align={"center"}> IEI Excellence Awards 2022</Text>
        {/* <Text fontWeight={"bold"} color="black" align={"center"}>Vibration Engineering, Science, and Technology (INVEST 22)</Text> */}
        <Text marginStart={"100"}fontWeight={"bold"} color="black" align={"center"}> ---------------------------------------------------------------------------------------------------------</Text>
        <Text marginStart={"100"}fontWeight={"bold"} color="black" align={"center"}>Jointly organised by the IEI-BLC & Fr. C. Rodrigues Institute of Technology, Vashi</Text>
        <Text marginStart={"100"}fontWeight={"bold"} color="black" align={"center"}>     September 15, 2022  </Text>
      </div>
      <Logos />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};




const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bgImg={["bck.jpg"]}
      // color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar1;
