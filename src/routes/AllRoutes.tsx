import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import RequireAuth from "../hoc/RequireAuth";
import Blog from "./Blog/Blog";
import Home from "./Home/Home";
import Landing from "./Landing/Landing";
import Lists from "./Lists/Lists";
import Notifications from "./Notifications/Notifications";
import Stories from "./Stories/Stories";
import Write from "./Write/Write";

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
         <Route
            path="/notifications"
            element={
               <RequireAuth>
                  <Notifications />
               </RequireAuth>
            }
         />
         <Route
            path="/lists"
            element={
               <RequireAuth>
                  <Lists />
               </RequireAuth>
            }
         />
         <Route
            path="/stories"
            element={
               <RequireAuth>
                  <Stories />
               </RequireAuth>
            }
         />
         <Route
            path="/write"
            element={
               <RequireAuth>
                  <Write />
               </RequireAuth>
            }
         />
         <Route
            path="/home/:id"
            element={
               <RequireAuth>
                  <Blog />
               </RequireAuth>
            }
         />
      </Routes>
   );
}

export default AllRoutes;
