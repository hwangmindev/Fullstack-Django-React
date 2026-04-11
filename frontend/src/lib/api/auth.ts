import API from "./axios";
import { RegisterPayload, LoginPayload, AuthResponse } from "../types/auth";

export const register = async (data: RegisterPayload) =>
  API.post("register/", data);

export const login = async (data: LoginPayload) => {
  const res = await API.post<AuthResponse>("/login/", data);

  if (typeof window !== "undefined") {
    localStorage.setItem("token", res.data.access);
  }

  return res.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};
