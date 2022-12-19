import axios from "axios";
import {
   LOGIN_ERROR,
   LOGIN_LOADING,
   LOGIN_SUCCESS,
   LOGOUT_SUCCESS,
   SIGNUP_ERROR,
   SIGNUP_LOADING,
   SIGNUP_SUCCESS,
} from "./auth.types";

type userCred = {
   email: string;
   password: string;
};

export const signupAction = (creds: userCred) => async (dispatch: any) => {
   dispatch({ type: SIGNUP_LOADING });
   try {
      let res = await axios.post(
         `${import.meta.env.VITE_API_URL}/user/signup`,
         creds
      );
      dispatch({ type: SIGNUP_SUCCESS });
      return true;
   } catch (e) {
      dispatch({ type: SIGNUP_ERROR });
      return false;
   }
};

export const loginAction = (creds: userCred) => async (dispatch: any) => {
   dispatch({ type: LOGIN_LOADING });
   try {
      let res = await axios.post(
         `${import.meta.env.VITE_API_URL}/user/login`,
         creds
      );
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      return true;
   } catch (e) {
      dispatch({ type: LOGIN_ERROR });
      return false;
   }
};

export const logoutAction = () => async (dispatch: any) => {
   dispatch({ type: LOGOUT_SUCCESS });
   return true;
};
