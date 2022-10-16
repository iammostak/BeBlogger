import {
   LOGIN_ERROR,
   LOGIN_LOADING,
   LOGIN_SUCCESS,
   LOGOUT_SUCCESS,
   SIGNUP_ERROR,
   SIGNUP_LOADING,
   SIGNUP_SUCCESS,
} from "./auth.types";

const initialState: {
   loading: boolean;
   error: boolean;
   mainToken: string;
   refreshToken: string;
} = {
   loading: false,
   error: false,
   mainToken: "",
   refreshToken: "",
};

type action = {
   type: string;
   payload: {
      mainToken: string;
      refreshToken: string;
   };
};

function authReducer(state = initialState, { type, payload }: action) {
   switch (type) {
      case SIGNUP_LOADING: {
         return {
            ...state,
            loading: true,
            error: false,
         };
      }
      case SIGNUP_ERROR: {
         return {
            ...state,
            loading: false,
            error: true,
         };
      }
      case SIGNUP_SUCCESS: {
         return {
            ...state,
            loading: false,
            error: false,
         };
      }
      case LOGIN_LOADING: {
         return {
            ...state,
            loading: true,
            error: false,
         };
      }
      case LOGIN_ERROR: {
         return {
            ...state,
            loading: false,
            error: true,
         };
      }
      case LOGIN_SUCCESS: {
         localStorage.setItem("jwt", JSON.stringify(payload));
         return {
            ...state,
            loading: false,
            error: false,
            ...payload,
         };
      }
      case LOGOUT_SUCCESS: {
         localStorage.removeItem("jwt");
         return {
            ...state,
            loading: false,
            error: false,
            mainToken: "",
            refreshToken: "",
         };
      }
      default: {
         return state;
      }
   }
}

export default authReducer;
