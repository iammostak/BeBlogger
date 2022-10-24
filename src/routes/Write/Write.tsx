import { Box, Container, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";

function Write() {
   return (
      <Container as={Flex} maxW={"container"} p={0} m={0}>
         <Sidebar route="write" />
         <Box w={"93.8%"}>write!</Box>
      </Container>
   );
}

export default Write;
