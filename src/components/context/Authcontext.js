import { Children, createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../Firebase/Firebase"
import { doc, setDoc } from "firebase/firestore"
import { useState } from "react";
import { useEffect } from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const authcontext = createContext()

export const Authprovider = ({ children }) => {
    const [user, setUser] = useState({})
    // const navi=useNavigate()

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password).then((user) => {



            Swal.fire({
                title: 'Success',
                text: "User created",
                icon: 'success',
                confirmButtonText: 'ok'
            })

            setTimeout(() => {
                window.location.reload()
            }, 3000);




        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire({
                title: 'Error!',
                text: errorMessage,
                icon: 'error',
                confirmButtonText: 'ok'
            })


        });
        setDoc(doc(db, "myusers", email), {
            downloads: [],
        })
    }
    useEffect(() => {
        const isuser = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser)
        })

        return () => {
            isuser()
        }
    }, [])

    function logIn(email, password) {
        signInWithEmailAndPassword(auth, email, password).then((user) => {

            if (user) {

                Swal.fire({
                    title: 'Success',
                    text: "User logged in",
                    icon: 'success',
                    confirmButtonText: 'ok'
                })
            }

            setTimeout(() => {
                window.location.reload()
            }, 3000);

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire({
                title: 'Error!',
                text: errorMessage,
                icon: 'error',
                confirmButtonText: 'ok'
            })


        });
    }
    function logout(email, password) {
        return signOut(auth, email, password)
    }









    return <authcontext.Provider value={{ user, signUp, logIn, logout }}>{children}</authcontext.Provider>

}



export function useAuth() {
    return useContext(authcontext)
}

