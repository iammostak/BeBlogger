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
         py={{ base: 16, md: 20 }}
         px={{ base: 4, md: 7, lg: 16 }}
         align={"left"}
         spacing={{ base: 7, md: 10 }}
         borderBottom={"1px solid"}
         bg={"#ffc118"}
      >
         <Heading
            textAlign={"left"}
            color={"black"}
            fontWeight={400}
            fontSize={{ base: 60, md: 104 }}
            fontFamily={"gt-super"}
         >
            Stay curious.
         </Heading>
         <Text align={"left"} fontSize={{ base: "md", md: 24 }} lineHeight={1}>
            Discover stories, thinking, and expertise <br /> from writers on any
            topic.
         </Text>
         <Box textAlign={"left"}>
            <Button
               mt={{ base: 7, md: 0 }}
               px={{ base: 10, md: 14 }}
               bg={"#191918"}
               color={"white"}
               fontWeight={400}
               borderRadius={30}
               letterSpacing={0.5}
               _hover={{ bg: "#191918" }}
            >
               Start reading
            </Button>
         </Box>
         <Box
            display={{ base: "none", lg: "block" }}
            pos={"absolute"}
            top={-10}
            right={0}
            h={"100%"}
         >
            <Image h={"100%"} src={m} alt="m" />
         </Box>
      </VStack>
   );
}

export default Hero;
