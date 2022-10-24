import { Box, Container, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";

function Notifications() {
   return (
      <Container as={Flex} maxW={"container"} p={0} m={0}>
         <Sidebar route="notifications" />
         <Box w={"93.8%"}>notifications!</Box>
      </Container>
   );
}

export default Notifications;
