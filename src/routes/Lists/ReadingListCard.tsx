import { Box, Button, Heading, HStack, VStack } from "@chakra-ui/react";

function ReadingListCard() {
   return (
      <HStack
         h={190}
         borderRadius={"md"}
         bg={"blackAlpha.100"}
         border={"1px solid"}
         borderColor={"blackAlpha.200"}
      >
         <VStack
            p={9}
            w={"50%"}
            h={"100%"}
            align={"stretch"}
            justify={"space-between"}
         >
            <Heading textAlign={"left"} size={"md"} fontWeight={800}>
               Reading list
            </Heading>
            <Box textAlign={"left"}>
               <Button
                  fontSize={"sm"}
                  borderColor={"blackAlpha.700"}
                  fontWeight={"normal"}
                  borderRadius={30}
                  variant={"outline"}
               >
                  View list
               </Button>
            </Box>
         </VStack>
         <HStack pos={"relative"} w={"50%"} h={"100%"} spacing={1}>
            <Box
               h={"100%"}
               w={"57%"}
               pos={"absolute"}
               left={0}
               bg={"#191918"}
               zIndex={7}
            >
               <Box h={"100%"} w={"100%"} borderRadius={170} bg={"gray"}></Box>
            </Box>
            <Box
               h={"100%"}
               w={"57%"}
               pos={"absolute"}
               left={24}
               bg={"#191918"}
               zIndex={3}
            >
               <Box h={"100%"} w={"100%"} borderRadius={170} bg={"gray"}></Box>
            </Box>
            <Box
               h={"100%"}
               w={"57%"}
               pos={"absolute"}
               right={0}
               bg={"#191918"}
               borderRadius={"md"}
            >
               <Box h={"100%"} w={"100%"} borderRadius={170} bg={"gray"}></Box>
            </Box>
         </HStack>
      </HStack>
   );
}

export default ReadingListCard;
