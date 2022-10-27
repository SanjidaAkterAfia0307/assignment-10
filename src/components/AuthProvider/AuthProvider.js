import React, { createContext, useEffect, useState } from 'react';
import { getAuth, signOut, onAuthStateChanged,GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import app from "../../firebase/firebase.init"
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [dark, setDark] = useState(false)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()


    const createGoogleUser = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch(error => {
                console.error('error: ', error);
            })
    }
    const createGitHubUser = () => {
        setLoading(true)
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch(error => {
                console.error('error: ', error);
            })
    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser=(profile)=>{

        return updateProfile(auth.currentUser,profile)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = { user, createGoogleUser,updateUser,loading, createUser,setLoading, logOut,createGitHubUser,signInUser,setDark,dark }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;