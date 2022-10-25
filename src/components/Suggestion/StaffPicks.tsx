import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

type Props = {
   avatar: string;
   name: string;
   heading: string;
};

function StaffPicks(item: Props) {
   const { avatar, name, heading } = item;
   return (
      <VStack align={"left"}>
         <HStack>
            <Image boxSize={5} borderRadius={50} src={avatar} />
            <Text
               fontSize={"xs"}
               color={"blackAlpha.800"}
               fontWeight={"bold"}
               letterSpacing={0.4}
            >
               {name}
            </Text>
         </HStack>
         <Heading textAlign={"left"} size={"sm"}>
            {heading}
         </Heading>
      </VStack>
   );
}

export default StaffPicks;
