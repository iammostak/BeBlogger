import { Text } from "@chakra-ui/react";

function BlogPoint({ point }: any) {
   return (
      <Text textAlign={"left"} fontSize={"xl"} fontFamily={"Times"}>
         <span style={{ textDecoration: "underline" }}>{point[0]}</span>{" "}
         {point[1]}
      </Text>
   );
}

export default BlogPoint;
