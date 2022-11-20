import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

function AdCard() {
   return (
      <VStack
         p={5}
         borderRadius={"md"}
         align={"stretch"}
         spacing={6}
         bg={"#e0f0ff"}
      >
         <HStack justify={"space-between"}>
            <Heading textAlign={"left"} size={"sm"}>
               Writing on BeBlogger
            </Heading>
            <CloseIcon h={3} cursor={"pointer"} />
         </HStack>
         <VStack
            align={"stretch"}
            fontSize={"sm"}
            fontWeight={"bold"}
            letterSpacing={0.4}
         >
            <Text align={"left"}>New writer FAQ</Text>
            <Text align={"left"}>Expert writing advice</Text>
            <Text align={"left"}>Grow your relationship</Text>
         </VStack>
         <Box textAlign={"left"}>
            <Button
               size={"sm"}
               px={5}
               bg={"#191918"}
               color={"white"}
               borderRadius={30}
               _hover={{ bg: "#191918" }}
               fontWeight={"normal"}
               letterSpacing={0.4}
            >
               Start writing
            </Button>
         </Box>
      </VStack>
   );
}

export default AdCard;
