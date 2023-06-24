import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect,createContext  } from 'react';

const auth = getAuth();
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            setUser(user)
        })
    }, []);
  
    return (
      <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
  };