"use client";
import app from "@/FireBase/firebase.config";
import { ReactNode, createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  UserCredential
} from "firebase/auth";
import axios from "axios";
import { setCookie } from "cookies-next";

interface AuthProviderProps  {
  children: ReactNode;
}


interface User {
  accessToken: string;
  email: string;
  displayName?: string;
  photoUrl?: string;
}


interface AuthInfo{
  createUser: (email: string, password: string)=> Promise<UserCredential>;
  signIn:(email:string, password: string)=> Promise<UserCredential>
  logOut:()=> Promise<void>
  user: User | null;
  loading: boolean;

}


export const AuthContext = createContext<AuthInfo | null>(null);
const auth = getAuth(app);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email: string, password: string):Promise<UserCredential> => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = async (email:string, password:string):Promise<UserCredential> => {
    setLoading(true);
    const response: UserCredential = await signInWithEmailAndPassword(auth, email, password);

    const idToken = await response.user.getIdToken()
    setCookie("token", idToken);
    return response;
  };

  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  useEffect(()   => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        axios
          .post("https://mitnog-server.vercel.app/auth/login", {
            email: currentUser.email,
          })
          .then((data) => {
            console.log(data);
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const authInfo = { createUser, signIn, user, loading, logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
