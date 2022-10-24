import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import Suggestion from "../../components/Suggestion/Suggestion";
import Sidebar from "../../components/Sidebar/Sidebar";

function Home() {
   return (
      <Container as={Flex} maxW={"container"} p={0} m={0}>
         <Sidebar route="home" />
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
            ></VStack>
            <Suggestion />
         </Flex>
      </Container>
   );
}

export default Home;
