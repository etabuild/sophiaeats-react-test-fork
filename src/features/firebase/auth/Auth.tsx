
import {getAuth, signInAnonymously} from "firebase/auth";
import {auth} from "../Firebase.tsx";
import {useSetAtom} from "jotai/react";
import {authStateAtom} from "../../../atoms.ts";
export const useAuth = () => {

    const setAuthState = useSetAtom(authStateAtom)

    const initAuth = async () => {
        signInAnonymously(auth).then((user)=>{
            console.log(user.user)
            setAuthState({uid: user.user.uid})
        }).catch((err)=>{
            console.log(err)
        })
    }
    return{initAuth}

}