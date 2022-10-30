import { Heading } from "@chakra-ui/react";

function BlogHeading({ heading }: any) {
   return (
      <Heading pt={7} lineHeight={0} fontSize={"2xl"} textAlign={"left"}>
         {heading}
      </Heading>
   );
}

export default BlogHeading;
