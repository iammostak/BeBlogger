import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Suggestion from "../../components/Suggestion/Suggestion";
import NContainer from "./NContainer";

function Notifications() {
   useEffect(() => {
      document.title = "Notifications - Medium";
   }, []);

   return (
      <Container as={Flex} maxW={"container"} p={0} m={0}>
         <Sidebar route="notifications" />
         <Flex
            w={"100%"}
            pos={"relative"}
            ml={{ base: "17%", md: "11%", lg: "6.2%" }}
         >
            <NContainer />
            <Suggestion />
         </Flex>
      </Container>
   );
}

export default Notifications;
