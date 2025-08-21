import { auth, db } from "@/config/firebase-config";
import { UserDocument, UserInterface } from "@/types/user";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState<UserInterface | null>(null)
    const [authUserIsLoading, setAuthUserIsLoading] = useState<boolean>(true)

    const formatAuthUser = (user: UserInterface) => ({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL
    });

    const getUserDocument = async (user: UserInterface) => {
        if (auth.currentUser) {
            // get doc firestore 
            const documentRef = doc(db, "users", auth.currentUser.uid)
            const compactUser = user

            //mettre les donnees de l'utilisateur a jour
            onSnapshot(documentRef, async (doc) => {
                if (doc.exists()) {
                    compactUser.userDocument = doc.data() as UserDocument
                }
                setAuthUser((prevAuthUser) => ({
                    ...prevAuthUser,
                    ...compactUser,
                }))
                setAuthUserIsLoading(false)
            })
        }
    }
    const authStateChanged = async (authState: UserInterface | User | null) => {
        if (!authState) {

            setAuthUser(null)
            setAuthUserIsLoading(false)
            return
        }
        setAuthUserIsLoading(true)
        const formatedUser = formatAuthUser(authState);
        await getUserDocument(formatedUser)
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, authStateChanged)
        return () => unsubscribe()
    }, [])

    return {
        authUser,
        authUserIsLoading
    }
}