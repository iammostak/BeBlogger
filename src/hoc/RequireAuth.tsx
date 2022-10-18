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
   let auth = JSON.parse(`${localStorage.getItem("jwt")}`) || Auth;

   if (auth.mainToken.length !== 0) {
      return children;
   }
   return <Navigate to="/" />;
}

export default RequireAuth;
