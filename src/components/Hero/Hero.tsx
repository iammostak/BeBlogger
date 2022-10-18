import {
   Box,
   Button,
   Flex,
   Heading,
   HStack,
   Image,
   Text,
   VStack,
} from "@chakra-ui/react";
import m from "../../assets/m.svg";

function Hero() {
   return (
      <VStack
         pos={"relative"}
         py={{ base: 8, md: 12, lg: 24 }}
         px={{ base: 7, md: 10, lg: 20 }}
         align={"left"}
         spacing={10}
         borderBottom={"1px solid"}
         bg={"#ffc118"}
      >
         <Heading
            textAlign={"left"}
            color={"black"}
            fontWeight={400}
            fontSize={{ base: "40px", md: "140px" }}
            fontFamily={"gt-super"}
         >
            Stay curious.
         </Heading>
         <Text align={"left"} fontSize={"3xl"} lineHeight={1}>
            Discover stories, thinking, and expertise <br /> from writers on any
            topic.
         </Text>
         <Box textAlign={"left"}>
            <Button
               mt={4}
               py={7}
               px={20}
               size={"lg"}
               bg={"#191918"}
               color={"white"}
               fontSize={"2xl"}
               fontWeight={400}
               borderRadius={30}
               _hover={{ bg: "#191918" }}
            >
               Start reading
            </Button>
         </Box>
         <Box
            display={{ base: "none", xl: "block" }}
            pos={"absolute"}
            top={0}
            right={0}
            h={"100%"}
         >
            <Image src={m} alt="m" />
         </Box>
      </VStack>
   );
}

export default Hero;
