import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Suggestion from "../../components/Suggestion/Suggestion";
import LContainer from "./LContainer";

function Lists() {
   useEffect(() => {
      document.title = "Your lists - BeBlogger";
   }, []);

   return (
      <Container as={Flex} maxW={"container"} p={0} m={0}>
         <Sidebar route="lists" />
         <Flex
            w={"100%"}
            pos={"relative"}
            ml={{ base: "17%", md: "11%", lg: "6.2%" }}
         >
            <LContainer />
            <Suggestion />
         </Flex>
      </Container>
   );
}

export default Lists;
