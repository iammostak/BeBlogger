import { Text } from "@chakra-ui/react";

function BlogDescription({ description }: any) {
   return (
      <Text textAlign={"left"} fontSize={"xl"} fontFamily={"Times"}>
         {description}
      </Text>
   );
}

export default BlogDescription;
