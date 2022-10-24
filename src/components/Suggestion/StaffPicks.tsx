import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

function StaffPicks() {
   return (
      <VStack align={"left"}>
         <HStack>
            <Image
               boxSize={5}
               borderRadius={50}
               src="https://bit.ly/dan-abramov"
            />
            <Text
               fontSize={"xs"}
               color={"blackAlpha.800"}
               fontWeight={"bold"}
               letterSpacing={0.4}
            >
               Ryan Holiday
            </Text>
         </HStack>
         <Heading textAlign={"left"} size={"sm"}>
            If You Try To Do Everything, You Won't Do Anything
         </Heading>
      </VStack>
   );
}

export default StaffPicks;
