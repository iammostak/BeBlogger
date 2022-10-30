import { Text } from "@chakra-ui/react";

function BlogImportantNote({ important_note }: any) {
   return (
      <Text p={7} fontSize={"2xl"} color={"blackAlpha.600"}>
         {important_note}
      </Text>
   );
}

export default BlogImportantNote;
