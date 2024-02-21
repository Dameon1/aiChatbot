import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  //checkAuthStatus,
  loginUser,
  //logoutUser,
  //signupUser,
} from "../helpers/api-communicator";

type User = {
  name: string;
  email: string;
};
type UserAuth = {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};
const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // fetch if the user's cookies are valid then skip login
    // async function checkStatus() {
    //   const data = await checkAuthStatus();
    //   if (data) {
    //     setUser({ email: data.email, name: data.name });
    //     setIsLoggedIn(true);
    //   }
    // }
    //checkStatus();
  }, []);
  const login = async (email: string, password: string) => {
    const data = await loginUser(email, password);
    console.log("data: " + data)
    if (data) {
      console.log("noData:",data)
      setUser({ email: data.email, name: data.name });
      setIsLoggedIn(true);
    }
  };
  const signup = async (name: string, email: string, password: string) => {
    // const data = await signupUser(name, email, password);
    // if (data) {
    //   setUser({ email: data.email, name: data.name });
    //   setIsLoggedIn(true);
    // }
    console.log(name, email, password);
  };
  const logout = async () => {
    //await logoutUser();
    console.log("logging out")
    setIsLoggedIn(false);
    setUser(null);
    window.location.reload();
  };

  const value = {
    user,
    isLoggedIn,
    login,
    logout,
    signup,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

// import { createContext, ReactNode, useState, useEffect, useContext } from "react";
// import { checkAuthStatus, loginUser } from "../helpers/api-communicator";

// type User = {
//   name: string;
//   email: string;
// };

// type UserAuth = {
//   isLoggedIn: boolean;
//   user: User | null;
//   login: (email: string, password: string) => Promise<void>;
//   signup: (email: string, password: string) => Promise<void>;
//   logout: () => Promise<void>;
// };
// export const AuthContext = createContext<UserAuth | null>(null);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     async function checkStatus() {
//       const data = await checkAuthStatus();
//       if (data) {
//         setUser({email: data.email, name: data.name});
//         setIsLoggedIn(true);
//       }
//     }
//     checkStatus();
//   }, []);

//   const login = async (email: string, password: string) => {
//     const data = await loginUser(email, password);
//     if (data) {
//       setUser({email: data.email, name: data.name});
//       setIsLoggedIn(true);
//     }
//   };
//   const signup = async (email: string, password: string) => {console.log(email, password);};
//   const logout = async () => {};

//   const value = {
//     user,
//     isLoggedIn,
//     login,
//     logout,
//     signup,
//   };
//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => useContext(AuthContext);
