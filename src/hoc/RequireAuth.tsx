import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

// type Props = {
//    children: Function;
// };

const Auth: {
   mainToken: string;
   refreshToken: string;
} = {
   mainToken: "",
   refreshToken: "",
};

function RequireAuth({ children }: any) {
   // let auth = (localStorage.getItem("jwt")) || "";
   // auth = JSON.parse(auth) || Auth;
   // console.log(auth);
   // if (auth) {
   //    return children;
   // }
   // return <Navigate to="/" />;
}

export default RequireAuth;
