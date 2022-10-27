import { Box, Container, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";

function Write() {
   return (
      <Container as={Flex} maxW={"container"} p={0} m={0}>
         <Sidebar route="write" />
         <Flex
            w={"100%"}
            pos={"relative"}
            ml={{ base: "17%", md: "11%", lg: "6.2%" }}
         >
            <Box w={"100%"} m={12}>
               Write a story!
            </Box>
         </Flex>
      </Container>
   );
}

export default Write;
