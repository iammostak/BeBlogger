import { Box, Button, Flex, Heading, HStack, VStack } from "@chakra-ui/react";

const data = [
   "Self Improvement",
   "Writing",
   "Relationship",
   "Productivity",
   "Politics",
   "Cryptocurrency",
   "Psychology",
];

function Topics() {
   return (
      <VStack align={"stretch"} spacing={6}>
         <Heading textAlign={"left"} size={"sm"} fontFamily={"Helvetica"}>
            Recommended topics
         </Heading>
         <Flex flexWrap={"wrap"} gap={2}>
            {data.map((item) => (
               <Button
                  borderRadius={30}
                  fontSize={"sm"}
                  letterSpacing={0.3}
                  fontWeight={"normal"}
                  bg={"blackAlpha.200"}
               >
                  {item}
               </Button>
            ))}
         </Flex>
      </VStack>
   );
}

export default Topics;
