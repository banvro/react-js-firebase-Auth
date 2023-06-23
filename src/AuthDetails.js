import React, { useEffect, useState } from 'react'
import { auth } from "../src/firebase"

import { onAuthStateChanged, signOut } from 'firebase/auth';
const AuthDetails = () => {
    const [authUser, setauthUser] = useState(null);
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setauthUser(user);
            } else {
                setauthUser(null);  
            }
        });
        return () => {
            listen();
        }
    },[]);

    const userSignout = () => {
        signOut(auth).then(() => {
            console.log('signour sucessf')

        }).catch(error => console.log(error))
    }
    return (
        <>


            {/* <div>
                {authUser ? <> <p>{`signed in as ${authUser.email}`}</p>
            <button onClick={userSignout}>sign out</button></> : <p>signed out</p>}
            </div> */}





        </>
    )
}

export default AuthDetails