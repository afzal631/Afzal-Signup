import { createContext, useEffect, useState, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

//CPU - create context , Provide context, useContext

const userAuthContexts = createContext(); //creating context

export function UserAuthContextProvider({ children }) {
  //for  providing to childrens

  const [user, setUser] = useState("");

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <userAuthContexts.Provider
      value={{ user, signUp, login, logOut, googleSignIn }}
    >
      {children}
    </userAuthContexts.Provider>
  );
}

// for using context we do this // this function is used in all components for accessing the state of context or changing the state of the context.
export function useUserAuth() {
  return useContext(userAuthContexts);
}
