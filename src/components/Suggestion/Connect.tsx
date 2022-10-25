import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

function Connect() {
   return (
      <VStack
         spacing={5}
         borderBottom={"1px solid"}
         pb={8}
         borderColor={"blackAlpha.200"}
      >
         <HStack spacing={4}>
            <SiMedium
               color={"#272727"}
               size={40}
               style={{ cursor: "pointer" }}
            />
            <AddIcon color={"blackAlpha.600"} />
            <FaTwitter
               color={"#38a1f3"}
               size={26}
               style={{ cursor: "pointer" }}
            />
         </HStack>
         <Text w={"90%"} color={"blackAlpha.800"}>
            Discover Medium writers you already follow on Twitter.
         </Text>
         <Button
            w={"70%"}
            variant={"outline"}
            borderRadius={30}
            gap={1}
            fontWeight={"normal"}
            borderColor={"blackAlpha.500"}
            leftIcon={<FaTwitter color={"#38a1f3"} size={20} />}
         >
            Connect to Twitter
         </Button>
         <Text
            fontSize={"sm"}
            color={"blackAlpha.600"}
            textDecoration={"underline"}
            cursor={"pointer"}
         >
            Maybe Later
         </Text>
      </VStack>
   );
}

export default Connect;
