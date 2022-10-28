import {
   Box,
   Button,
   Heading,
   HStack,
   Image,
   Text,
   VStack,
} from "@chakra-ui/react";

const data = [
   {
      avatar: "https://avatars.githubusercontent.com/u/101388923?v=4",
      name: "Sanjaykumar Verma",
      role: "Full Stack Web Developer",
   },
   {
      avatar: "https://avatars.githubusercontent.com/u/101392142?v=4",
      name: "Suraj Kumar Mishra",
      role: "Aspiring Full Stack Web Developer",
   },
   {
      avatar: "https://avatars.githubusercontent.com/u/102856087?v=4",
      name: "Madhukesh Kumar Thakur",
      role: "Aspiring Full Stack Web Developer",
   },
   {
      avatar: "https://avatars.githubusercontent.com/u/63135773?v=4",
      name: "Shakil Ahmad",
      role: "Full Stack Web Developer",
   },

   {
      avatar: "https://avatars.githubusercontent.com/u/99809028?v=4",
      name: "Md Mostafijur Rahman",
      role: "Aspiring Full Stack Web Developer",
   },
];

function Follow() {
   return (
      <VStack align={"stretch"} spacing={6}>
         <Heading textAlign={"left"} size={"sm"} fontFamily={"Helvetica"}>
            Who to follow
         </Heading>
         {data.map((item) => (
            <HStack justify={"space-between"}>
               <HStack align={"flex-start"}>
                  <Image
                     boxSize={39}
                     borderRadius={50}
                     src={item.avatar}
                     alt="avatar"
                  />
                  <VStack align={"stretch"}>
                     <Heading
                        textAlign={"left"}
                        fontSize={"sm"}
                        color={"blackAlpha.900"}
                     >
                        {item.name}
                     </Heading>
                     <Text
                        fontSize={"xs"}
                        textAlign={"left"}
                        color={"blackAlpha.700"}
                     >
                        {item.role}
                     </Text>
                  </VStack>
               </HStack>
               <Box>
                  <Button
                     size={"sm"}
                     fontSize={"xs"}
                     fontWeight={"normal"}
                     variant={"outline"}
                     borderRadius={30}
                     borderColor={"blackAlpha.600"}
                  >
                     Follow
                  </Button>
               </Box>
            </HStack>
         ))}
         <Text
            w={"50%"}
            fontSize={"sm"}
            textAlign={"left"}
            color={"green.600"}
            cursor={"pointer"}
            _hover={{ color: "blackAlpha.800" }}
         >
            See more suggestions
         </Text>
      </VStack>
   );
}

export default Follow;
