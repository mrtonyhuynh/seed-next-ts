import React, { useReducer } from "react";

import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  SIGN_UP,
  FORGOT_PASS,
} from "./action.type";

import { AuthContext } from "./auth.context";

const isBrowser = typeof window !== "undefined";

/**
 * Giá trị state ban đầu
 */
const INITIAL_STATE = {
  isAuthenticated: isBrowser && !!localStorage.getItem("logged-user"),
  currentForm: "signIn",
};

/**
 * - REDUCER Nhận vào STATE và ACTION
 * - Tuỳ vào ACTION để cập nhật lại STATE
 */
function reducer(state: any, action: any) {
  console.log(state, "auth");

  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        currentForm: "signIn",
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    case SIGN_UP:
      return {
        ...state,
        currentForm: "signUp",
      };
    case FORGOT_PASS:
      return {
        ...state,
        currentForm: "forgotPass",
      };
    default:
      return state;
  }
}


export const AuthProvider: React.FunctionComponent = ({ children }) => {
  /**
   * useReducer function nhận vào reducer và initialState khởi tạo ban đầu,
   * trả về state hiện tại và dispatch function dùng để trigger 1 action
   */
  const [authState, authDispatch] = useReducer(reducer, INITIAL_STATE);

  return (
      // Context lúc này mang giá trị { authState, authDispatch }
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
