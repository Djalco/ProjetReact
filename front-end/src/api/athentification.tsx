import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";
import { getFirebaseErrorMessage } from "@/utils/getFirebaseerrorsMessage";


//creation d'un utilisateur
export const firebaseCreateUser = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        return { data: userCredential.user }
    } catch (error) {
        const firebaseError = error as FirebaseError
        const errorMessage = getFirebaseErrorMessage(
            "createUserWithEmailAndPassword",
            firebaseError.code)
        return {
            error: {
                code: firebaseError.code,
                message: errorMessage
            }
        }
    }
}
//connexion d'un utilisateur
export const firebaseSignInUser = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return { data: userCredential.user }
    } catch (error) {
        const firebaseError = error as FirebaseError

        const errorMessage = getFirebaseErrorMessage(
            "signInWithEmailAndPassword",
            firebaseError.code)
        return {
            error: {
                code: firebaseError.code,
                message: errorMessage
            }
        }
    }
}
//deconnexion d'un utilisateur
export const firebaseLogoutUser = async () => {
    try {
        await signOut(auth)
        return { data: true }
    } catch (error) {
        const firebaseError = error as FirebaseError
        const errorMessage = getFirebaseErrorMessage(
            "firebaseLogoutUser",
            firebaseError.code)
        return {
            error: {
                code: firebaseError.code,
                message: errorMessage
            }
        }
    }
}
//mot de passe oublie
export const sendEmailToResetPassword = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email);
        return { data: true };
    } catch (error) {
        const firebaseError = error as FirebaseError
        const errorMessage = getFirebaseErrorMessage(
            "sendPasswordResetEmail",
            firebaseError.code)
        return {
            error: {
                code: firebaseError.code,
                message: errorMessage
            }
        }
    }
}
//validation d'une addresse mail
export const sendEmailVerificationProcedure = async () => {
    if (auth.currentUser) {
        try {
            await sendEmailVerification(auth.currentUser);
            return { data: true };
        } catch (error) {
            const firebaseError = error as FirebaseError
            const errorMessage = getFirebaseErrorMessage(
                "sendEmailVerification",
                firebaseError.code)
            return {
                error: {
                    code: firebaseError.code,
                    message: errorMessage
                }
            }
        }
    } else {
        return {
            error: {
                code: "unknow",
                message: "une erreur est survenue",
            }
        }
    }
}
//modification
export const updateUserIdentification = async (uid: string, data: object ) => {
    const result = await fetch("https://us-central1-front-end-84aa2.cloudfunctions.net/updateUser", 
        {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            uid: uid,
            data: data
        })
    })

    if(!result.ok){
        const errorResponse = await result.json()
        const firebaseError= errorResponse as FirebaseError

        const errorMessage = getFirebaseErrorMessage(
            "updateUserIdentification",
            firebaseError.code)
        return ({
            error: {

                code: firebaseError.code,
                message: errorMessage
            }
        })
    }

    return {data:true}
}