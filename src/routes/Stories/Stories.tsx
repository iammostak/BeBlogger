import { Box, Container, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";

function Stories() {
   return (
      <Container as={Flex} maxW={"container"} p={0} m={0}>
         <Sidebar route="stories" />
         <Box w={"93.8%"}>stories!</Box>
      </Container>
   );
}

export default Stories;
