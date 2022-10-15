import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing/Landing";

function AllRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Landing />} />
      </Routes>
   );
}

export default AllRoutes;
