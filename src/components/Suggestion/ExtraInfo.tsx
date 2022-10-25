import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { CiBookmarkPlus } from "react-icons/ci";

function ExtraInfo() {
   return (
      <VStack align={"stretch"} spacing={6}>
         <Heading textAlign={"left"} size={"sm"} fontFamily={"Helvetica"}>
            Reading list
         </Heading>
         <Flex
            flexWrap={"wrap"}
            fontSize={"sm"}
            color={"blackAlpha.700"}
            justify={"flex-start"}
            gap={1}
            align={"center"}
         >
            <Text textAlign={"left"}>Click the</Text>
            <CiBookmarkPlus size={20} color={"darkgray"} />
            <Text textAlign={"left"}>
               on any story to easily add it to your
            </Text>
            <Text textAlign={"left"}>
               reading list or a custom list that you can share.
            </Text>
         </Flex>
         <Text textAlign={"left"} fontSize={"xs"} color={"blackAlpha.700"}>
            Help Status Writers Blog Careers Privacy Terms About Knowable
         </Text>
      </VStack>
   );
}

export default ExtraInfo;
