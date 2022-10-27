import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Suggestion from "../../components/Suggestion/Suggestion";
import SContainer from "./SContainer";

function Stories() {
   return (
      <Container as={Flex} maxW={"container"} p={0} m={0}>
         <Sidebar route="stories" />
         <Flex
            w={"100%"}
            pos={"relative"}
            ml={{ base: "17%", md: "11%", lg: "6.2%" }}
         >
            <SContainer />
            <Suggestion />
         </Flex>
      </Container>
   );
}

export default Stories;
