import { Heading } from "@chakra-ui/react";

function BlogPointHeading({point_heading}: any) {
   return ( 
      <Heading pt={7} lineHeight={0} fontSize={"xl"} textAlign={"left"}>
         {point_heading}
      </Heading>
    );
}

export default BlogPointHeading;