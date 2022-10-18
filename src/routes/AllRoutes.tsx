import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import RequireAuth from "../hoc/RequireAuth";
import Home from "./Home/Home";
import Landing from "./Landing/Landing";

function AllRoutes() {
   return (
      <Routes>
         <Route
            path="/"
            element={
               <>
                  <Navbar />
                  <Landing />
               </>
            }
         />
         <Route
            path="/home"
            element={
               <RequireAuth>
                  <Home />
               </RequireAuth>
            }
         />
      </Routes>
   );
}

export default AllRoutes;
