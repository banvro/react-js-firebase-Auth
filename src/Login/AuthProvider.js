import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect,createContext ,useContext } from 'react';

const auth = getAuth();
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext)
}

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