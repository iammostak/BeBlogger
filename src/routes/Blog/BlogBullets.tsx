import { ListItem, UnorderedList } from "@chakra-ui/react";

function BlogBullets({ bullets }: any) {
   return (
      <UnorderedList
         pl={7}
         textAlign={"left"}
         fontSize={"xl"}
         fontFamily={"Times"}
         lineHeight={1.7}
      >
         {bullets.map((item: string) => (
            <ListItem>{item}</ListItem>
         ))}
      </UnorderedList>
   );
}

export default BlogBullets;
