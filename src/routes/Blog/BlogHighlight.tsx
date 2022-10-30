import { Text } from "@chakra-ui/react";

function BlogHighlight({ highlight }: any) {
   return (
      <Text
         textAlign={"left"}
         fontSize={"xl"}
         fontFamily={"Times"}
         bg={"green.50"}
      >
         {highlight}
      </Text>
   );
}

export default BlogHighlight;
