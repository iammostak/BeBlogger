import { Box, Container } from "@chakra-ui/react";
import Hero from "../../components/Hero/Hero";

function Landing() {
   return (
      <Container maxW={"container"} p={0} m={0}>
         <Hero />
      </Container>
   );
}

export default Landing;
