import { Box, Tooltip, VStack } from "@chakra-ui/react";
import { SiMedium } from "react-icons/si";
import { HiHome, HiOutlineHome } from "react-icons/hi2";
import {
   RiFileList3Fill,
   RiFileList3Line,
   RiNotification2Fill,
   RiNotification2Line,
} from "react-icons/ri";
import { IoBookmarks, IoBookmarksOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { TfiWrite } from "react-icons/tfi";
import { useNavigate, useParams } from "react-router-dom";

type Params = {
   route: string;
};

function Sidebar({ route }: Params) {
   const [active, setActive] = useState<string>("home");
   const navigate = useNavigate();

   useEffect(() => {
      document.title = "Medium";
      setActive(route);
   }, []);

   return (
      <VStack
         h={"100vh"}
         w={{ base: "17%", md: "11%", lg: "6.2%" }}
         py={10}
         justify="space-between"
         spacing={0}
         borderRight={"1px solid"}
         borderColor={"blackAlpha.200"}
         pos={"fixed"}
      >
         <Box>
            <SiMedium
               onClick={() => navigate("/")}
               color={"#272727"}
               size={40}
               style={{ cursor: "pointer" }}
            />
         </Box>
         <Box>
            <VStack spacing={10} mb={-14}>
               {active === "home" ? (
                  <Tooltip hasArrow label="Home" bg="#191919" placement="right">
                     <Box>
                        <HiHome
                           onClick={() => navigate("/home")}
                           size={24}
                           style={{ cursor: "pointer" }}
                        />
                     </Box>
                  </Tooltip>
               ) : (
                  <Tooltip hasArrow label="Home" bg="#191919" placement="right">
                     <Box>
                        <HiOutlineHome
                           onClick={() => navigate("/home")}
                           size={24}
                           style={{ cursor: "pointer" }}
                        />
                     </Box>
                  </Tooltip>
               )}
               {active === "notifications" ? (
                  <Tooltip
                     hasArrow
                     label="Notifications"
                     bg="#191919"
                     placement="right"
                  >
                     <Box>
                        <RiNotification2Fill
                           onClick={() => navigate("/notifications")}
                           size={22}
                           style={{ cursor: "pointer" }}
                        />
                     </Box>
                  </Tooltip>
               ) : (
                  <Tooltip
                     hasArrow
                     label="Notifications"
                     bg="#191919"
                     placement="right"
                  >
                     <Box>
                        <RiNotification2Line
                           onClick={() => navigate("/notifications")}
                           size={22}
                           style={{ cursor: "pointer" }}
                        />
                     </Box>
                  </Tooltip>
               )}
               {active === "lists" ? (
                  <Tooltip
                     hasArrow
                     label="Lists"
                     bg="#191919"
                     placement="right"
                  >
                     <Box>
                        <IoBookmarks
                           onClick={() => navigate("/lists")}
                           size={20}
                           style={{ cursor: "pointer" }}
                        />
                     </Box>
                  </Tooltip>
               ) : (
                  <Tooltip
                     hasArrow
                     label="Lists"
                     bg="#191919"
                     placement="right"
                  >
                     <Box>
                        <IoBookmarksOutline
                           onClick={() => navigate("/lists")}
                           size={20}
                           style={{ cursor: "pointer" }}
                        />
                     </Box>
                  </Tooltip>
               )}
               {active === "stories" ? (
                  <Tooltip
                     hasArrow
                     label="Stories"
                     bg="#191919"
                     placement="right"
                  >
                     <Box>
                        <RiFileList3Fill
                           onClick={() => navigate("/stories")}
                           size={22}
                           style={{ cursor: "pointer" }}
                        />
                     </Box>
                  </Tooltip>
               ) : (
                  <Tooltip
                     hasArrow
                     label="Stories"
                     bg="#191919"
                     placement="right"
                  >
                     <Box>
                        <RiFileList3Line
                           onClick={() => navigate("/stories")}
                           size={22}
                           style={{ cursor: "pointer" }}
                        />
                     </Box>
                  </Tooltip>
               )}
            </VStack>
         </Box>
         <Box pt={12} borderTop={"1px solid"} borderColor={"blackAlpha.200"}>
            <VStack spacing={20}>
               <Tooltip hasArrow label="Write" bg="#191919" placement="right">
                  <Box>
                     <TfiWrite
                        onClick={() => navigate("/write")}
                        size={20}
                        style={{ cursor: "pointer" }}
                     />
                  </Box>
               </Tooltip>
               <FaUserCircle size={30} style={{ cursor: "pointer" }} />
            </VStack>
         </Box>
      </VStack>
   );
}

export default Sidebar;
