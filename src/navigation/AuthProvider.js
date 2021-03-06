import React, { createContext, useState } from "react";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password)
                    } catch (e) {
                        if (e.code === 'auth/invalid-email') {
                            alert('the email address and password is incorrect!')
                        } else {
                            console.log(e);
                        }
                    }
                },
                googleLogin: async() => {
                    try{
                        const {idToken} = await GoogleSignin.signIn();

                        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

                        await auth().signInWithCredential(googleCredential);
                    }catch(error){
                        console.log({error});
                    }
                },
                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password);
                    } catch (e) {
                        if (e.code === 'auth/invalid-email') {
                            alert('the email address and password is invalid!')
                        } else if (e.code === 'auth/email-already-in-use') {
                            alert('the email address is already in use!')
                        } else {
                            console.log(e);
                        }
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.log(e);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}