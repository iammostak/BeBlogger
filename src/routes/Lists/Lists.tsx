import { Box, Container, Flex } from "@chakra-ui/react";
import SideBar from "../../components/Sidebar/Sidebar";

function Lists() {
   return (
      <Container as={Flex} maxW={"container"} p={0} m={0}>
         <SideBar route="lists" />
         <Box w={"93.8%"}>lists!</Box>
      </Container>
   );
}

export default Lists;
