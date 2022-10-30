import { Container, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Suggestion from "../../components/Suggestion/Suggestion";
import BlogItem from "./BlogItem";

function Blog() {
   return (
      <Container as={Flex} maxW={"container"} p={0} m={0}>
         <Sidebar route="home" />
         <Flex
            w={"100%"}
            pos={"relative"}
            ml={{ base: "17%", md: "11%", lg: "6.2%" }}
         >
            <BlogItem />
            <Suggestion />
         </Flex>
      </Container>
   );
}

export default Blog;
