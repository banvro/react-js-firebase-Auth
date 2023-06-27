// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { useState, useEffect,createContext ,useContext } from 'react';

// const auth = getAuth();
// const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext)
// }

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     useEffect(() => {
//         onAuthStateChanged(auth,(user) => {
//             setUser(user)
//         })
//     }, []);
  
//     return (
//       <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
//     );
//   };



// import React, { useContext, useState, useEffect } from "react"
// import { auth } from "./Firebase"

// const AuthContext = React.createContext()

// export function useAuth() {
//   return useContext(AuthContext)
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState()
//   const [loading, setLoading] = useState(true)

//   function signup(email, password) {
//     return auth.createUserWithEmailAndPassword(email, password)
//   }

//   function login(email, password) {
//     return auth.signInWithEmailAndPassword(email, password)
//   }

//   function logout() {
//     return auth.signOut()
//   }

//   function resetPassword(email) {
//     return auth.sendPasswordResetEmail(email)
//   }

//   function updateEmail(email) {
//     return currentUser.updateEmail(email)
//   }

//   function updatePassword(password) {
//     return currentUser.updatePassword(password)
//   }

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       setCurrentUser(user)
//       setLoading(false)
//     })

//     return unsubscribe
//   }, [])

//   const value = {
//     currentUser,
//     login,
//     signup,
//     logout,
//     resetPassword,
//     updateEmail,
//     updatePassword
//   }

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   )
// }



import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./Firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(AuthContext);
}