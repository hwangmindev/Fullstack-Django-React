import API from "./axios";
import { RegisterPayload, LoginPayload, AuthResponse } from "../types/auth";

/** Key used for JWT in `localStorage` (see `login` / `logout`). */
export const AUTH_TOKEN_STORAGE_KEY = "token";

export const register = async (data: RegisterPayload) =>
  API.post("register/", data);

export const login = async (data: LoginPayload) => {
  const res = await API.post<AuthResponse>("/login/", data);

  if (typeof window !== "undefined") {
    localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, res.data.access);
  }

  return res.data;
};

export const logout = () => {
  localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
};
