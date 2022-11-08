import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider();

    // register user
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout user
    const logoutUser = () => {
        return signOut(auth)
    }

    // observe user using state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(user)
        })
        return () => unsubscribe();
    }, [user])

    const authInfo = {
        user,
        registerUser,
        loginUser,
        googleLogin,
        logoutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;