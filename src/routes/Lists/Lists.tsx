import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Suggestion from "../../components/Suggestion/Suggestion";

function Lists() {
   return (
      <Container as={Flex} maxW={"container"} p={0} m={0}>
         <Sidebar route="lists" />
         <Flex
            w={"100%"}
            pos={"relative"}
            ml={{ base: "17%", md: "11%", lg: "6.2%" }}
         >
            <VStack
               w={"67%"}
               h={"100%"}
               borderRight="1px solid"
               borderColor="blackAlpha.200"
            >
               <Box>lists!</Box>
            </VStack>
            <Suggestion />
         </Flex>
      </Container>
   );
}

export default Lists;
