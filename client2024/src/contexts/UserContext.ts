import { createContext } from "react";

export const defaultUserContext = {
  user: {
    userName: "",
  },
  setUser: (user: User) => {
    console.log("setUser", user);
  },
};

export const UserContext =
  createContext<UserContextInterface>(defaultUserContext);

export interface UserContextInterface {
  user: User;
  setUser: (user: User) => void;
}

export interface User {
  userName: string;
}
